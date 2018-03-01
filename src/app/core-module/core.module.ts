import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { CartesModule } from './cartes-module/cartes.module';
import { MethodesModule } from './methodes-module/methodes.module';
import { NotificationsService } from './notifications-service/notifications.service';
import { ToastsService } from './toasts-service/toasts.service';

@NgModule({
  imports: [
	  CommonModule,
	  CartesModule,
	  MethodesModule
  ],
  providers: [
	  LocalNotifications,
	  NotificationsService,
	  ToastsService
  ]
})
export class CoreModule {

	constructor(private notificationsService: NotificationsService, private alertCtrl: AlertController) {
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

	// On regarde si une notification est déjà pris en charge par le
	// système et est en attente. Si aucune notifications n'est en
	// attente alors on programme un notification dans un temps
	// disponible dans la variable NOTIFICATIONS_RATE
	private checkScheduled() {
		this.notificationsService.isNotified().then ( val => {
			if(val.length == 0) {
				this.notificationsService.sendNotification(this.getNextCard(),
					this.notificationsService.NOTIFICATIONS_TITLE, 
					this.notificationsService.NOTIFICATIONS_MESSAGE, 
					this.notificationsService.NOTIFICATIONS_RATE);		
			} 
		});
	}

	// On récupère la prochaine carte non débloquée
	private getNextCard(): number {
		return 1;
	}

	// Affichage d'un alerte
	private showAlert() {
		let alert = this.alertCtrl.create({
    			title: 'TDAH-APP',
      			subTitle: 'Veuillez autorisez l\'envoie de notifications',
      			buttons: ['OK']
    		});
    		alert.present();
	}

}
