import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { CoreModule } from './core-module/core.module';
import { DataService } from './data-service/data.service';

@NgModule({
	declarations: [
    		MyApp
  	],
  	imports: [
    		CoreModule,
    		BrowserModule,
    		IonicModule.forRoot(MyApp),
    		IonicStorageModule.forRoot()
  	],
  	bootstrap: [IonicApp],
  	entryComponents: [
    		MyApp
  	],
  	providers: [
    		DataService,
    		StatusBar,
    		SplashScreen,
    		{provide: ErrorHandler, useClass: IonicErrorHandler}
  	]
})
export class AppModule {

	// Id de la 1er carte et de la première méthode reçues lors de la première utilisation
	// de l'application
	private firstCard: number = 0;
	private firstMet: number = 0;
	
	// On initialise les données si aucune carte n'est présente 
  	// alors c'est la 1er utilisation de l'application
  	// On ajoute donc une première carte
	constructor(private dataService: DataService) {
		this.dataService.getData(this.dataService.RECEIVED_CARDS).then( receivedCards => {
			if(!receivedCards) {
				this.dataService.addData(this.firstCard, this.dataService.RECEIVED_CARDS);
			}
		});
		this.dataService.getData(this.dataService.RECEIVED_METHODS).then( receivedMet => {
			if(!receivedMet) {
				this.dataService.addData(this.firstMet, this.dataService.RECEIVED_METHODS);
			}
		});
	}

}
