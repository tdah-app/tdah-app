import { Methode } from '../objects/methode';
import { ElementParent } from '../../objects/element-parent';
import { ElementImage } from '../../objects/element-image';

export const METHODES: Methode[] = [
  	{
  		nom: 'Pomodoro',
		icon: 'arrow-forward',
		iconEtat: 'lock',
    		id: 0,
    		listeElements: [
        		<ElementParent>{ 
          			texte: 'Choisis une tâche à réaliser aujourd\'hui.',
          			bouton: 'La suite !',
          			typeElem: 'ElementParent'},
        		<ElementImage>{
          			texte: '25 minutes chrono !',
          			bouton: 'Passer',
          			image: '../../../../assets/imgs/minuteur-pomodoro.jpg',
          			typeElem: 'ElementImage'},
        		<ElementImage>{
          			texte: '15minutes de pause ! Profite en pour : \nTe lever, t\'étirer, ou marcher pendant ces quelques minutes.',
          			bouton: 'C\'est reparti !',
          			image: '../../../../assets/imgs/pause.jpg',
          			typeElem: 'ElementImage'}
    		]
  	},

	{
  		nom: 'Pomodoro1',
		icon: 'arrow-forward',
		iconEtat: 'lock',
    		id: 1,
    		listeElements: [
        		<ElementParent>{ 
          			texte: 'Choisis une tâche à réaliser aujourd\'hui.',
          			bouton: 'La suite !',
          			typeElem: 'ElementParent'},
        		<ElementImage>{
          			texte: '25 minutes chrono !',
          			bouton: 'Passer',
          			image: '../../../../assets/imgs/minuteur-pomodoro.jpg',
          			typeElem: 'ElementImage'},
        		<ElementImage>{
          			texte: '15minutes de pause ! Profite en pour : \nTe lever, t\'étirer, ou marcher pendant ces quelques minutes.',
          			bouton: 'C\'est reparti !',
          			image: '../../../../assets/imgs/pause.jpg',
          			typeElem: 'ElementImage'}
    		]
  	},

	{
  		nom: 'Pomodoro2',
		icon: 'arrow-forward',
		iconEtat: 'lock',
    		id: 2,
    		listeElements: [
        		<ElementParent>{ 
          			texte: 'Choisis une tâche à réaliser aujourd\'hui.',
          			bouton: 'La suite !',
          			typeElem: 'ElementParent'},
        		<ElementImage>{
          			texte: '25 minutes chrono !',
          			bouton: 'Passer',
          			image: '../../../../assets/imgs/minuteur-pomodoro.jpg',
          			typeElem: 'ElementImage'},
        		<ElementImage>{
          			texte: '15minutes de pause ! Profite en pour : \nTe lever, t\'étirer, ou marcher pendant ces quelques minutes.',
          			bouton: 'C\'est reparti !',
          			image: '../../../../assets/imgs/pause.jpg',
          			typeElem: 'ElementImage'}
    		]
  	}

]




