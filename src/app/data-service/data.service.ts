import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataService {

	// Constante qui correspondent aux différents tableaux de nombres
	// de la BD. Il est recommandé d'utiliser ces variables accessible 
	// en dehors de la classe comme argument "key" lors de l'appel des
	// méthodes getData et addData de manière à éviter de se tromper 
	// dans l'écriture de la chaine de caractère et d'ajouter des données
	// avec une mauvaise clé
	public readonly RECEIVED_CARDS = 'receivedCards';
	public readonly READ_CARDS = 'readCards';
	public readonly RECEIVED_METHODS = 'receivedMethods';
	public readonly READ_METHODS = 'readMethods';

	private keys: string[] = [this.RECEIVED_CARDS, this.READ_CARDS, this.RECEIVED_METHODS, this.READ_METHODS];

	constructor(private storage: Storage) { }

	// Méthode permettant de récupérer les données du tableau identifié
	// par la chaîne de caractères passée en paramètre
	getData(key: string) {
		if (this.keys.indexOf(key) != -1) {
			return this.storage.get(key);
		}
	}

	// Méthode permettant d'ajouter un nombre au tableau identifié
	// par la chaîne de caractères passée en paramètre
	addData(idCard: number, key: string) {
		if (this.keys.indexOf(key) != -1) {
			return this.getData(key).then(result => {
				if (result) {
					if (result.indexOf(idCard) == -1) {
						result.push(idCard);
						return this.storage.set(key, result);
					}
				} else {
					return this.storage.set(key, [idCard]);
				}
			}).catch(console.log.bind(console));
		}
	}

}

