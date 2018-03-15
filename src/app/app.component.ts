import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';

import { ViewHomePage } from './core-module/cartes-module/pages/dimensions/view-homepage.component';
import { ViewMethodes } from './core-module/methodes-module/pages/methode/view-methodes.component';
import { DataService } from './data-service/data.service';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {

	@ViewChild(Nav) nav: Nav;

	rootPage: any = ViewHomePage;

	// Id de la 1er carte et de la première méthode reçues lors de la première utilisation
	// de l'application
	private firstCard: number = 0;
	private firstMet: number = 0;

	pages: Array<{ title: string, component: any, icon: string }>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public headerColor: HeaderColor, public dataService: DataService) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Boîte aux cartes', component: ViewHomePage, icon: 'photos' },
			{  title: 'Méthodes', component: ViewMethodes, icon: 'trophy' },
		];
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.backgroundColorByHexString('#59B077');
			this.headerColor.tint('#70dd95');
			// On initialise les données
			this.dataService.getData(this.dataService.RECEIVED_CARDS).then(receivedCards => {
				if (!receivedCards) {
					this.dataService.addData(this.firstCard, this.dataService.RECEIVED_CARDS);
				}
			}).catch(console.log.bind(console));
			this.dataService.getData(this.dataService.RECEIVED_METHODS).then(receivedMet => {
				if (!receivedMet) {
					this.dataService.addData(this.firstMet, this.dataService.RECEIVED_METHODS);
				}
			}).catch(console.log.bind(console));
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}

}
