import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';


// import { DataService } from './../../data-service/data.service';
// import { ToastsService } from './../toasts-service/toasts.service';

@Component({
  selector: 'add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage implements OnInit {
	
  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;

event = { title: "", location: "", message: "", startDate: "", endDate: "" };

  	// constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataService, public toastService: ToastsService, date: any;
   //              daysInThisMonth: any,
   //              daysInLastMonth: any,
   //              daysInNextMonth: any,
   //              monthNames: string[],
   //              currentMonth: any,
   //              currentYear: any,
   //              currentDate: any) {
  	// }

    constructor(public alertCtrl: AlertController,
                public navCtrl: NavController,
                public navParams: NavParams,
                private calendar: Calendar) {
}

	ngOnInit() {
    		
  	}

save() {
  this.calendar.createEvent(this.event.title, this.event.location, this.event.message, new Date(this.event.startDate), new Date(this.event.endDate)).then(
    (msg) => {
      let alert = this.alertCtrl.create({
        title: 'Success!',
        subTitle: 'Event saved successfully',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.pop();
    },
    (err) => {
      let alert = this.alertCtrl.create({
        title: 'Failed!',
        subTitle: err,
        buttons: ['OK']
      });
      alert.present();
    }
  );
}


}
