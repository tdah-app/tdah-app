import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Carte } from '../../objects/carte';
import { CARTES } from '../../data/cartes';
import { ElementParent } from '../../../objects/element-parent';
import { ElementVraiFaux } from '../../../objects/element-vrai-faux';
import { ElementSavaisTuQue } from '../../../objects/element-savais-tu-que';
import { ElementImage } from '../../../objects/element-image';
import { ViewVraiFaux } from './../vrai-faux/view-vraifaux.component';
import { ViewImageBasic } from './../image-basic/view-image-basic.component';
import { ViewBasic } from './../basic/view-basic.component';
import { ViewListe } from './../liste/view-liste.component';
import { DataService } from '../../../../data-service/data.service';
import { Observer } from '../../../notifications-service/observer';
import { Observable } from '../../../notifications-service/observable';
import { NotificationsService } from '../../../notifications-service/notifications.service';

@Component({
  selector: 'view-homepage',
  templateUrl: 'view-homepage.component.html',
})
export class ViewHomePage implements OnInit, Observer {

	private cartes: Carte[];
	private dimensions: any[];

  	constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataService) {
		this.cartes = new Array(0);
		this.dimensions = [
			{
				"name": "Attention",
				"path": "attention"
			},
			{
				"name": "Planning",
				"path": "planning"
			},
			{
				"name": "Impulsivité",
				"path": "impulsivite"
			},
			{
				"name": "Mémoire",
				"path": "memoire"
			},
			{
				"name": "Régulation des émotions",
				"path": "regulation-des-emotions"
			}
		]
  	}


  	ngOnInit() {
          	/*this.dataProvider.getData(this.dataProvider.RECEIVED_CARDS).then( receivedCards => {
          		if(receivedCards) {
             			//on parcourt la liste de cartes du fichier cartes.ts (constante : liste de cartes)
             			for (let i in CARTES) {
                 			//si l'indice de la carte regardée est contenu dans receivedCards : c'est-à-dire si la carte a déjà été reçue...
                 			if (receivedCards.indexOf(CARTES[i].id) != -1) {
                     				//... alors on l'ajout à la liste des cartes déverrouillées, qui seront affichées dans le slider
                     				this.cartes.push(CARTES[i]);
                 			}
             			}
       			} 
     	  	});*/
    	  	this.cartes = CARTES;      
  	}

	//une dimension a été sélectionnée
 	dimensionTapped(event, dimensionName: string) {
      		this.navCtrl.push(ViewListe, {
        		dimension: dimensionName,
        		cartes: this.cartes
      		});
  	}

	update(idCard: number) {
		alert('Notific --> ' + idCard);
	}

}
