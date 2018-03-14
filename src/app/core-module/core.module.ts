import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { CARTES } from './cartes-module/data/cartes';
import { CartesModule } from './cartes-module/cartes.module';
import { MethodesModule } from './methodes-module/methodes.module';
import { NotificationsService } from './notifications-service/notifications.service';
import { ToastsService } from './toasts-service/toasts.service';
import { DataService } from './../data-service/data.service';
import { Calendar } from '@ionic-native/calendar';

import { CalendrierModule } from './calendrier-module/calendrier.module';

@NgModule({
	imports: [
		CommonModule,
	  	CartesModule,
	  	MethodesModule,
	  	CalendrierModule

  	],
 	providers: [
	  	LocalNotifications,
	  	NotificationsService,
	  	ToastsService,
	  	Calendar
  	]
})
export class CoreModule {

	constructor(private notificationsService: NotificationsService, private alertCtrl: AlertController, private dataService: DataService) {
		//this.checkPermission();
		//this.listenNotifications();
		//this.checkScheduled();
	}
	
	// On vérifie les autorisations et on affiche un message indiquant 
	// qu'il faut autoriser l'application a envoyé des messages
	private checkPermission() {
		this.notificationsService.checkPermission().then( result => {
			if(!result) {
				this.showAlert();
			}
		});
	}

	// On écoute les notifications pour notifier les observateurs 
	// lorsqu'un click est appuyé sur la notification
	private listenNotifications() {
		this.notificationsService.listenNotifications();
	}

	// On regarde si une notification est déjà prise en charge par le
	// système et est en attente (prévue ou déclenchée). Si aucune notifications n'est en
	// attente alors on programme une notification dans un temps
	// disponible dans la variable NOTIFICATIONS_RATE
	private checkScheduled() {
		this.notificationsService.isNotified().then( valNotif => {
			if(valNotif && valNotif.length == 0) {
				return this.notificationsService.isTriggered(); 
			} 
		}).then( valTrigg => {
			if(valTrigg && valTrigg.length == 0) {
				return this.dataService.getData(this.dataService.RECEIVED_CARDS);
			}			
		}).then( receivedCards => {
			if(receivedCards) {
				let i = 0;
				while(i < CARTES.length && receivedCards.indexOf(CARTES[i].id) != -1) {
					i++;
				}
				if(i < CARTES.length) {
					this.notificationsService.sendNotification(CARTES[i].id,
							this.notificationsService.NOTIFICATIONS_TITLE, 
							this.notificationsService.NOTIFICATIONS_MESSAGE, 
							this.notificationsService.NOTIFICATIONS_RATE);			
				}
			}
		}).catch(console.log.bind(console));
	}

	// Affichage d'un alerte
	private showAlert() {
		let alert = this.alertCtrl.create({
    			title: 'TDAH-APP',
      			subTitle: 'Veuillez autoriser l\'envoie de notifications',
      			buttons: ['OK']
    		});
    		alert.present();
	}

}
