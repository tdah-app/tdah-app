import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Observable } from '../src/app/core-module/notifications-service/observable';
import { Observer } from '../src/app/core-module/notifications-service/observer';
import { NotificationsService } from '../src/app/core-module/notifications-service/notifications.service';

export class PlatformMock {
  public ready(): Promise<string> {
    return new Promise((resolve) => {
      resolve('READY');
    });
  }

  public getQueryParam() {
    return true;
  }

  public registerBackButtonAction(fn: Function, priority?: number): Function {
    return (() => true);
  }

  public hasFocus(ele: HTMLElement): boolean {
    return true;
  }

  public doc(): HTMLDocument {
    return document;
  }

  public is(): boolean {
    return true;
  }

  public getElementComputedStyle(container: any): any {
    return {
      paddingLeft: '10',
      paddingTop: '10',
      paddingRight: '10',
      paddingBottom: '10',
    };
  }

  public onResize(callback: any) {
    return callback;
  }

  public registerListener(ele: any, eventName: string, callback: any): Function {
    return (() => true);
  }

  public win(): Window {
    return window;
  }

  public raf(callback: any): number {
    return 1;
  }

  public timeout(callback: any, timer: number): any {
    return setTimeout(callback, timer);
  }

  public cancelTimeout(id: any) {
    // do nothing
  }

  public getActiveElement(): any {
    return document['activeElement'];
  }
}

export class StatusBarMock extends StatusBar {
  styleDefault() {
    return;
  }
}

export class SplashScreenMock extends SplashScreen {
  hide() {
    return;
  }
}

export class NavMock {
 
  public pop(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
 
  public push(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
 
  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }
 
  public setRoot(): any {
    return true;
  }

  public registerChildNav(nav: any): void {
    return ;
  }

}

export class DeepLinkerMock {

}

export class NotifMock implements Observable{

	public readonly NOTIFICATIONS_RATE: number = 0.05; 
	public readonly NOTIFICATIONS_TITLE: string = 'TDAPP';
	public readonly NOTIFICATIONS_MESSAGE: string = 'Vous avez reçus une nouvelle carte';

	private observers: Observer[] = [];	

	private static instance: NotifMock = null;

	constructor() {
		NotifMock.instance = this;
	}

	checkPermission() {
		return true;
	}

	isNotified() {
		return new Promise(function(resolve) {
			let tab: number[] = [0];
			resolve(tab);
		});
	}

	listenNotifications() {
		alert('Ecoute des notifs');	
	}

	sendNotification(idCard: number, title: string, text: string, inHours: number) {
		alert('Notif : ' + idCard);
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

export class DataMock {

	public readonly RECEIVED_CARDS = 'receivedCards';
	public readonly READ_CARDS = 'readCards';
	public readonly RECEIVED_METHODS = 'receivedMethods';
	public readonly READ_METHODS = 'readMethods';

	private keys: string[] = [this.RECEIVED_CARDS, this.READ_CARDS, this.RECEIVED_METHODS, this.READ_METHODS];

	private receivedCards: number[] = [];
	private readCards: number[] = [];
	private receivedMethods: number[] = [];
	private readMethods: number[] = [];

	getData(key: string) {
		if(this.keys.indexOf(key) != -1 ) {
			return new Promise(function(resolve) {
				let res: number[];
				switch(key) {
					case 'receivedCards':
						res = this.receivedCards;
					case 'readCards':
						res = this.readCards;
					case 'receivedMethods':
						res = this.receivedMethods;
					case 'readMethods':
						res = this.readMethods;
				}
				resolve(res);
			});
		}
	}

	addData(idCard: number, key: string) {
		if(this.keys.indexOf(key) != -1) {			
			switch(key) {
				case 'receivedCards':
					if(this.receivedCards.indexOf(idCard) ==-1) {
						return new Promise(function(resolve) {
							this.receivedCards.push(idCard);
							resolve(true);
						});
					} else {
						return new Promise(function(resolve) { resolve(false); });
					}
				case 'readCards':
					if(this.readCards.indexOf(idCard) ==-1) {
						return new Promise(function(resolve) {
							this.readCards.push(idCard);
							resolve(true);
						});
					} else {
						return new Promise(function(resolve) { resolve(false); });
					}
				case 'receivedMethods':
					if(this.receivedMethods.indexOf(idCard) ==-1) {
						return new Promise(function(resolve) {
							this.receivedMethods.push(idCard);
							resolve(true);
						});
					} else {
						return new Promise(function(resolve) { resolve(false); });
					}
				case 'readMethods':
					if(this.readMethods.indexOf(idCard) ==-1) {
						return new Promise(function(resolve) {
							this.readMethods.push(idCard);
							resolve(true);
						});
					} else {
						return new Promise(function(resolve) { resolve(false); });
					}
			}
		}
	}

}
