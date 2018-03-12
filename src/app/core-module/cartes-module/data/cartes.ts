import { Carte } from '../objects/carte';
import { ElementParent } from '../../objects/element-parent';
import { ElementVraiFaux } from '../../objects/element-vrai-faux';
import { ElementSavaisTuQue } from '../../objects/element-savais-tu-que';
import { ElementImage } from '../../objects/element-image';
import { ElementVideo } from '../../objects/element-video';
import { ElementRadioBouton } from '../../objects/element-radio-bouton';


export const CARTES: Carte[] = [

  	{
    	nom: 'Carte 1',
		  icon: 'arrow-forward',
		  iconEtat: 'eye-off',
		  iconEtatColor: 'danger',
      messageNotif: 'notif carte 1',
    	id: 0,
    		dim: "Attention",
    		listeElements: [
      			<ElementImage>{
        			texte: 'le cerveau c\'est très important', 
        			bouton: 'La suite', 
        			image: 'assets/imgs/goldfish.jpg',
        			typeElem: 'ElementImage'},            
      			<ElementVraiFaux>{
        			bouton: 'vrai faux',
        			texte: 'De manière générale, est-il vrai que nous n\'utilisons que 10% de notre cerveau ?',
        			valeur: true,
        			image: 'assets/imgs/cerveau.jpg',
        			typeElem: 'ElementVraiFaux'},
      			<ElementParent>{
        			texte: 'En effet, selon Wolfe Fisher et al. Les chercheurs n\'ont pas encore réussi à prouver l\'existence de zones inactives dans le cerveau. À l\'exception des personnes se trouvant dans un état végétatif.', 
        			bouton: 'Retour au menu !',
        			typeElem: 'ElementParent'}
      	  	]
  	},

  	{
    	nom: 'Carte 2',
		  icon: 'arrow-forward',
		  iconEtat: 'eye-off',
		  iconEtatColor: 'danger',
      messageNotif: 'notif carte 2',
    	id: 1,
    	dim: "Attention",
    		listeElements: [ 
      			<ElementVraiFaux>{
        			bouton: 'retour au menu',
        			texte: 'vrai ou faux ? bonne question',
        			valeur: true,
        			image: '',
        			typeElem: 'ElementVraiFaux'}, 
      			<ElementSavaisTuQue>{
         			bouton: 'et apres ?',
         			texte: 'blabla',
         			sujet: 'la nicotine',
         			positif: 'ça détend et ça relax etc',
         			negatif: 'c\'est mauvais pour la santé, les poumons etc.',
         			conseil: 'donc il vaut mieux éviter de fumer, et plutot macher du chewing gum',
         			typeElem: 'ElementSavaisTuQue'},
      			<ElementParent>{
        			texte: 'savais-tu que la mémoire d\'un poisson rouge est bien ', 
        			bouton: 'retour au menu',
        			typeElem: 'ElementParent'}
    		]
  	},

  	{
    	nom: 'Carte 3',
		  icon: 'arrow-forward',
		  iconEtat: 'eye-off',
		  iconEtatColor: 'danger',
      messageNotif: 'notif carte 3',
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
        			typeElem: 'ElementSavaisTuQue'},
      			<ElementVraiFaux>{
        			bouton: 'vrai faux',
        			texte: 'vrai ou faux ? très bonne question',
        			valeur: false,
        			image: '',
        			typeElem: 'ElementVraiFaux'},
      			<ElementParent>{
        			texte: 'le cerveau c\'est très important 1', 
        			bouton: 'La suite', 
        			typeElem: 'ElementParent'},
      			<ElementParent>{
   		     		texte: 'le cerveau c\'est très important 2', 
        			bouton: 'Retour au menu', 
        			typeElem: 'ElementParent'}
    		]
  	},

  	{
      nom:'Plus organisé qu\'un poisson rouge ?',
    	id: 3,
		  icon: 'arrow-forward',
		  iconEtat: 'eye-off',
		  iconEtatColor: 'danger',
      messageNotif: 'Plus organisé qu\'un poisson rouge ?',
    	dim: "Mémoire",
    		listeElements: [
      			<ElementImage>{
        			bouton: 'La suite !',
        			texte: 'Nous avons une mémoire à court terme plus courte que celle d\'un poisson rouge ! \nEn effet, celle-ci a récemment été  calculée à 8.25 secondes en moyennne, alors que celle d\'un poisson est de 9 secondes !',
        			image: 'assets/imgs/goldfish.jpg',
        			typeElem: 'ElementImage'},
      			<ElementImage>{
        			bouton: 'Réponse ?',
        			texte: '9 secondes c\'est très court !\nIl y a donc des stuces et des outils pour être plus efficace ! \nÀ ton avis, quel est l\'outil le plus répandu pour s\'aider à se souvenir ?',
        			image: 'assets/imgs/goldfish.jpg',
        			typeElem: 'ElementImage'},
      			<ElementImage>{
        			bouton: 'Retour au menu',
        			texte: 'L\'agenda ou le bloc-note !',
        			image: 'assets/imgs/goldfish.jpg',
        			typeElem: 'ElementImage'}
    		]
  	},

    {
      nom:'Un peu de motivation ?',
      id: 4,
      icon: 'arrow-forward',
      iconEtat: 'eye-off',
      iconEtatColor: 'danger',
      messageNotif: 'Un peu de motivation ?',
      dim: "Régulation des émotions",
        listeElements: [
            <ElementVideo>{
              texte: 'Just do it !!',
              bouton: 'La suite !',
              video: 'https://www.youtube.com/embed/ZXsQAXx_ao0',
              typeElem: 'ElementVideo'
            }
        ]
    },

    {
      nom:'Jeu de la liste de courses',
      id: 4,
      icon: 'arrow-forward',
      iconEtat: 'eye-off',
      iconEtatColor: 'danger',
      messageNotif: 'Le jeu de la liste de courses',
      dim: "Mémoire",
        listeElements: [
            <ElementImage>{
              texte: 'Observe attentivement cette liste...',
              bouton: 'C\'est bon !',
              image: 'assets/imgs/listeDeCourses.png',
              typeElem: 'ElementImage'
            },
            <ElementVideo>{
              texte: 'Regarde cette vidéo',
              bouton: 'La suite !',
              video: 'https://www.youtube.com/embed/QE-T_kikIKI',
              typeElem: 'ElementVideo'
            },
            <ElementRadioBouton>{
              texte: 'Combien y avait-il de légumes sur la liste de courses ?',
              bouton: 'Réponse ?',
              radioBoutons: ['0','1','2','3','4','5'],
              reponse: '3',
              typeElem: 'ElementRadioBouton'
            },
            <ElementImage>{
              texte: '3 !',
              bouton: 'Retour à la boîte aux cartes',
              image: 'assets/imgs/trois.jpg',
              typeElem: 'ElementImage'
            }
        ]
    },

    {
        nom:'C\est le monde à l\'envers !',
        id: 5,
    icon: 'arrow-forward',
    iconEtat: 'eye-off',
    iconEtatColor: 'danger',
    messageNotif: 'C\est le monde à l\'envers ?',
        dim: "Attention",
        listeElements: [
            <ElementImage>{
              texte: 'Reconnais-tu cette personne ?',
              bouton: 'Tourner l\'image !',
              image: 'assets/imgs/obamaEnvers.png',
              typeElem: 'ElementImage'
            },
            <ElementImage>{
              texte: 'Bizarre non ?',
              bouton: 'La suite !',
              image: 'assets/imgs/obamaEndroit.png',
              typeElem: 'ElementImage'
            },
            <ElementImage>{
              texte: 'Lorsque nous analysons des visages, notre cerveau en réalité analyse des parties de celui-ci et les assemble sous forme de puzzle. Chaque pièce est donc reconnue séparément. \nC\'est pour cela que la première image ne nous choque pas : car nous reconnaissons les yeux et la bouche à l\'endroit ! \nCela ne marche cependant pas lorsqu\'un visage est à l\'endroit, car notre vue va essayer de corriger ce qui nous parait bizarre par rapport à notre perception habituelle des visages.',
              bouton: 'La suite !',
              image: 'assets/imgs/perception_visage.jpg',              
              typeElem: 'ElementImage'
            },
            <ElementImage>{
              texte: '3 !',
              bouton: 'Retour à la boîte aux cartes',
              image: 'assets/imgs/trois.jpg',
              typeElem: 'ElementImage'
            }
        ]
    }

]



