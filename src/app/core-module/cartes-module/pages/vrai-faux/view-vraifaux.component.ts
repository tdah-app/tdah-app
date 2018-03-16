import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Carte } from './../../objects/carte';
import { ElementVraiFaux } from './../../../objects/element-vrai-faux';
import { ViewHomePage } from './../dimensions/view-homepage.component';
import { UtilsCards } from './../../utils/utils-cards';
import { DataService } from './../../../../data-service/data.service';
import { ToastsService } from './../../../toasts-service/toasts.service';
import { ElementDynamic } from '../../objects/element-dynamic';

@Component({
	selector: 'view-vraifaux',
	templateUrl: 'view-vraifaux.component.html',
})
export class ViewVraiFaux implements OnInit {

	myCarte: Carte;
	i: number;
	nomBouton: string;
	correct: boolean;
	numCard: number;
	texte: string;
	image: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataService, public toastService: ToastsService) {
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
			this.image = (<ElementVraiFaux>(<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i]).image;
		} else {
			if (this.myCarte.listeElements.length != 0) {
				this.nomBouton = this.myCarte.listeElements[this.i].bouton;
				this.texte = this.myCarte.listeElements[this.i].texte;
				this.image = (<ElementVraiFaux>(this.myCarte.listeElements[this.i])).image;
			}
			else {
				this.nomBouton = 'Retour au menu';
			}
		}

	}

	vraiTapped() {
		if (this.myCarte.isDynamic) {
			this.correct = (<ElementVraiFaux>(<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i]).valeur == true;
		} else {
			this.correct = (<ElementVraiFaux>this.myCarte.listeElements[this.i]).valeur == true;
		}
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

	fauxTapped() {
		if (this.myCarte.isDynamic) {
			this.correct = (<ElementVraiFaux>(<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i]).valeur == true;
		} else {
			this.correct = (<ElementVraiFaux>this.myCarte.listeElements[this.i]).valeur == true;
		}
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
