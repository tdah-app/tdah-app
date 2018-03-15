import { ElementParent } from '../../objects/element-parent';

export class Carte {

	public nom: string;
	public icon: string;
	public iconEtat: string;
	public iconEtatColor: string;
	public listeElements: ElementParent[];
	public id: number;
	public dim: string;
	public messageNotif: string;

	constructor(nom: string, icon: string, iconEtat: string, iconEtatColor: string, id: number, dim: string, messageNotif: string, listeElements: ElementParent[]) {
		this.nom = nom;
		this.icon = icon;
		this.iconEtat = iconEtat;
		this.iconEtatColor = iconEtatColor;
		this.id = id;
		this.dim = dim;
		this.listeElements = listeElements;
		this.messageNotif = messageNotif;
	}

}
