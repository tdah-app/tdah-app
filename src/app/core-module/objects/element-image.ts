import { ElementParent } from './element-parent';

export class ElementImage extends ElementParent {

	public image: string;
	public typeElem: string;

	constructor(texte: string, bouton: string, image: string) {
		super(texte, bouton);
		this.image = image;
		this.typeElem = 'ElementImage';
	}

}



