import { ElementParent } from './element-parent';

export class Carte {

  	public nom: string;
  	public listeElements: ElementParent[];
  	public id: number;
  	public dim: string;

  	constructor(nom: string, id: number, dim: string, listeElements: ElementParent[]) {
    		this.nom = nom;
    		this.id = id;
    		this.dim = dim;
    		this.listeElements = listeElements;
  	}

}
