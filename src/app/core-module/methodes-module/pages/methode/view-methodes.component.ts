import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Methode } from './../../objects/methode';
import { METHODES } from './../../data/methodes';
//import { ViewVraiFaux } from './../cartes/view-vraifaux.component';
//import { ViewImageBasic } from './../cartes/view-image-basic.component';
//import { ViewBasic } from './../cartes/view-basic.component';
import { DataService } from '../../../../data-service/data.service';


@Component({
  selector: 'view-methodes',
  templateUrl: 'view-methodes.component.html',
})
export class ViewMethodes implements OnInit {

  methodes: Methode[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataService) {
    
  }


  
    ngOnInit() {
          	/*this.dataProvider.getData(this.dataProvider.RECEIVED_METHODS).then( receivedMet => {
          		if(receivedMet) {
             			//on parcourt la liste de cartes du fichier cartes.ts (constante : liste de cartes)
             			for (let i in METHODES) {
                 			//si l'indice de la carte regardée est contenu dans receivedCards : c'est-à-dire si la carte a déjà été reçue...
                 			if (receivedMet.indexOf(METHODES[i].id) != -1) {
                     				//... alors on l'ajout à la liste des cartes déverrouillées, qui seront affichées dans le slider
                     				this.methodes.push(METHODES[i]);
                 			}
             			}
       			} 
     	  	});*/
    	  	this.methodes = METHODES;      
  	}
    

//une méthode a été cliquée/sélectionnée
  methodeTapped(event, methode) {
    
        /*if(methode.listeElements[0].type == 'ElementVraiFaux') {
           this.navCtrl.push(ViewVraiFaux, {
           resultParam: methode,
           index: 0
           });
       }
         else if(methode.listeElements[0].type == 'ElementSavaisTuQue') {
           this.navCtrl.push(ViewBasic, {
           resultParam: methode,
           index: 0
           });
       }

       else if(methode.listeElements[0].type == 'ElementImage') {
           this.navCtrl.push(ViewImageBasic, {
           resultParam: methode,
           index: 0
           });
       }

       else  {
           this.navCtrl.push(ViewBasic, {
           resultParam: methode,
           index: 0
           });
       }*/
  }

}
