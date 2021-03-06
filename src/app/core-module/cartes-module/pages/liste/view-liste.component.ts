import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Carte } from './../../objects/carte';
import { UtilsCards } from './../../utils/utils-cards';
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
		// On ajoute les cartes correspondant à la dimension courante
		for (let i in this.cartes) {
			if (this.cartes[i].dim == this.dimension) {
				this.cartesDim.push(this.cartes[i]);
			}
		}
		// On regarde les cartes déjà lues
		this.dataProvider.getData(this.dataProvider.READ_CARDS).then(readCards => {
			if (readCards) {
				readCards.forEach((idCard) => {
					let i = 0;
					while (this.cartes[i].id != idCard) {
						i++;
					}
					this.cartes[i].iconEtat = 'eye';
					this.cartes[i].iconEtatColor = 'secondary';
				});
			}
		}).catch(console.log.bind(console));
	}

	//une carte a été cliquée/sélectionnée
	carteTapped(event, carte) {
		this.navCtrl.push(UtilsCards.getNextPage(carte, 0, -1), {
			resultParam: carte,
			index: 0
		});
	}

}
