import { ElementParent } from '../../objects/element-parent';

export class ElementTimer extends ElementParent {

    public image: string;
    public timer: number;
	public typeElem: string;

	constructor(texte: string, bouton: string, image: string, timer: number) {
		super(texte, bouton);
        this.image = image;
        this.timer = timer;
		this.typeElem = 'ElementTimer';
	}

}