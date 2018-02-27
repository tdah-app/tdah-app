import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Carte } from '../../objects/carte';
import { CARTES } from '../../data/cartes';
import { Methode } from '../../../methodes-module/objects/methode';
import { METHODES } from '../../../methodes-module/data/methodes';
import { ElementParent } from '../../../objects/element-parent';
import { ElementVraiFaux } from '../../../objects/element-vrai-faux';
import { ElementSavaisTuQue } from '../../../objects/element-savais-tu-que';
import { ElementImage } from '../../../objects/element-image';
//import { ViewVraiFaux } from 'view-vraifaux.component';
//import { ViewImageBasic } from './view-image-basic.component';
//import { ViewBasic } from './view-basic.component';
//import { ViewListe } from './view-liste.component';
import { DataService } from '../../../../data-service/data.service';


@Component({
  selector: 'view-homepage',
  templateUrl: 'view-homepage.component.html',
})
export class ViewHomePage implements OnInit {

  	cartes: Carte[];
	dimensions: any[];
  	methodes: Methode[];
	test: string = 'test';

  	constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataService) {
		this.cartes = new Array(0);
    		this.methodes = new Array(0);
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
                     				this.Cartes.push(CARTES[i]);
                 			}
             			}
       			} else { //si aucune carte n'a déjà été reçue
         			this.dataProvider.addData(0, this.dataProvider.RECEIVED_CARDS);
         			//on ajoute la première carte de la liste de cartes du fichier cartes.ts
         			this.Cartes[0] = CARTES[0];
       			}    
     	  	});
    	  	this.Cartes = CARTES;      
		this.dataProvider.getData(this.dataProvider.RECEIVED_METHODS).then( receivedMethods => {
          		if(receivedMethods) {
            		//on parcourt la liste de cartes du fichier cartes.ts (constante : liste de cartes)
            		for (let i in METHODES) {
                		//si l'indice de la carte regardée est contenu dans receivedMethods : c'est-à-dire si la carte a déjà été reçue...
                		if (receivedMethods.indexOf(METHODES[i].id) != -1) {
                    			//... alors on l'ajout à la liste des cartes déverrouillées, qui seront affichées dans le slider
                    			this.Methodes.push(METHODES[i]);
                		}
            		}
      			} else { //si aucune carte n'a déjà été reçue
        			this.dataProvider.addData(0, this.dataProvider.RECEIVED_METHODS);
        			//on ajoute la première carte de la liste de cartes du fichier cartes.ts
        			this.Methodes[0] = METHODES[0];
      			}
    		});*/
  	}

	//une dimension a été sélectionnée
 	dimensionTapped(event, dimension: string) {
      		/*this.navCtrl.push(ViewListe, {
        		Dimension: dimension,
        		Cartes: this.Cartes
      		});*/
  	}

}
