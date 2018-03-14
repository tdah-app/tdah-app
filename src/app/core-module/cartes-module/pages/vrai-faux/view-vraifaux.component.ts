import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Carte } from './../../objects/carte';
import { ElementVraiFaux } from './../../../objects/element-vrai-faux';
import { ViewHomePage } from './../dimensions/view-homepage.component';
import { Utils } from './../../utils/utils';
import { DataService } from './../../../../data-service/data.service';
import { ToastsService } from './../../../toasts-service/toasts.service';

@Component({
  selector: 'view-vraifaux',
  templateUrl: 'view-vraifaux.component.html',
})
export class ViewVraiFaux implements OnInit {

	myCarte: Carte;
  	i: number;
  	nomBouton: string;
  	correct: boolean;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataService, public toastService: ToastsService) {
    		this.myCarte = navParams.get("resultParam");
    		this.i = navParams.get("index");
  	}


  	ngOnInit() {
    		if (this.myCarte.listeElements.length != 0)
      			this.nomBouton = this.myCarte.listeElements[this.i].bouton;
    		else this.nomBouton = 'Retour au menu';
  	}

  // 	pageSuivante() {  
  //   		//on regarde si la liste d'élements de la carte n'a pas été entièrement parcourue
  //   		if (this.i<this.myCarte.listeElements.length-1) {
  //     			this.i = this.i + 1;
		// 	this.navCtrl.push(Utils.getNextPage(this.myCarte, this.i) , {
		// 		resultParam: this.myCarte,
		// 		index: this.i,
		// 		correct: this.correct
		// 	});
		// } else {
  //     			// Regarde si c'est la première fois qu'on lit une carte et l'ajoute a READ_CARDS si oui
  //     			// Regarde si on débloque une nouvelle méthode et ajoute si oui
  //     			Utils.checkCarMet(this.dataProvider, this.toastService, this.myCarte);
  //     			this.navCtrl.setRoot(ViewHomePage);
  //     			this.navCtrl.popToRoot();
  //   		}
  // 	}

  	vraiTapped() {
    		this.correct = (<ElementVraiFaux>this.myCarte.listeElements[this.i]).valeur == true;
      		if (this.i<this.myCarte.listeElements.length-1) {
      			this.i = this.i + 1;
			this.navCtrl.push(Utils.getNextPage(this.myCarte, this.i) , {
				resultParam: this.myCarte,
				index: this.i,
				correct: this.correct
			});   
    		} else {
      			// Regarde si c'est la première fois qu'on lit une carte et l'ajoute a READ_CARDS si oui
      			// Regarde si on débloque une nouvelle méthode et ajoute si oui
      			Utils.checkCarMet(this.dataProvider, this.toastService, this.myCarte);
      			this.navCtrl.setRoot(ViewHomePage);
      			this.navCtrl.popToRoot();
    		}
  	}

  	fauxTapped() {
    		this.correct = (<ElementVraiFaux>this.myCarte.listeElements[this.i]).valeur==false;
      		if (this.i<this.myCarte.listeElements.length-1) {
      			this.i = this.i + 1;
			this.navCtrl.push(Utils.getNextPage(this.myCarte, this.i) , {
				resultParam: this.myCarte,
				index: this.i,
				correct: this.correct
			});       	
		} else {
      			// Regarde si c'est la première fois qu'on lit une carte et l'ajoute a READ_CARDS si oui
      			// Regarde si on débloque une nouvelle méthode et ajoute si oui
      			Utils.checkCarMet(this.dataProvider, this.toastService, this.myCarte);
      			this.navCtrl.setRoot(ViewHomePage);
      			this.navCtrl.popToRoot();
    		}
  	}

}
