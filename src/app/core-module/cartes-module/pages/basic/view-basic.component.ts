import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Carte } from './../../objects/carte';
import { ElementParent } from './../../../objects/element-parent';
import { ElementVraiFaux } from './../../../objects/element-vrai-faux';
import { ElementSavaisTuQue } from './../../../objects/element-savais-tu-que';
import { ElementImage } from './../../../objects/element-image';
import { ViewHomePage } from './../dimensions/view-homepage.component';
import { ViewVraiFaux } from './../vrai-faux/view-vraifaux.component';
import { ViewImageBasic } from './../image-basic/view-image-basic.component';


@Component({
  selector: 'view-basic',
  templateUrl: 'view-basic.component.html',
})
export class ViewBasic implements OnInit {

  myCarte: Carte;
  i: number;
  correct: undefined;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myCarte = navParams.get("resultParam");
    this.i = navParams.get("index");
    this.correct = navParams.get("correct");
  }


  ngOnInit() {
    if (this.correct == undefined)
      this.title = this.myCarte.nom;
    else if (this.correct)
      this.title = 'Correct !';
    else this.title = 'Incorrect !';
  }


  boutonTapped() {
    //on regarde si la liste d'élements de la carte n'a pas été entièrement parcourue
    if (this.i<this.myCarte.listeElements.length-1) {
      this.i = this.i + 1;

        if(this.myCarte.listeElements[this.i].typeElem == 'ElementVraiFaux') {
           this.navCtrl.push(ViewVraiFaux, {
           resultParam: this.myCarte,
           index: this.i
           });
       }
         else if(this.myCarte.listeElements[this.i].typeElem == 'ElementSavaisTuQue') {
           this.navCtrl.push(ViewBasic, {
           resultParam: this.myCarte,
           index: this.i
           });
       }

       else if(this.myCarte.listeElements[0].typeElem == 'ElementImage') {
           this.navCtrl.push(ViewImageBasic, {
           resultParam: this.myCarte,
           index: 0
           });
       }

         else if(this.myCarte.listeElements[this.i].typeElem == 'ElementParent') {
           this.navCtrl.push(ViewBasic, {
           resultParam: this.myCarte,
           index: this.i
           });
       }
    }
    // si la liste d'élements de la carte a été entièrement parcourue
    else {
      //on retourne à la page d'accueil et on reset l'historique de navigation
      this.navCtrl.setRoot(ViewHomePage);
      this.navCtrl.popToRoot();
    }
  }

}
