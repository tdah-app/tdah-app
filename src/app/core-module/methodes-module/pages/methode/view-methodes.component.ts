import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Methode } from './../../objects/methode';
import { METHODES } from './../../data/methodes';
import { DataService } from '../../../../data-service/data.service';
import { ToastsService } from '../../../toasts-service/toasts.service';


@Component({
  selector: 'view-methodes',
  templateUrl: 'view-methodes.component.html',
})
export class ViewMethodes implements OnInit {

	methodes: Methode[];

  	constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataService, private toastsService: ToastsService) {}
  
    	ngOnInit() {
		// On initialise les méthodes
		this.methodes = METHODES;      
	    	this.dataProvider.getData(this.dataProvider.RECEIVED_METHODS).then( receivedMet => {
			if(receivedMet) {
				receivedMet.forEach((idMet) => {
					let i = 0;
				    	while(this.methodes[i].id != idMet) {
						i++;
				    	}
				    	this.methodes[i].iconEtat = '';
			    	});
			}
	    	}).catch(console.log.bind(console));
  	}
    
	//une méthode a été cliquée/sélectionnée
  	methodeTapped(event, methode) {
		if(methode.iconEtat === 'lock') {
			this.toastsService.sendToast('Méthode non débloquée.');
	  	} else {
			// On passe sur la page de la méthode étant donnée qu'elle est débloquée
	  	}
  	}

}
