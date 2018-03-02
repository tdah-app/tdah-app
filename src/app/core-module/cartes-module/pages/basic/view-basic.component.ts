import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Carte } from './../../objects/carte';
import { Methode } from './../../../methodes-module/objects/methode';
import { METHODES } from './../../../methodes-module/data/methodes';
import { ViewHomePage } from './../dimensions/view-homepage.component';
import { ViewVraiFaux } from './../vrai-faux/view-vraifaux.component';
import { ViewImageBasic } from './../image-basic/view-image-basic.component';
import { DataService } from './../../../../data-service/data.service';
import { ToastsService } from './../../../toasts-service/toasts.service';

@Component({
  selector: 'view-basic',
  templateUrl: 'view-basic.component.html',
})
export class ViewBasic implements OnInit {

  myCarte: Carte;
  i: number;
  correct: undefined;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataService, public toastService: ToastsService) {
    this.myCarte = navParams.get("resultParam");
    this.i = navParams.get("index");
    this.correct = navParams.get("correct");
  }


  ngOnInit() {
    if (this.correct == undefined)
      this.title = this.myCarte.nom;
    else if (this.correct)
      this.title = 'Correct !';
    else this.title = 'Incorrect !';
  }


  boutonTapped() {
    //on regarde si la liste d'élements de la carte n'a pas été entièrement parcourue
    if (this.i<this.myCarte.listeElements.length-1) {
      this.i = this.i + 1;

        if(this.myCarte.listeElements[this.i].typeElem == 'ElementVraiFaux') {
           this.navCtrl.push(ViewVraiFaux, {
           resultParam: this.myCarte,
           index: this.i
           });
       }
         else if(this.myCarte.listeElements[this.i].typeElem == 'ElementSavaisTuQue') {
           this.navCtrl.push(ViewBasic, {
           resultParam: this.myCarte,
           index: this.i
           });
       }

       else if(this.myCarte.listeElements[0].typeElem == 'ElementImage') {
           this.navCtrl.push(ViewImageBasic, {
           resultParam: this.myCarte,
           index: 0
           });
       }

         else if(this.myCarte.listeElements[this.i].typeElem == 'ElementParent') {
           this.navCtrl.push(ViewBasic, {
           resultParam: this.myCarte,
           index: this.i
           });
       }
    }
    // si la liste d'élements de la carte a été entièrement parcourue
    else {
	    this.checkCarMet();
	    //on retourne à la page d'accueil et on reset l'historique de navigation
            this.navCtrl.setRoot(ViewHomePage);
            this.navCtrl.popToRoot();
    }
  }

	// Regarde si c'est la première fois qu'on lit une carte et l'ajoute a READ_CARDS si oui
	// Regarde si on débloque une nouvelle méthode et ajoute si oui
	private checkCarMet() {
		this.dataProvider.getData(this.dataProvider.READ_CARDS).then ( readCards => {
			if(readCards) {
				if(readCards.indexOf(this.myCarte.id) == -1) {
					this.dataProvider.addData(this.myCarte.id, this.dataProvider.READ_CARDS);	
					if((readCards.length + 1) % Methode.DEBLOCK_MET == 0) {
						this.addReceivedMethod();
					}
				}
			} else {
				this.dataProvider.addData(this.myCarte.id, this.dataProvider.READ_CARDS);
				if(Methode.DEBLOCK_MET == 1) {
						this.addReceivedMethod();
				}
			}
      	    	});
	}
	
	// Opération pour ajouter une méthode
	private addReceivedMethod() {
		this.dataProvider.getData(this.dataProvider.RECEIVED_METHODS).then( receivedMethods => {
			if(receivedMethods) {
				let i = 0;
				while(i < METHODES.length && receivedMethods.indexOf(METHODES[i].id) != -1) {
					i++;
				}
				if(i < METHODES.length) {
					this.dataProvider.addData(METHODES[i].id, this.dataProvider.RECEIVED_METHODS);
					this.toastService.sendToast(this.toastService.MESSAGE);
						
				}
			}
		});
	}

}
