import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { Carte } from './../../objects/carte';
import { ElementSavaisTuQue } from './../../../objects/element-savais-tu-que';
import { ElementImage } from './../../../objects/element-image';
import { ElementVideo } from './../../../objects/element-video';
import { ViewHomePage } from './../dimensions/view-homepage.component';
import { Utils } from './../../utils/utils';
import { DataService } from './../../../../data-service/data.service';
import { ToastsService } from './../../../toasts-service/toasts.service';

import { ViewBasic } from './../basic/view-basic.component';
import { ViewVraiFaux } from './../vrai-faux/view-vraifaux.component';
import { ViewImageBasic } from './../image-basic/view-image-basic.component';

import { SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

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


  	constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public dataProvider: DataService, public toastService: ToastsService, private sanitizer: DomSanitizer) {
    		this.myCarte = navParams.get("resultParam");
    		this.i = navParams.get("index");
    	  this.url = (<ElementVideo>this.myCarte.listeElements[this.i]).video;	
        this.title = this.myCarte.nom;
        this.texte = this.myCarte.listeElements[this.i].texte;
      }

  	ngOnInit() {
    		if (this.myCarte.listeElements.length != 0)
      			this.nomBouton = this.myCarte.listeElements[this.i].bouton;
    		else this.nomBouton = 'Retour au menu';

        this.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
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
