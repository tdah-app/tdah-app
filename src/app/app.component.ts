import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ViewHomePage } from './core-module/cartes-module/pages/dimensions/view-homepage.component';
import { ViewMethodes } from './core-module/methodes-module/pages/methode/view-methodes.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  	@ViewChild(Nav) nav: Nav;

  	rootPage: any = ViewHomePage;

	pages: Array<{title: string, component: any, icon: string}>;

  	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    		this.initializeApp();

    		// used for an example of ngFor and navigation
    		this.pages = [
      			{ title: 'Boîte aux cartes', component: ViewHomePage, icon: 'photos' },
      			{ title: 'Méthodes', component: ViewMethodes, icon: 'trophy' }
    		];
  	}

  	initializeApp() {
    		this.platform.ready().then(() => {
      		// Okay, so the platform is ready and our plugins are available.
      		// Here you can do any higher level native things you might need.
      			this.statusBar.styleDefault();
      			this.splashScreen.hide();
    		});
	}

  	openPage(page) {
    		// Reset the content nav to have just this page
    		// we wouldn't want the back button to show in this scenario
    		this.nav.setRoot(page.component);
  	}

}
