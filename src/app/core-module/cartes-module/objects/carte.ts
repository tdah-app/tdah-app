import { ElementParent } from '../../objects/element-parent';

export class Carte {

  	public nom: string;
	public icon: string;
  	public listeElements: ElementParent[];
  	public id: number;
  	public dim: string;

  	constructor(nom: string, icon: string, id: number, dim: string, listeElements: ElementParent[]) {
    		this.nom = nom;
		this.icon = icon;
    		this.id = id;
    		this.dim = dim;
    		this.listeElements = listeElements;
  	}

}
