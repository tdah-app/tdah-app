import { Carte } from '../objects/carte';
import { Element } from '../objects/element';
import { ElementVraiFaux } from '../objects/element-vrai-faux';
import { ElementSavaisTuQue } from '../objects/element-savais-tu-que';
import { ElementImage } from '../objects/element-image';

export const CARTES: Carte[] = [

  	{
    		nom: 'Carte 1',
    		id: 0,
    		dim: "Attention",
    		listeElements: [
      			<ElementImage>{
        			texte: 'le cerveau c\'est très important', 
        			bouton: 'La suite', 
        			image: './../assets/imgs/goldfish.jpg',
        			type: 'ElementImage'},
      			<ElementVraiFaux>{
        			bouton: 'vrai faux',
        			texte: 'De manière générale, est-il vrai que nous n\'utilisons que 10% de notre cerveau ?',
        			valeur: true,
        			reponse: 'En effet, selon Wolfe Fisher et al. Les chercheurs n\'ont pas encore réussi à prouver l\'existence de zones inactives dans le cerveau. À l\'exception des personnes se trouvant dans un état végétatif.',
        			image: './../assets/imgs/cerveau.jpg',
        			type: 'ElementVraiFaux'},
      			<Element>{
        			texte: 'En effet, selon Wolfe Fisher et al. Les chercheurs n\'ont pas encore réussi à prouver l\'existence de zones inactives dans le cerveau. À l\'exception des personnes se trouvant dans un état végétatif.', 
        			bouton: 'Retour au menu !',
        			type: 'Element'}
      	  	]
  	},

  	{
    		nom: 'Carte 2',
    		id: 1,
    		dim: "Attention",
    		listeElements: [ 
      			<ElementVraiFaux>{
        			bouton: 'retour au menu',
        			texte: 'vrai ou faux ? bonne question',
        			valeur: true,
        			reponse: 'la reponse était : vrai !!!',
        			image: '',
        			type: 'ElementVraiFaux'}, 
      			<ElementSavaisTuQue>{
         			bouton: 'et apres ?',
         			texte: 'blabla',
         			sujet: 'la nicotine',
         			positif: 'ça détend et ça relax etc',
         			negatif: 'c\'est mauvais pour la santé, les poumons etc.',
         			conseil: 'donc il vaut mieux éviter de fumer, et plutot macher du chewing gum',
         			type: 'ElementSavaisTuQue'},
      			<Element>{
        			texte: 'savais-tu que la mémoire d\'un poisson rouge est bien ', 
        			bouton: 'retour au menu',
        			type: 'Element'}
    		]
  	},

  	{
    		nom: 'Carte 3', 
    		id: 2,
    		dim: "Mémoire",
    		listeElements: [
      			<ElementSavaisTuQue>{
        			bouton: 'et apres ???',
        			texte: 'blabla2',
        			sujet: 'le méthylphénidate',
        			positif: 'ça permet d\'augmenter la concentration etc',
        			negatif: 'ça apporte plein d\'effets indésirable',
        			conseil: 'donc il vaut mieux éviter d\'en prendre, et plutot utiliser TDApp',
        			type: 'ElementSavaisTuQue'},
      			<ElementVraiFaux>{
        			bouton: 'vrai faux',
        			texte: 'vrai ou faux ? très bonne question',
        			valeur: false,
        			reponse: 'la reponse était : faux !',
        			image: '',
        			type: 'ElementVraiFaux'},
      			<Element>{
        			texte: 'le cerveau c\'est très important 1', 
        			bouton: 'La suite', 
        			type: 'Element'},
      			<Element>{
   		     		texte: 'le cerveau c\'est très important 2', 
        			bouton: 'Retour au menu', 
        			type: 'Element'}
    		]
  	},

  	{
    		nom:'Plus organisé qu\'un poisson rouge ?',
    		id: 3,
    		dim: "Mémoire",
    		listeElements: [
      			<ElementImage>{
        			bouton: 'La suite !',
        			texte: 'Nous avons une mémoire à court terme plus courte que celle d\'un poisson rouge ! \nEn effet, celle-ci a récemment été  calculée à 8.25 secondes en moyennne, alors que celle d\'un poisson est de 9 secondes !',
        			image: './../assets/imgs/goldfish.jpg',
        			type: 'ElementImage'},
      			<ElementImage>{
        			bouton: 'Réponse ?',
        			texte: '9 secondes c\'est très court !\nIl y a donc des stuces et des outils pour être plus efficace ! \nÀ ton avis, quel est l\'outil le plus répandu pour s\'aider à se souvenir ?',
        			image: './../assets/imgs/goldfish.jpg',
        			type: 'ElementImage'},
      			<ElementImage>{
        			bouton: 'Retour au menu',
        			texte: 'L\'agenda ou le bloc-note !',
        			image: './../assets/imgs/goldfish.jpg',
        			type: 'ElementImage'}
    		]
  	}

]



