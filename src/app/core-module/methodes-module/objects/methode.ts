import { ElementParent } from '../../objects/element-parent';


export class Methode {

	public static readonly DEBLOCK_MET: number = 1;

  	public nom: string;
	public icon: string;
	public iconEtat: string;
  	public listeElements: ElementParent[];
  	public id: number;

  	constructor(nom: string, icon: string, iconEtat: string, id: number, listeElements: ElementParent[]) {
    		this.nom = nom;
		this.icon = icon;
		this.iconEtat = iconEtat;
    		this.listeElements = listeElements;
    		this.id = id;
  	}

}
