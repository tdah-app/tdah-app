import { ElementParent } from '../../objects/element-parent';

export class ElementDynamic extends ElementParent{
	
    public typeElem: string;
    public listeElements: ElementParent[][];

	constructor(texte: string, bouton: string, typeElem: string, listeElements: ElementParent[][]) {
		super(texte, bouton);
		this.typeElem = 'ElementDynamic';
        this.listeElements = listeElements;
	}

}