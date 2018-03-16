import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { Carte } from './../../objects/carte';
import { ElementSavaisTuQue } from './../../../objects/element-savais-tu-que';
import { ElementImage } from './../../../objects/element-image';
import { ViewHomePage } from './../dimensions/view-homepage.component';
import { UtilsCards } from './../../utils/utils-cards';
import { DataService } from './../../../../data-service/data.service';
import { ToastsService } from './../../../toasts-service/toasts.service';
import { ElementDynamic } from '../../objects/element-dynamic';

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
	numCard: number;

	constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public dataProvider: DataService, public toastService: ToastsService) {
		this.myCarte = navParams.get("resultParam");
		this.i = navParams.get("index");
		this.correct = navParams.get("correct"); //si la view précédente était un vrai faux, correct représentera la valeur de la réponse de l'utilisateur : correcte ou incorrecte. Sinon, correct sera undefined.
		if (this.myCarte.isDynamic) {
			this.numCard = navParams.get("numCard");
		}
	}

	ngOnInit() {
		if (this.myCarte.isDynamic) {
			this.nomBouton = (<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i].bouton;
			if ((<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i].typeElem === 'ElementSavaisTuQue') {
				this.texte = (<ElementSavaisTuQue>((<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i])).sujet
					+ ''
					+ (<ElementSavaisTuQue>((<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i])).positif
					+ '.\nMAIS '
					+ (<ElementSavaisTuQue>((<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i])).negatif
					+ '\nConseil : '
					+ (<ElementSavaisTuQue>((<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i])).conseil
			} else {
				this.texte = (<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i].texte;
			}
			this.nomBouton = (<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i].bouton;
			this.image = (<ElementImage>((<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i])).image;
			if (this.correct == undefined) {
				this.title = this.myCarte.nom;
			} else if (this.correct) {
				this.viewCtrl.showBackButton(false);
				this.title = 'Correct !';
				if ((<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i - 1].typeElem === 'ElementVraiFaux') this.image = "assets/imgs/correct.jpg";
			} else {
				this.viewCtrl.showBackButton(false);
				this.title = 'Incorrect !';
				if ((<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i - 1].typeElem === 'ElementVraiFaux') this.image = "assets/imgs/incorrect.jpg";
			}
		} else {
			if (this.myCarte.listeElements.length != 0)
				this.nomBouton = this.myCarte.listeElements[this.i].bouton;
			else this.nomBouton = 'Retour au menu'

			// si l'élement de la carte est de type "savais tu que...?", il faut construire un texte d'un certain format. 
			if (this.myCarte.listeElements[this.i].typeElem == 'ElementSavaisTuQue') {
				this.texte = (<ElementSavaisTuQue>this.myCarte.listeElements[this.i]).sujet
					+ ' '
					+ (<ElementSavaisTuQue>this.myCarte.listeElements[this.i]).positif
					+ '.\nMAIS '
					+ (<ElementSavaisTuQue>this.myCarte.listeElements[this.i]).negatif
					+ '.\nConseil : '
					+ (<ElementSavaisTuQue>this.myCarte.listeElements[this.i]).conseil;
			}
			//si le type de l'élement est différent, le texte à afficher est alors l'attribut texte normal.
			else this.texte = this.myCarte.listeElements[this.i].texte;

			this.image = (<ElementImage>this.myCarte.listeElements[this.i]).image;
			//si le type de l'élement précédent était 'ElementVraiFaux', alors on récupère la valeur de la réponse de l'utilisateur afin d'afficher la réponse en conséquence.
			if (this.correct == undefined) {
				this.title = this.myCarte.nom;
			} else if (this.correct) {
				this.viewCtrl.showBackButton(false);
				this.title = 'Correct !';
				if (this.myCarte.listeElements[this.i - 1].typeElem === 'ElementVraiFaux') this.image = "assets/imgs/correct.jpg";
			} else {
				this.viewCtrl.showBackButton(false);
				this.title = 'Incorrect !';
				if (this.myCarte.listeElements[this.i - 1].typeElem === 'ElementVraiFaux') this.image = "assets/imgs/incorrect.jpg";
			}
		}
	}

	boutonTapped() {
		if (this.myCarte.isDynamic) {
			if (this.i < (<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard].length - 1) {
				this.i++;
				this.navCtrl.push(UtilsCards.getNextPage(this.myCarte, this.i, this.numCard), {
					resultParam: this.myCarte,
					index: this.i,
					numCard: this.numCard
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
					index: this.i
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
