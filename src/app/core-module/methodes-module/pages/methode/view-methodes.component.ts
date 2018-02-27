import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewVraiFaux } from './../cartes/view-vraifaux.component';
import { ViewImageBasic } from './../cartes/view-image-basic.component';
import { ViewBasic } from './../cartes/view-basic.component';

import { ElementVraiFaux } from './../cartes/element-vrai-faux';
import { ElementSavaisTuQue } from './../cartes/element-savais-tu-que';
import { ElementImage } from './../cartes/element-image';
import { Element } from './../cartes/element';
import { Methode } from './../methodes/methode';
import { METHODES } from './../methodes/methodes';

import { DataService } from '../../dataSol/src/app/data.service';


@Component({
  selector: 'view-methodes',
  templateUrl: 'view-methodes.component.html',
})
export class ViewMethodes implements OnInit {

  Methodes: Methode[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataService) {
    
  }


  ngOnInit() {
    this.Methodes = METHODES;;
  }  

//une méthode a été cliquée/sélectionnée
  methodeTapped(event, methode) {
    
        if(methode.listeElements[0].type == 'ElementVraiFaux') {
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
       }
  }

}
