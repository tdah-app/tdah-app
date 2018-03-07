import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { HeaderColor } from '@ionic-native/header-color';

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
		HeaderColor,
    		{provide: ErrorHandler, useClass: IonicErrorHandler}
  	]
})
export class AppModule {}
