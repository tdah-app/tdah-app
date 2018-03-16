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
	public isDynamic: boolean;

	constructor(nom: string, icon: string, iconEtat: string, iconEtatColor: string, messageNotif: string, id: number, dim: string, isDynamic: boolean, listeElements: ElementParent[]) {
		this.nom = nom;
		this.icon = icon;
		this.iconEtat = iconEtat;
		this.iconEtatColor = iconEtatColor;
		this.messageNotif = messageNotif;
		this.id = id;
		this.dim = dim;
		this.isDynamic = isDynamic;
		this.listeElements = listeElements;
	}

}
