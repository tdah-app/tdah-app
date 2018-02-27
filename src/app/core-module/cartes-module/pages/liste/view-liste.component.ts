import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Carte } from './carte';
import { ViewVraiFaux } from './view-vraifaux.component';
import { ViewImageBasic } from './view-image-basic.component';
import { ViewBasic } from './view-basic.component';

import { ElementVraiFaux } from './element-vrai-faux';
import { ElementSavaisTuQue } from './element-savais-tu-que';
import { ElementImage } from './element-image';
import { Element } from './element';
import { CARTES } from './cartes';

import { DataService } from '../../dataSol/src/app/data.service';


@Component({
  selector: 'view-liste',
  templateUrl: 'view-liste.component.html',
})
export class ViewListe implements OnInit {

  Cartes: Carte[];
  CartesDim: Carte[];
  dimension: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataService) {
    //on récupère les paramètres transmis par la view précédente : ViewHomePage
    this.dimension = navParams.get("Dimension");
    this.Cartes = navParams.get("Cartes");
    this.CartesDim = new Array(0);
  }


  ngOnInit() {
    for (let i in this.Cartes) {
        if (this.Cartes[i].dim == this.dimension) {
            this.CartesDim.push(this.Cartes[i]);
        }
    }
  }  

//une carte a été cliquée/sélectionnée
  carteTapped(event, carte) {
    
      //if(carte.listeElements[0] instanceof ElementVraiFaux) {
        if(carte.listeElements[0].type == 'ElementVraiFaux') {
           this.navCtrl.push(ViewVraiFaux, {
           resultParam: carte,
           index: 0
           });
       }
       //else if(carte.listeElements[0] instanceof ElementSavaisTuQue) {
         else if(carte.listeElements[0].type == 'ElementSavaisTuQue') {
           this.navCtrl.push(ViewBasic, {
           resultParam: carte,
           index: 0
           });
       }

       else if(carte.listeElements[0].type == 'ElementImage') {
           this.navCtrl.push(ViewImageBasic, {
           resultParam: carte,
           index: 0
           });
       }

       else  {     //if(carte.listeElements[0] instanceof Element) { 
           this.navCtrl.push(ViewBasic, {
           resultParam: carte,
           index: 0
           });
       }
  }

}
