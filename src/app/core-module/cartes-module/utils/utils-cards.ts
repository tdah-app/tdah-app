import { Carte } from './../objects/carte';
import { ViewBasic } from './../pages/basic/view-basic.component';
import { ViewVraiFaux } from './../pages/vrai-faux/view-vraifaux.component';
import { ViewVideo } from './../pages/video/view-video.component';
import { ViewRadioBouton } from './../pages/radio-bouton/view-radio-bouton.component';
import { ViewImageBasic } from './../pages/image-basic/view-image-basic.component';
import { Methode } from './../../methodes-module/objects/methode';
import { METHODES } from './../../methodes-module/data/methodes';
import { DataService } from './../../../data-service/data.service';
import { ToastsService } from './../../toasts-service/toasts.service';
import { ViewDynamic } from '../pages/dynamic/view-dynamic.component';
import { ElementDynamic } from '../objects/element-dynamic';

export class UtilsCards {

	// Regarde si c'est la première fois qu'on lit une carte et l'ajoute a READ_CARDS si oui
	// Regarde si on débloque une nouvelle méthode et ajoute si oui
	public static checkCarMet(dataProvider: DataService, toastService: ToastsService, myCarte: Carte) {
		dataProvider.getData(dataProvider.READ_CARDS).then(readCards => {
			if (readCards) {
				if (readCards.indexOf(myCarte.id) == -1) {
					dataProvider.addData(myCarte.id, dataProvider.READ_CARDS);
					if ((readCards.length + 1) % Methode.DEBLOCK_MET == 0) {
						UtilsCards.addReceivedMethod(toastService, dataProvider);
					}
				}
			} else {
				dataProvider.addData(myCarte.id, dataProvider.READ_CARDS);
				if (Methode.DEBLOCK_MET == 1) {
					UtilsCards.addReceivedMethod(toastService, dataProvider);
				}
			}
		}).catch(console.log.bind(console));
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
		}).catch(console.log.bind(console));
	}

	// Méthode renvoyant une référence vers le prochain composant d'une carte
	// Elle prend la carte concernée et l'index de la page dont on souhaite récupérer le composant
	public static getNextPage(carte: Carte, index: number, numCard?: number) {
		if (carte.isDynamic) {
			if (numCard == -1) {
				return ViewDynamic;
			} else {
				switch ((<ElementDynamic>(carte.listeElements[0])).listeElements[numCard][index].typeElem) {
					case 'ElementVraiFaux':
						return ViewVraiFaux;
					case 'ElementSavaisTuQue':
						return ViewBasic;
					case 'ElementImage':
						return ViewImageBasic;
					case 'ElementVideo':
						return ViewVideo;
					case 'ElementRadioBouton':
						return ViewRadioBouton;
					case 'ElementParent':
						if (index > 0 && (<ElementDynamic>(carte.listeElements[0])).listeElements[numCard][index - 1].typeElem === 'ElementVraiFaux') {
							return ViewImageBasic;
						} else {
							return ViewBasic;
						}
				}
			}
		} else {
			switch (carte.listeElements[index].typeElem) {
				case 'ElementVraiFaux':
					return ViewVraiFaux;
				case 'ElementSavaisTuQue':
					return ViewBasic;
				case 'ElementImage':
					return ViewImageBasic;
				case 'ElementVideo':
					return ViewVideo;
				case 'ElementRadioBouton':
					return ViewRadioBouton;
				case 'ElementParent':
					if (index > 0 && carte.listeElements[index - 1].typeElem === 'ElementVraiFaux') {
						return ViewImageBasic;
					} else {
						return ViewBasic;
					}
			}
		}
	}

}
