import { ElementParent } from './element-parent';

export class ElementVideo extends ElementParent {
	
 	public video: string;
	public typeElem: string;

  	constructor(texte: string, bouton: string, video: string) {
    		super(texte,bouton);
    		this.video = video;
    		this.typeElem = 'ElementVideo';
  	}

}



