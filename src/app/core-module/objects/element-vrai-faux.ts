import { ElementParent } from './element-parent';

export class ElementVraiFaux extends ElementParent {

	public valeur: boolean;
	public image: string;
	public typeElem: string;

	constructor(texte: string, bouton: string, valeur: boolean, image: string) {
		super(texte, bouton);
		this.valeur = valeur;
		this.image = image;
		this.typeElem = 'ElementVraiFaux';
	}

}

