import { Carte } from './../objects/carte';
import { Methode } from './../../methodes-module/objects/methode';
import { METHODES } from './../../methodes-module/data/methodes';
import { DataService } from './../../../data-service/data.service';
import { ToastsService } from './../../toasts-service/toasts.service';

export class Utils {

	// Regarde si c'est la première fois qu'on lit une carte et l'ajoute a READ_CARDS si oui
	// Regarde si on débloque une nouvelle méthode et ajoute si oui
	public static checkCarMet(dataProvider : DataService,toastService : ToastsService, myCarte: Carte) {
		dataProvider.getData(dataProvider.READ_CARDS).then ( readCards => {
			if(readCards) {
				if(readCards.indexOf(myCarte.id) == -1) {
					dataProvider.addData(myCarte.id, dataProvider.READ_CARDS);	
					if((readCards.length + 1) % Methode.DEBLOCK_MET == 0) {
						Utils.addReceivedMethod(toastService, dataProvider);
					}
				}
			} else {
				dataProvider.addData(myCarte.id, dataProvider.READ_CARDS);
				if(Methode.DEBLOCK_MET == 1) {
						Utils.addReceivedMethod(toastService, dataProvider);
				}
			}
      	    	});
	}
	
	// Opération pour ajouter une méthode
	private static addReceivedMethod(toastService: ToastsService, dataProvider: DataService) {
		dataProvider.getData(dataProvider.RECEIVED_METHODS).then( receivedMethods => {
			if(receivedMethods) {
				let i = 0;
				while(i < METHODES.length && receivedMethods.indexOf(METHODES[i].id) != -1) {
					i++;
				}
				if(i < METHODES.length) {
					dataProvider.addData(METHODES[i].id, dataProvider.RECEIVED_METHODS);
					toastService.sendToast(toastService.MESSAGE);
						
				}
			}
		});
	}

}
