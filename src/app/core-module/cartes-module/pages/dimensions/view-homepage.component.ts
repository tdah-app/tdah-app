import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Carte } from '../../objects/carte';
import { CARTES } from '../../data/cartes';
import { ViewListe } from './../liste/view-liste.component';
import { UtilsCards } from './../../utils/utils-cards';
import { DataService } from '../../../../data-service/data.service';
import { Observer } from '../../../notifications-service/observer';
import { NotificationsService } from './../../../notifications-service/notifications.service';

@Component({
	selector: 'view-homepage',
	templateUrl: 'view-homepage.component.html',
})
export class ViewHomePage implements OnInit, Observer {

	private cartes: Carte[];
	private dimensions: any[];

	constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataService, private notificationsService: NotificationsService) {

		notificationsService.registerObserver(this);

		this.cartes = new Array(0);
		this.dimensions = [
			{
				"name": "Attention",
				"path": "attention"
			},
			{
				"name": "Planning",
				"path": "planning"
			},
			{
				"name": "Impulsivité",
				"path": "impulsivite"
			},
			{
				"name": "Mémoire",
				"path": "memoire"
			},
			{
				"name": "Régulation des émotions",
				"path": "regulation-des-emotions"
			}
		];

	}

	// On charge les cartes à l'initialisation du composant
	ngOnInit() {
		if (this.notificationsService.ENABLE_NOTIFICATIONS) {
			this.dataProvider.getData(this.dataProvider.RECEIVED_CARDS).then(receivedCards => {
				if (receivedCards) {
					//on parcourt la liste de cartes du fichier cartes.ts (constante : liste de cartes)
					for (let i in CARTES) {
						//si l'indice de la carte regardée est contenu dans receivedCards : c'est-à-dire si la carte a déjà été reçue...
						if (receivedCards.indexOf(CARTES[i].id) != -1) {
							//... alors on l'ajout à la liste des cartes déverrouillées, qui seront affichées dans le slider
							this.cartes.push(CARTES[i]);
						}
					}
				}
			}).catch(console.log.bind(console));
		} else {
			this.cartes = CARTES;
		}
	}

	//une dimension a été sélectionnée
	dimensionTapped(event, dimensionName: string) {
		this.navCtrl.push(ViewListe, {
			dimension: dimensionName,
			cartes: this.cartes
		});
	}

	// On avance vers la 1er page de la carte si c'est un événement de type click
	// on ajoute la carte notifié si c'est un trigger et on programme une novelle notification
	update(evtType: string, idCard: number) {
		if (evtType === 'click') {
			let i = 0;
			while (CARTES[i].id != idCard) {
				i++;
			}
			this.navCtrl.push(UtilsCards.getNextPage(CARTES[i], 0), {
				resultParam: CARTES[i],
				index: 0,
			});
		} else if (evtType === 'trigger') {
			this.dataProvider.addData(idCard, this.dataProvider.RECEIVED_CARDS);
			this.notificationsService.isNotified().then(val => {
				if (val && val.length == 0) {
					return this.dataProvider.getData(this.dataProvider.RECEIVED_CARDS);
				}
			}).then(receivedCards => {
				if (receivedCards) {
					let i = 0;
					while (i < CARTES.length && receivedCards.indexOf(CARTES[i].id) != -1) {
						i++;
					}
					if (i < CARTES.length) {
						i++;
						if (i < CARTES.length) {
							return Promise.all([i, this.notificationsService.cancelNotif()]);
						}
					}
				}
			}).then(results => {
				if (results) {
					this.notificationsService.sendNotification(CARTES[results[0]].id,
						this.notificationsService.NOTIFICATIONS_TITLE,
						CARTES[results[0]].messageNotif,
						this.notificationsService.NOTIFICATIONS_RATE);

				}
			}).catch(console.log.bind(console));
		}
	}

}
