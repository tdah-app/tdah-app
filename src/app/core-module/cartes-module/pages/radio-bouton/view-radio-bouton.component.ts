import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Carte } from './../../objects/carte';
import { ViewHomePage } from './../dimensions/view-homepage.component';
import { ElementRadioBouton } from './../../../objects/element-radio-bouton';
import { UtilsCards } from './../../utils/utils-cards';
import { DataService } from './../../../../data-service/data.service';
import { ToastsService } from './../../../toasts-service/toasts.service';
import { ElementDynamic } from '../../objects/element-dynamic';

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
	numCard: number;

	constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataService, public toastService: ToastsService, private alertCtrl: AlertController) {
		this.myCarte = navParams.get("resultParam");
		this.i = navParams.get("index");
		if (this.myCarte.isDynamic) {
			this.numCard = navParams.get('numCard');
		}
	}

	ngOnInit() {
		if (this.myCarte.isDynamic) {
			this.nomBouton = (<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i].bouton;
			this.texte = (<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i].texte;
			this.radioBoutons = (<ElementRadioBouton>((<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i])).radioBoutons;
			this.title = this.myCarte.nom;
		} else {
			if (this.myCarte.listeElements.length != 0)
				this.nomBouton = this.myCarte.listeElements[this.i].bouton;
			else this.nomBouton = 'Retour au menu';
			this.radioBoutons = (<ElementRadioBouton>this.myCarte.listeElements[this.i]).radioBoutons;
			this.texte = this.myCarte.listeElements[this.i].texte;
			this.title = this.myCarte.nom;
		}
	}

	radioBoutonTapped(event, radioBouton) {
		this.selectedRadioBouton = radioBouton;
		if (this.myCarte.isDynamic) {
			this.correct = (radioBouton === (<ElementRadioBouton>((<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i])).reponse);
		} else {
			this.correct = (radioBouton === (<ElementRadioBouton>this.myCarte.listeElements[this.i]).reponse);
		}
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
			if (this.myCarte.isDynamic) {
				if (this.i < (<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard].length - 1) {
					this.i++;
					this.navCtrl.push(UtilsCards.getNextPage(this.myCarte, this.i, this.numCard), {
						resultParam: this.myCarte,
						index: this.i,
						numCard: this.numCard,
						correct: this.correct
					});
				} else {
					UtilsCards.checkCarMet(this.dataProvider, this.toastService, this.myCarte);
					//on retourne à la page d'accueil et on reset l'historique de navigation
					this.navCtrl.setRoot(ViewHomePage);
					this.navCtrl.popToRoot();
				}
			} else {
				//on regarde si la liste d'élements de la carte n'a pas été entièrement parcourue
				if (this.i < this.myCarte.listeElements.length - 1) {
					this.i = this.i + 1;
					this.navCtrl.push(UtilsCards.getNextPage(this.myCarte, this.i), {
						resultParam: this.myCarte,
						index: this.i,
						correct: this.correct
					});
				} else {
					UtilsCards.checkCarMet(this.dataProvider, this.toastService, this.myCarte);
					//on retourne à la page d'accueil et on reset l'historique de navigation
					this.navCtrl.setRoot(ViewHomePage);
					this.navCtrl.popToRoot();
				}
			}
		}
	}

}
