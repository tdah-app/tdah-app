import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Carte } from '../../objects/carte';
import { ElementDynamic } from '../../objects/element-dynamic';
import { UtilsCards } from '../../utils/utils-cards';

@Component({
  selector: 'view-dynamic',
  templateUrl: 'view-dynamic.component.html'
})
export class ViewDynamic {

  private readonly ON_MOBILE: boolean = false;

  private textCard: string = "Restez appuyé sur une partie de l'héxagone pour découvrir une carte";
  private selectHexa: boolean[] = [false, false, false, false, false, false];
  private myCarte: Carte;
  private i = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myCarte = navParams.get("resultParam");
    this.i = navParams.get("index");
  }

  click_triangle(num: number) {
    if (this.ON_MOBILE && this.selectHexa[num]) {
      this.navCtrl.push(UtilsCards.getNextPage(this.myCarte, 0, num), {
        resultParam: this.myCarte,
        index: 0,
        numCard: num
      });
    } else {
      this.navCtrl.push(UtilsCards.getNextPage(this.myCarte, 0, num), {
        resultParam: this.myCarte,
        index: 0,
        numCard: num
      });
    }
  }

  touch_triangle(num: number) {
    for (let k = 0; k < this.selectHexa.length; k++) {
      if (k == num) {
        this.selectHexa[k] = true;
      } else {
        this.selectHexa[k] = false;
      }
    }
    this.textCard = (<ElementDynamic>(this.myCarte.listeElements[0])).listeElements[num][0].texte.split(" ", 3) +
      "... \n Cliquez sur la portion pour voir la carte en entier";
  }

}
