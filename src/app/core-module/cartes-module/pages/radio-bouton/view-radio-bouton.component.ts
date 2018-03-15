import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Carte } from './../../objects/carte';
import { ViewHomePage } from './../dimensions/view-homepage.component';
import { ElementRadioBouton } from './../../../objects/element-radio-bouton';
import { Utils } from './../../utils/utils';
import {  DataService } from './../../../../data-service/data.service';
import { ToastsService } from './../../../toasts-service/toasts.service';

@Component({
	selector: 'view-radio-bouton',
	templateUrl: 'view-radio-bouton.component.html',
})
export class ViewRadioBouton implements OnInit {

	myCarte: Carte;
	i: number;
	nomBouton: string;
	texte: string;
	title: string;
	radioBoutons: string[];
	selectedRadioBouton: string = undefined;
	correct: boolean = undefined;


	constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataService, public toastService: ToastsService, private alertCtrl: AlertController) {
		this.myCarte = navParams.get("resultParam");
		this.i = navParams.get("index");
	}

	ngOnInit() {
		if (this.myCarte.listeElements.length != 0)
			this.nomBouton = this.myCarte.listeElements[this.i].bouton;
		else this.nomBouton = 'Retour au menu';
		this.radioBoutons = (<ElementRadioBouton>this.myCarte.listeElements[this.i]).radioBoutons;
		this.texte = this.myCarte.listeElements[this.i].texte;
		this.title = this.myCarte.nom;

	}

	radioBoutonTapped(event, radioBouton) {
		this.selectedRadioBouton = radioBouton;
		this.correct = (radioBouton === (<ElementRadioBouton>this.myCarte.listeElements[this.i]).reponse);
	}

	boutonTapped() {
		//on regarde qu'un radio bouton a bien été sélectionné
		if (this.selectedRadioBouton === undefined) {
			let alert = this.alertCtrl.create({
				title: 'Aucun bouton n\'est sélectionné.',
				subTitle: 'Merci de choisir un bouton avant de passer à la suite.',
				buttons: ['Ok']
			});
			alert.present();
		}
		else {

			// on regarde si la liste d'élements de la carte n'a pas été entièrement parcourue
			if (this.i < this.myCarte.listeElements.length - 1) {
				this.i = this.i + 1;
				this.navCtrl.push(Utils.getNextPage(this.myCarte, this.i), {
					resultParam: this.myCarte,
					index: this.i,
					correct: this.correct
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

}
