import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Carte } from './../../objects/carte';
import { ViewHomePage } from './../dimensions/view-homepage.component';
import { UtilsCards } from './../../utils/utils-cards';
import { DataService } from './../../../../data-service/data.service';
import { ToastsService } from './../../../toasts-service/toasts.service';
import { ElementDynamic } from '../../objects/element-dynamic';
import { ElementSavaisTuQue } from '../../../objects/element-savais-tu-que'

@Component({
	selector: 'view-basic',
	templateUrl: 'view-basic.component.html',
})
export class ViewBasic implements OnInit {

	myCarte: Carte;
	i: number;
	correct: undefined;
	title: string;
	valeur_mais: string = undefined;
	valeur_conseil: string = undefined;
	sujet: string = undefined;
	positif: string = undefined;
	negatif: string = undefined;
	conseil: string = undefined;
	texte: string;
	bouton: string;
	numCard: number;

	constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataService, public toastService: ToastsService) {
		this.myCarte = navParams.get("resultParam");
		this.i = navParams.get("index");
		this.correct = navParams.get("correct");
		if (this.myCarte.isDynamic) {
			this.numCard = navParams.get("numCard");
		}
	}

	ngOnInit() {
		if (this.correct == undefined)
			this.title = this.myCarte.nom;
		else if (this.correct)
			this.title = 'Correct !';
		else this.title = 'Incorrect !';
		if (this.myCarte.isDynamic) {
			if ((<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i].typeElem === 'ElementSavaisTuQue') {
				this.valeur_mais = '\nMAIS : \n';
				this.valeur_conseil = '\n\nConseil :\n';
				this.sujet = (<ElementSavaisTuQue>((<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i])).sujet;
				this.positif = (<ElementSavaisTuQue>((<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i])).positif;
				this.negatif = (<ElementSavaisTuQue>((<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i])).negatif;
				this.conseil = (<ElementSavaisTuQue>((<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i])).conseil;
			} else {
				this.texte = (<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i].texte;
			}
			this.bouton = (<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i].bouton;
		} else {
			if (this.myCarte.listeElements[this.i].typeElem === 'ElementSavaisTuQue') {
				this.valeur_mais = '\nMAIS : \n';
				this.valeur_conseil = '\n\nConseil :\n';
				this.sujet = (<ElementSavaisTuQue>(this.myCarte.listeElements[this.i])).sujet;
				this.positif = (<ElementSavaisTuQue>(this.myCarte.listeElements[this.i])).positif;
				this.negatif = (<ElementSavaisTuQue>(this.myCarte.listeElements[this.i])).negatif;
				this.conseil = (<ElementSavaisTuQue>(this.myCarte.listeElements[this.i])).conseil;
			} else {
	 			this.texte = this.myCarte.listeElements[this.i].texte;
			}
			this.bouton = this.myCarte.listeElements[this.i].bouton;
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
