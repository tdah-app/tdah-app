import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Methode } from './../../objects/methode';
import { METHODES } from './../../data/methodes';
import { ElementParent } from './../../../objects/element-parent';
import { ElementVraiFaux } from './../../../objects/element-vrai-faux';
import { ElementSavaisTuQue } from './../../../objects/element-savais-tu-que';
import { ElementImage } from './../../../objects/element-image';
//import { ViewVraiFaux } from './../cartes/view-vraifaux.component';
//import { ViewImageBasic } from './../cartes/view-image-basic.component';
//import { ViewBasic } from './../cartes/view-basic.component';
import { DataService } from '../../../../data-service/data.service';


@Component({
  selector: 'view-methodes',
  templateUrl: 'view-methodes.component.html',
})
export class ViewMethodes implements OnInit {

  Methodes: Methode[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataService) {
    
  }


  ngOnInit() {
    this.Methodes = METHODES;
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
