import { Observer } from './observer';

// Cette interface permet de spécifier un objet observable. 
// Cette objet référence les objets qui l'observent et les notfie
// lorsque qu'il change d'état
export interface Observable {

	// Méthode pour ajouter un objet qui observe
	registerObserver(o : Observer);

	// Méthode pout retirer un objet qui observe
	removeObserver(o : Observer);

	// Méthode pour notifier un changement d'état aux objets observateurs
	notifyObservers(idCard: number);

}
