import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from '../../../../data-service/data.service';
import { Observer } from '../../../notifications-service/observer';
import { Observable } from '../../../notifications-service/observable';
import { NotificationsService } from '../../../notifications-service/notifications.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements Observer{

	private observable: Observable;
	private receivedCards: number[] = new Array(0);
	private i: number = 1;

	constructor(public navCtrl: NavController, private dataProvider: DataService, private notificationService: NotificationsService) {
		this.observable = notificationService;
		notificationService.registerObserver(this);
  	}	

	onClick() {
		this.dataProvider.addData(this.i, this.dataProvider.RECEIVED_CARDS);
		this.i++;
	}

	onClick2() {
		this.dataProvider.getData(this.dataProvider.RECEIVED_CARDS).then( receivedCards => {
			this.receivedCards = receivedCards;
		});
	}

	onClick3() {
		this.notificationService.isNotified().then ( val => {
			if(val.length == 0) {
				this.notificationService.sendNotification(159, 
					this.notificationService.NOTIFICATIONS_TITLE,
					this.notificationService.NOTIFICATIONS_MESSAGE,
					this.notificationService.NOTIFICATIONS_RATE);
			}
		});
	}

	update(evtType: string, idCard: number) {
		alert('Notific --> ' + idCard);
	}

}
