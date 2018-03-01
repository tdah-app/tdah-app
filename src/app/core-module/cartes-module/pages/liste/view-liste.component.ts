import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Carte } from './../../objects/carte';
import { ViewVraiFaux } from './../vrai-faux/view-vraifaux.component';
import { ViewImageBasic } from './../image-basic/view-image-basic.component';
import { ViewBasic } from './../basic/view-basic.component';
import { DataService } from '../../../../data-service/data.service';


@Component({
  selector: 'view-liste',
  templateUrl: 'view-liste.component.html',
})
export class ViewListe implements OnInit {


  	cartes: Carte[];
  	cartesDim: Carte[];
 	dimension: string;

  	constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataService) {
    		//on récupère les paramètres transmis par la view précédente : ViewHomePage
    		this.dimension = navParams.get("dimension");
    		this.cartes = navParams.get("cartes");
		this.cartesDim = new Array(0);
  	}


  	ngOnInit() {
    		for (let i in this.cartes) {
        		if (this.cartes[i].dim == this.dimension) {
            			this.cartesDim.push(this.cartes[i]);
        		}
    		}
		// On regarde les cartes déjà lues
		this.dataProvider.getData(this.dataProvider.READ_CARDS).then( readCards => {
			if(readCards) {
				readCards.forEach((idCard) => {
					let i = 0;
					while(this.cartes[i].id != idCard) {
						i++;
					}
					this.cartes[i].iconEtat = 'eye';
					this.cartes[i].iconEtatColor = 'secondary';
				});
			}
		});
  	}  

	//une carte a été cliquée/sélectionnée
  	carteTapped(event, carte) {
	  	if(carte.listeElements[0].typeElem == 'ElementVraiFaux') {
          		this.navCtrl.push(ViewVraiFaux, {
           			resultParam: carte,
           			index: 0
           		});
       	  	}
          	else if(carte.listeElements[0].typeElem == 'ElementSavaisTuQue') {
          		this.navCtrl.push(ViewBasic, {
           			resultParam: carte,
           			index: 0
           		});
          	}
          	else if(carte.listeElements[0].typeElem == 'ElementImage') {
           		this.navCtrl.push(ViewImageBasic, {
           			resultParam: carte,
           			index: 0
           		});
       	  	}
       	  	else {    
          		this.navCtrl.push(ViewBasic, {
           			resultParam: carte,
           			index: 0
           		});
       	  	}
  	}

}
