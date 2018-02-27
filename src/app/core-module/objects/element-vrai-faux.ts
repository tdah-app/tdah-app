import { ElementParent } from './element-parent';

export class ElementVraiFaux extends ElementParent {

  	public valeur: boolean;
  	public reponse: string;
  	public image: string;
  	public typeElem: string;

  	constructor(texte: string, bouton: string, valeur: boolean, reponse: string, image: string) {
    		super(texte,bouton);
    		this.valeur = valeur;
    		this.reponse = reponse;
    		this.image = image;
    		this.typeElem = 'ElementVraiFaux';
  	}

}

