import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastsService {

	public readonly MESSAGE: string = 'Vous avez reçu une nouvelle méthode';

	constructor(private toastCtrl: ToastController) {}

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

	dismissHandler() {
		// Ajouter du code ici pour traitement 
		// lors du clique pour dismiss le toast
		alert('CECI EST UN PUTAIN DE TEST');
	}

}
