import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Carte } from './../../objects/carte';
import { ElementVideo } from './../../../objects/element-video';
import { ViewHomePage } from './../dimensions/view-homepage.component';
import { UtilsCards } from './../../utils/utils-cards';
import { DataService } from './../../../../data-service/data.service';
import { ToastsService } from './../../../toasts-service/toasts.service';

import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ElementDynamic } from '../../objects/element-dynamic';

@Component({
	selector: 'view-video',
	templateUrl: 'view-video.component.html',
})
export class ViewVideo implements OnInit {

	myCarte: Carte;
	i: number;
	nomBouton: string;
	texte: string;
	title: string;
	video: SafeResourceUrl;
	url: string;
	numCard: number;

	constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataService, public toastService: ToastsService, private sanitizer: DomSanitizer) {
		this.myCarte = navParams.get("resultParam");
		this.i = navParams.get("index");
		if (this.myCarte.isDynamic) {
			this.numCard = navParams.get('numCard');
		}
	}

	ngOnInit() {
		if (this.myCarte.isDynamic) {
			this.nomBouton = (<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i].bouton;
			this.title = this.myCarte.nom;
			this.texte = (<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i].texte;
			this.url = (<ElementVideo>(<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard][this.i]).video;
		} else {
			if (this.myCarte.listeElements.length != 0)
				this.nomBouton = this.myCarte.listeElements[this.i].bouton;
			else {
				this.nomBouton = 'Retour au menu'; 
			}
			this.url = (<ElementVideo>this.myCarte.listeElements[this.i]).video;
			this.title = this.myCarte.nom;
			this.texte = this.myCarte.listeElements[this.i].texte;
		}
		this.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
	}

	boutonTapped() {
		if (this.myCarte.isDynamic) {
				if (this.i < (<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[this.numCard].length - 1) {
					this.i++;
					this.navCtrl.push(UtilsCards.getNextPage(this.myCarte, this.i, this.numCard), {
						resultParam: this.myCarte,
						index: this.i,
						numCard: this.numCard,
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
