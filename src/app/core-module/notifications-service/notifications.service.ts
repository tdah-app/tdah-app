import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { Observable } from './observable';
import { Observer } from './observer';

@Injectable()
export class NotificationsService implements Observable {

	// Fréquence d'envoit des notifications
	public readonly NOTIFICATIONS_RATE: number = 0.05; 
	
	// Titre standard
	public readonly NOTIFICATIONS_TITLE: string = 'TDAPP';

	// Message standard
	public readonly NOTIFICATIONS_MESSAGE: string = 'Vous avez reçus une nouvelle carte';

	// Liste des objets qui observe cette classe
	private observers: Observer[] = [];
	
	// Référence statique vers l'instance de l'instanciation
	// de cette classe. Cette instance est unique, en effet c'est un
	// servce injecté par Angular qui assure l'unicité de l'instance
	private static instance: NotificationsService = null;

	constructor(private localNotifications: LocalNotifications) {
		NotificationsService.instance = this;
	}

	// Vérifie si l'application est autorisé à envoyer des notifications
	checkPermission() {
		return this.localNotifications.hasPermission();
	}
	
	// Retourne une promesse, lorsque celle ci est résolue retourne un tableau
	// avec les identifiants des notifications programmés
	isNotified() {
		return this.localNotifications.getScheduledIds();
	}

	// Ajoute un écouteur sur l'événement consistant à cliquer sur une notification reçus
	// Lorsque cette évenement se déclenche les objets qui observent sont notifés
	listenNotifications() {
		this.localNotifications.on("click", function(notification, state) {
			NotificationsService.instance.notifyObservers(notification.id);
		});
	}

	// Lance une notification, le paramèter inHours permet d'indiquer dans combien
	// de temps dois ce lancer la notification
	sendNotification(idCard: number, title: string, text: string, inHours: number) {
		this.localNotifications.schedule({
			id: idCard,
			title: title,
			text: text,
			at: new Date(new Date().getTime() + (inHours*3600*1000))
		});
	}

	// Ajoute un objet observateur
	registerObserver(o: Observer) {
		this.observers.push(o);
	}

	// Retire un objet observateur
	removeObserver(o: Observer) {
		let index = this.observers.indexOf(o);
		this.observers.splice(index, 1);
	}

	// Méthode de notification des objets observateurs
	notifyObservers(idCard: number) {
		for(let observer of this.observers) {
			observer.update(idCard);
		}
	}

}
