import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Methode } from './../../objects/methode';
import { ViewBasicMethode } from './../basic/view-basic-methode.component';
import { ViewHomePage } from './../../../cartes-module/pages/dimensions/view-homepage.component';
import { ElementSavaisTuQue } from './../../../objects/element-savais-tu-que';
import { ElementImage } from './../../../objects/element-image';
import { ElementParent } from './../../../objects/element-parent';
import { Utils } from './../../utils/utils';


@Component({
  selector: 'view-image-basic-methode',
  templateUrl: 'view-image-basic-methode.component.html',
})
export class ViewImageBasicMethode implements OnInit {

  myMethode: Methode;
  i: number;
  nomBouton: string;
  texte: string;
  title: string;
  image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.myMethode = navParams.get("resultParam");
    this.i = navParams.get("index");
    }


  ngOnInit() {
    if (this.myMethode.listeElements.length != 0)
      this.nomBouton = this.myMethode.listeElements[this.i].bouton;
    else this.nomBouton = 'Retour au menu';

    this.texte = this.myMethode.listeElements[this.i].texte;
    this.title = this.myMethode.nom;
    this.image = (<ElementImage>this.myMethode.listeElements[this.i]).image;
  }


  boutonTapped() {
      // on regarde si la liste d'élements de la carte n'a pas été entièrement parcourue
    if (this.i<this.myMethode.listeElements.length-1) {
        this.i = this.i + 1;

    this.navCtrl.push(Utils.getNextPage(this.myMethode, this.i) , {
        resultParam: this.myMethode,
        index: this.i
     });    

      // on teste le type de l'élement suivant afin de savoir quelle view ouvrir
       //  if(this.myMethode.listeElements[this.i].type == 'ElementSavaisTuQue') {
       //     this.navCtrl.push(ViewBasicMethode, {
       //     resultParam: this.myMethode,
       //     index: this.i
       //     });
       // }

       // else if(this.myMethode.listeElements[this.i].type == 'ElementImage') {
       //     this.navCtrl.push(ViewImageBasicMethode, {
       //     resultParam: this.myMethode,
       //     index: this.i
       //     });
       // }

       //   else if(this.myMethode.listeElements[this.i].type == 'Element') {
       //     this.navCtrl.push(ViewBasicMethode, {
       //     resultParam: this.myMethode,
       //     index: this.i
       //     });
       // }
    }
    // si la liste d'élements de la carte a été entièrement parcourue
    else {
      //on retourne à la page d'accueil, et on reset l'historique de navigation
      this.navCtrl.setRoot(ViewHomePage);
      this.navCtrl.popToRoot();
    }
  }

}
