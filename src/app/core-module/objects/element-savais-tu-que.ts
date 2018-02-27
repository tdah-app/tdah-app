import { ElementParent } from './element-parent';

export class ElementSavaisTuQue extends ElementParent {

  	public sujet: string;
  	public positif: string;
  	public negatif: string;
  	public conseil: string;
  	public typeElem: string;

  	constructor(texte: string, bouton: string, sujet: string, positif: string, negatif: string, conseil: string) {
    		super(texte,bouton);
    		this.sujet = sujet;
    		this.positif = positif;
    		this.negatif = negatif;
    		this.conseil = conseil;
    		this.typeElem = 'ElementSavaitTuQue';
  	}

}



