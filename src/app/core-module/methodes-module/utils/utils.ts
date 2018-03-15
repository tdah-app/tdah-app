import { Methode } from './../objects/methode';
import {  ViewBasicMethode } from './../pages/basic/view-basic-methode.component';
import { ViewImageBasicMethode } from './../pages/image-basic/view-image-basic-methode.component';
import { METHODES } from './../data/methodes';
import {  DataService } from './../../../data-service/data.service';
import { ToastsService } from './../../toasts-service/toasts.service';

export class Utils {

	// Regarde si c'est la première fois qu'on lit une carte et l'ajoute a READ_CARDS si oui
	// Regarde si on débloque une nouvelle méthode et ajoute si oui
	public static checkCarMet(dataProvider: DataService, toastService: ToastsService, myMethod: Methode) {
		dataProvider.getData(dataProvider.READ_CARDS).then(readCards => {
			if (readCards) {
				if (readCards.indexOf(myMethod.id) == -1) {
					dataProvider.addData(myMethod.id, dataProvider.READ_CARDS);
					if ((readCards.length + 1) % Methode.DEBLOCK_MET == 0) {
						Utils.addReceivedMethod(toastService, dataProvider);
					}
				}
			} else {
				dataProvider.addData(myMethod.id, dataProvider.READ_CARDS);
				if (Methode.DEBLOCK_MET == 1) {
					Utils.addReceivedMethod(toastService, dataProvider);
				}
			}
		});
	}

	// Opération pour ajouter une méthode
	private static addReceivedMethod(toastService: ToastsService, dataProvider: DataService) {
		dataProvider.getData(dataProvider.RECEIVED_METHODS).then(receivedMethods => {
			if (receivedMethods) {
				let i = 0;
				while (i < METHODES.length && receivedMethods.indexOf(METHODES[i].id) != -1) {
					i++;
				}
				if (i < METHODES.length) {
					dataProvider.addData(METHODES[i].id, dataProvider.RECEIVED_METHODS);
					toastService.sendToast(toastService.MESSAGE);

				}
			}
		});
	}

	// Méthode renvoyant une référence vers le prochain composant d'une carte
	// Elle prends la carte concernée et l'index de la page dont on souhaite récupérer le composant
	public static getNextPage(methode: Methode, index: number) {
		switch (methode.listeElements[index].typeElem) {
			case 'ElementSavaisTuQue':
				return ViewBasicMethode;
			case 'ElementImage':
				return ViewImageBasicMethode;
			case 'ElementParent':
				return ViewBasicMethode;
		}
	}

}
