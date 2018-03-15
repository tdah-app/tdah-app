import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { Observable } from './observable';
import { Observer } from './observer';

@Injectable()
export class NotificationsService implements Observable {

	// Fréquence d'envoit des notifications
	public readonly NOTIFICATIONS_RATE: number = 0.01;

	// Titre standard
	public readonly NOTIFICATIONS_TITLE: string = 'TDAPP';

	// Message standard
	public readonly NOTIFICATIONS_MESSAGE: string = 'Vous avez reçus une nouvelle carte';

	// Liste des objets qui observe cette classe
	private observers: Observer[] = [];

	// Référence statique vers l'instance de cette classe. 
	// Cette instance est unique, en effet c'est un
	// servce injecté par Angular qui assure l'unicité de l'instance
	private static instance: NotificationsService = null;

	constructor(private localNotifications: LocalNotifications) {
		NotificationsService.instance = this;
	}

	// Vérifie si l'application est autorisée à envoyer des notifications
	checkPermission() {
		return this.localNotifications.hasPermission();
	}

	// Retourne une promesse, lorsque celle ci est résolue retourne un tableau
	// avec les identifiants des notifications programmées
	isNotified() {
		return this.localNotifications.getScheduledIds();
	}

	// Retourne une promesse, lorsque celle ci est résolue retourne un tableau
	// avec les identifiants des notifications déclenchées
	isTriggered() {
		return this.localNotifications.getTriggeredIds();
	}

	// Ajoute un écouteur sur l'événement consistant à cliquer sur une notification reçue
	// Lorsque cette évenement se déclenche les objets qui observent sont notifés
	listenNotifications() {
		this.localNotifications.un("click", this.callbackClick);
		this.localNotifications.on("click", this.callbackClick);
		this.localNotifications.un("click", this.callbackTrigger);
		this.localNotifications.on("click", this.callbackTrigger);
	}

	// Callback appelée lors du déclenchement d'une notification
	private callbackTrigger = function (notification) {
		NotificationsService.instance.notifyObservers('trigger', notification.id);
	};

	// Callback appelée lors du click sur la notification
	private callbackClick = function (notification) {
		NotificationsService.instance.notifyObservers('click', notification.id);
	}

	// Annule toutes les notifications
	cancelNotif() {
		return this.localNotifications.cancelAll();
	}

	// Lance une notification, le paramètre inHours permet d'indiquer dans combien
	// de temps dois se lancer la notification
	sendNotification(idCard: number, title: string, text: string, inHours: number) {
		this.localNotifications.schedule({
			id: idCard,
			title: title,
			text: text,
			at: new Date(new Date().getTime() + (inHours * 3600 * 1000))
		});
	}

	// Ajoute un objet observateur
	registerObserver(o: Observer) {
		// On écoute un composant par conséquent il faut vérifier que plusieurs références vers les composants
		// ne seront pas ajoutées. En effet, à chaque fois que l'on revient sur la page correspondant au composant 
		// qui écoute, Angular va reinstancié le composant avec une nouvelle référence. Hors le service de 
		// notification est lui un singleton et la liste des objets observés reste fixe et conserve des anciennes
		// références vers les anciennes instanciations du composant. Le garbage collector ne peut alors pas détruire
		// ces composants et on va activer la méthode update à plusieurs reprise. On doit donc veiller à ce qu'une 
		// seule instance d'un composant puisse obervée. Dans notre cas on a un seul composant observateur ainsi pour
		// simplifier on regade simplement si il n'y a pas déjà d'observateur. Si on avait plusieurs composants différents
		// qui voulaient observés, il faudrait vérifier qu'on a un seul observateur par composant.
		if (this.observers.length == 0) {
			this.observers.push(o);
		}
	}

	// Retire un objet observateur
	removeObserver(o: Observer) {
		let index = this.observers.indexOf(o);
		this.observers.splice(index, 1);
	}

	// Méthode de notification des objets observateurs
	notifyObservers(evtType: string, idCard: number) {
		for (let observer of this.observers) {
			observer.update(evtType, idCard);
		}
	}

}
