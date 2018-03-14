import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Methode } from './../../objects/methode';
import { ViewImageBasicMethode } from './../image-basic/view-image-basic-methode.component';
import { ViewHomePage } from './../../../cartes-module/pages/dimensions/view-homepage.component';
import { ElementSavaisTuQue } from './../../../objects/element-savais-tu-que';
import { ElementImage } from './../../../objects/element-image';
import { ElementParent } from './../../../objects/element-parent';
import { Utils } from './../../utils/utils';


@Component({
  selector: 'view-basic-methode',
  templateUrl: 'view-basic-methode.component.html',
})
export class ViewBasicMethode implements OnInit {

  myMethode: Methode;
  i: number;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myMethode = navParams.get("resultParam");
    this.i = navParams.get("index");
  }


  ngOnInit() {
     this.title = this.myMethode.nom;
  }


  boutonTapped() {
    //on regarde si la liste d'élements de la carte n'a pas été entièrement parcourue
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
      //on retourne à la page d'accueil et on reset l'historique de navigation
      this.navCtrl.setRoot(ViewHomePage);
      this.navCtrl.popToRoot();
    }
  }

}
