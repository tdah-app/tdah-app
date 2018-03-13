import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastsService {

	// Message par défaut pour annoncer le déblocage d'une méthode
	public readonly MESSAGE: string = 'Vous avez reçu une nouvelle méthode';

	constructor(private toastCtrl: ToastController) {}

	// Permet d'envoyer des toast avec un message
	sendToast(messageToast: string) {
		const toast = this.toastCtrl.create({
      			message: messageToast,
      			position: 'bottom',
      			showCloseButton: true,
			closeButtonText: 'Ok'
		});
		toast.onDidDismiss(this.dismissHandler);
		toast.present()	
	}

	// Méthode pour réaliser un traitement lors du click sur le toast
	dismissHandler() {
		// Ajouter du code ici pour traitement 
		// lors du clique pour dismiss le toast
	}

}
