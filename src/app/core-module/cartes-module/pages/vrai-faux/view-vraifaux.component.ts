import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Carte } from './carte';
import { ViewHomePage } from './view-homepage.component';
import { ViewImageBasic } from './view-image-basic.component';
import { ViewBasic } from './view-basic.component';

import { ElementVraiFaux } from './element-vrai-faux';
import { ElementSavaisTuQue } from './element-savais-tu-que';
import { ElementImage } from './element-image';
import { Element } from './element';



@Component({
  selector: 'view-vraifaux',
  templateUrl: 'view-vraifaux.component.html',
})
export class ViewVraiFaux implements OnInit {

  myCarte: Carte;
  i: number;
  nomBouton: string;
  correct: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myCarte = navParams.get("resultParam");
    this.i = navParams.get("index");
  }


  ngOnInit() {
    if (this.myCarte.listeElements.length != 0)
      this.nomBouton = this.myCarte.listeElements[this.i].bouton;
    else this.nomBouton = 'Retour au menu';
  }
  

  pageSuivante() {  
    //on regarde si la liste d'élements de la carte n'a pas été entièrement parcourue
    if (this.i<this.myCarte.listeElements.length-1) {
      this.i = this.i + 1;

      //if(this.myCarte.listeElements[this.i] instanceof ElementVraiFaux) {
        if(this.myCarte.listeElements[this.i].type == 'ElementVraiFaux') {
           this.navCtrl.push(ViewVraiFaux, {
           resultParam: this.myCarte,
           index: this.i,
           correct: this.correct //correct correspond à la réponse de l'utilisateur, correcte ou incorrecte
           });
       }
       //else if(this.myCarte.listeElements[this.i] instanceof ElementSavaisTuQue) {
         else if(this.myCarte.listeElements[this.i].type == 'ElementSavaisTuQue') {
           this.navCtrl.push(ViewBasic, {
           resultParam: this.myCarte,
           index: this.i,
           correct: this.correct
           });
       }

       else if(this.myCarte.listeElements[this.i].type == 'ElementImage') {
           this.navCtrl.push(ViewImageBasic, {
           resultParam: this.myCarte,
           index: this.i
           });
       }

       //else if(this.myCarte.listeElements[this.i] instanceof Element) {
         else if(this.myCarte.listeElements[this.i].type == 'Element') {
           this.navCtrl.push(ViewImageBasic, {
           resultParam: this.myCarte,
           index: this.i,
           correct: this.correct
           });
       }
    }
    // si la liste d'élements de la carte a été entièrement parcourue
    else {
      this.navCtrl.setRoot(ViewHomePage);
      this.navCtrl.popToRoot();
    }//this.navCtrl.push(ViewHomePage); //on retourne à la page d'accueil
  }


  vraiTapped() {
    this.correct = (<ElementVraiFaux>this.myCarte.listeElements[this.i]).valeur == true;
    //pagesSuivante();
      if (this.i<this.myCarte.listeElements.length-1) {
      this.i = this.i + 1;

      //if(this.myCarte.listeElements[this.i] instanceof ElementVraiFaux) {
        if(this.myCarte.listeElements[this.i].type == 'ElementVraiFaux') {
           this.navCtrl.push(ViewVraiFaux, {
           resultParam: this.myCarte,
           index: this.i,
           correct: this.correct //correct correspond à la réponse de l'utilisateur, correcte ou incorrecte
           });
       }
       //else if(this.myCarte.listeElements[this.i] instanceof ElementSavaisTuQue) {
         else if(this.myCarte.listeElements[this.i].type == 'ElementSavaisTuQue') {
           this.navCtrl.push(ViewImageBasic, {
           resultParam: this.myCarte,
           index: this.i,
           correct: this.correct
           });
       }

       //else if(this.myCarte.listeElements[this.i] instanceof Element) {
         else if(this.myCarte.listeElements[this.i].type == 'Element') {
           this.navCtrl.push(ViewImageBasic, {
           resultParam: this.myCarte,
           index: this.i,
           correct: this.correct
           });
       }
    }
    // si la liste d'élements de la carte a été entièrement parcourue
    else {
      this.navCtrl.setRoot(ViewHomePage);
      this.navCtrl.popToRoot();
    }//this.navCtrl.push(ViewHomePage);
  }

  fauxTapped() {
    this.correct = (<ElementVraiFaux>this.myCarte.listeElements[this.i]).valeur==false;
    //pageSuivante();
      if (this.i<this.myCarte.listeElements.length-1) {
      this.i = this.i + 1;

      //if(this.myCarte.listeElements[this.i] instanceof ElementVraiFaux) {
        if(this.myCarte.listeElements[this.i].type == 'ElementVraiFaux') {
           this.navCtrl.push(ViewVraiFaux, {
           resultParam: this.myCarte,
           index: this.i,
           correct: this.correct //correct correspond à la réponse de l'utilisateur, correcte ou incorrecte
           });
       }
       //else if(this.myCarte.listeElements[this.i] instanceof ElementSavaisTuQue) {
         else if(this.myCarte.listeElements[this.i].type == 'ElementSavaisTuQue') {
           this.navCtrl.push(ViewImageBasic, {
           resultParam: this.myCarte,
           index: this.i,
           correct: this.correct
           });
       }

       //else if(this.myCarte.listeElements[this.i] instanceof Element) {
         else if(this.myCarte.listeElements[this.i].type == 'Element') {
           this.navCtrl.push(ViewImageBasic, {
           resultParam: this.myCarte,
           index: this.i,
           correct: this.correct
           });
       }
    }
    // si la liste d'élements de la carte a été entièrement parcourue
    else {
      this.navCtrl.setRoot(ViewHomePage);
      this.navCtrl.popToRoot();
    }
  }

}
