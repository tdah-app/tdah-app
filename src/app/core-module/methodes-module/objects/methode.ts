import { ElementParent } from '../../objects/element-parent';


export class Methode {

	public static readonly DEBLOCK_MET: number = 1;

  	public nom: string;
  	public listeElements: ElementParent[];
  	public id: number;

  	constructor(nom: string, listeElements: ElementParent[], id: number) {
    		this.nom = nom;
    		this.listeElements = listeElements;
    		this.id = id;
  	}

}
