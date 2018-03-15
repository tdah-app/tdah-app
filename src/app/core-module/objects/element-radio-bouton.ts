import { ElementParent } from './element-parent';

export class ElementRadioBouton extends ElementParent {

	public radioBoutons: string[];
	public reponse: string;
	public typeElem: string;

	constructor(texte: string, bouton: string, radioBoutons: string[], reponse: string) {
		super(texte, bouton);
		this.radioBoutons = radioBoutons;
		this.reponse = reponse;
		this.typeElem = 'ElementRadioBouton';
	}

}



