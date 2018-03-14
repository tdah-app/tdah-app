import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { Carte } from './../../objects/carte';
import { ElementSavaisTuQue } from './../../../objects/element-savais-tu-que';
import { ElementImage } from './../../../objects/element-image';
import { ViewHomePage } from './../dimensions/view-homepage.component';
import { Utils } from './../../utils/utils';
import { DataService } from './../../../../data-service/data.service';
import { ToastsService } from './../../../toasts-service/toasts.service';

@Component({
  selector: 'view-image-basic',
  templateUrl: 'view-image-basic.component.html',
})
export class ViewImageBasic implements OnInit {

	myCarte: Carte;
  	i: number;
  	nomBouton: string;
  	texte: string;
  	correct: boolean = undefined;
  	title: string;
  	image: string;

  	constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public dataProvider: DataService, public toastService: ToastsService) {
    		this.myCarte = navParams.get("resultParam");
    		this.i = navParams.get("index");
    		this.correct = navParams.get("correct"); //si la view précédente était un vrai faux, correct représentera la valeur de la réponse de l'utilisateur : correcte ou incorrecte. Sinon, correct sera undefined.
  	}

  	ngOnInit() {
    		if (this.myCarte.listeElements.length != 0)
      			this.nomBouton = this.myCarte.listeElements[this.i].bouton;
    		else this.nomBouton = 'Retour au menu';

    		// si l'élement de la carte est de type "savais tu que...?", il faut construire un texte d'un certain format. 
    		if (this.myCarte.listeElements[this.i].typeElem == 'ElementSavaisTuQue')
      			this.texte = (<ElementSavaisTuQue>this.myCarte.listeElements[this.i]).sujet 
                    		+ ' ' 
                    		+ (<ElementSavaisTuQue>this.myCarte.listeElements[this.i]).positif 
                    		+ '.\nMAIS ' 
                    		+ (<ElementSavaisTuQue>this.myCarte.listeElements[this.i]).negatif 
                    		+ '.\nConseil : ' 
                    		+ (<ElementSavaisTuQue>this.myCarte.listeElements[this.i]).conseil;
    		//si le type de l'élement est différent, le texte à afficher est alors l'attribut texte normal.
    		else this.texte = this.myCarte.listeElements[this.i].texte;

        this.image = (<ElementImage>this.myCarte.listeElements[this.i]).image;
        //si le type de l'élement précédent était 'ElementVraiFaux', alors on récupère la valeur de la réponse de l'utilisateur afin d'afficher la réponse en conséquence.
    		if (this.correct == undefined) {
      			this.title = this.myCarte.nom;
    		} else if (this.correct) {
      			this.viewCtrl.showBackButton(false);
      			this.title = 'Correct !';
      			if (this.myCarte.listeElements[this.i-1].typeElem === 'ElementVraiFaux') this.image = "assets/imgs/correct.jpg";
    		} else { 
      			this.viewCtrl.showBackButton(false);
      			this.title = 'Incorrect !';
      			if (this.myCarte.listeElements[this.i-1].typeElem === 'ElementVraiFaux') this.image = "assets/imgs/incorrect.jpg";
    		}
  	}

  	boutonTapped() {
      		// on regarde si la liste d'élements de la carte n'a pas été entièrement parcourue
    		if (this.i<this.myCarte.listeElements.length-1) {
        		this.i = this.i + 1;
			this.navCtrl.push(Utils.getNextPage(this.myCarte, this.i) , {
				resultParam: this.myCarte,
				index: this.i
			});     
		} else {
	    		// Regarde si c'est la première fois qu'on lit une carte et l'ajoute a READ_CARDS si oui
	    		// Regarde si on débloque une nouvelle méthode et ajoute si oui
	    		Utils.checkCarMet(this.dataProvider, this.toastService, this.myCarte);
	    		//on retourne à la page d'accueil et on reset l'historique de navigation
            		this.navCtrl.setRoot(ViewHomePage);
            		this.navCtrl.popToRoot();
    		}
  	}

}
