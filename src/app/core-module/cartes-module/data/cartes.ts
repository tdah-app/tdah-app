import { Carte } from '../objects/carte';
import { ElementParent } from '../../objects/element-parent';
import { ElementVraiFaux } from '../../objects/element-vrai-faux';
import { ElementSavaisTuQue } from '../../objects/element-savais-tu-que';
import { ElementImage } from '../../objects/element-image';
import { ElementVideo } from '../../objects/element-video';
import { ElementRadioBouton } from '../../objects/element-radio-bouton';


export const CARTES: Carte[] = [

  {
    nom: 'Utilisation du cerveau',
    icon: 'arrow-forward',
    iconEtat: 'eye-off',
    iconEtatColor: 'danger',
    messageNotif: '"Quand on est amoureux, 98% de notre cerveau ne fonctionne pas." -Katherine Pancol',
    id: 0,
    dim: "Attention",
    listeElements: [
      <ElementVraiFaux>{
        bouton: 'vrai faux',
        texte: 'De manière générale, est-il vrai que nous n\'utilisons que 10% de notre cerveau ?',
        valeur: false,
        image: 'assets/imgs/cerveau.jpg',
        typeElem: 'ElementVraiFaux'
      },
      <ElementParent>{
        texte: 'En effet, selon Wolfe Fisher et al. Les chercheurs n\'ont pas encore réussi à prouver l\'existence de zones inactives dans le cerveau. À l\'exception des personnes se trouvant dans un état végétatif.',
        bouton: 'Retour au menu !',
        typeElem: 'ElementParent'
      }
    ]
  },

  {
    nom: 'Le méthylphénidate',
    icon: 'arrow-forward',
    iconEtat: 'eye-off',
    iconEtatColor: 'danger',
    messageNotif: 'Le méthylphénidate...?',
    id: 1,
    dim: "Mémoire",
    listeElements: [
      <ElementSavaisTuQue>{
        bouton: 'Retour à la boite aux cartes !',
        texte: '',
        sujet: 'Le méthylphénidate (Ritalin, Focalin, Medikinet, Concerta) ',
        positif: 'bloque le transporteur de la dopamine, ce qui augmente la concentration de dopamine dans l\'espace synaptique et facilite la transmission d\'information. Ce traitement augmente l\'éveil, améliore l\'attention et les fonctions exécutives. Il diminue aussi l\'hyperactivité.',
        negatif: 'ça apporte plein d\'effets indésirables',
        conseil: 'donc il vaut mieux éviter d\'en prendre, et plutot utiliser TDApp',
        typeElem: 'ElementSavaisTuQue'
      }
    ]
  },

  {
    nom: 'La nicotine',
    icon: 'arrow-forward',
    iconEtat: 'eye-off',
    iconEtatColor: 'danger',
    messageNotif: 'La nicotine...?',
    id: 2,
    dim: "Régulation des émotions",
    listeElements: [
      <ElementSavaisTuQue>{
        bouton: 'Retour à la boite aux cartes !',
        texte: '',
        sujet: 'La nicotine ',
        positif: 'stimule les neurones dopaminergiques et améliore dans un premier temps la concentration.',
        negatif: ' engendre un stress négatif, provoque (avec de grandes probabilités) des cancers, des maladies cardiovasculaires, des infections pulmonaires, une baisse de la fertilité, ainsi que des accidents d\'inattention chez les TDAH fumeurs.',
        conseil: 'donc il vaut mieux éviter d\'en prendre, et plutot utiliser TDApp',
        typeElem: 'ElementSavaisTuQue'
      }
    ]
  },

  {
    nom: 'Plus organisé qu\'un poisson rouge ?',
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
        typeElem: 'ElementImage'
      },
      <ElementImage>{
        bouton: 'Réponse ?',
        texte: '9 secondes c\'est très court !\nIl y a donc des stuces et des outils pour être plus efficace ! \nÀ ton avis, quel est l\'outil le plus répandu pour s\'aider à se souvenir ?',
        image: 'assets/imgs/goldfish.jpg',
        typeElem: 'ElementImage'
      },
      <ElementImage>{
        bouton: 'Retour au menu',
        texte: 'L\'agenda ou le bloc-note !',
        image: 'assets/imgs/calendrier.png',
        typeElem: 'ElementImage'
      }
    ]
  },

  {
    nom: 'Un peu de motivation ?',
    id: 4,
    icon: 'arrow-forward',
    iconEtat: 'eye-off',
    iconEtatColor: 'danger',
    messageNotif: 'Un peu de motivation ?',
    dim: "Régulation des émotions",
    listeElements: [
      <ElementVideo>{
        texte: 'Just do it !!',
        bouton: 'Retout à la boite aux cartes !',
        video: 'https://www.youtube.com/embed/ZXsQAXx_ao0',
        typeElem: 'ElementVideo'
      }
    ]
  },

  {
    nom: 'Jeu de la liste de courses',
    id: 5,
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
        radioBoutons: ['0', '1', '2', '3', '4', '5'],
        reponse: '3',
        typeElem: 'ElementRadioBouton'
      },
      <ElementImage>{
        texte: 'Il y en avait 3 !',
        bouton: 'Retour à la boîte aux cartes',
        image: 'assets/imgs/trois.jpg',
        typeElem: 'ElementImage'
      }
    ]
  },

  {
    nom: 'C\'est le monde à l\'envers !',
    id: 6,
    icon: 'arrow-forward',
    iconEtat: 'eye-off',
    iconEtatColor: 'danger',
    messageNotif: 'C\'est le monde à l\'envers ?',
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
        texte: 'Ton cerveau peut être considéré en deux parties lorsqu\'il s\'agit de traiter les informations visuelles.\nLa partie "logique" ou "verbale", parfois appelée "cerveau gauche", associe un nom à l\'élement perçu après un bref regard.',
        bouton: 'Et le droit ?',
        image: 'assets/imgs/cerveau_2_parties.jpg',
        typeElem: 'ElementImage'
      },
      <ElementImage>{
        texte: 'Le cerveau droit, au contraire, perçoit les relations spatiales et analyse les signaux non verbaux.',
        bouton: 'La suite !',
        image: 'assets/imgs/cerveau_2_parties.jpg',
        typeElem: 'ElementImage'
      },
      <ElementImage>{
        texte: 'Quand tu regardes une photo familière, ton cerveau gauche va vite l\'identifier et va se concentrer sur autre chose.\nLorsque la photo est retournée, l\'identification rapide ne fonctionne pas et le cerveau droit intervient afin d\'interpreter les élements de l\'image. Par conséquent, regarder les photos à l\'envers "éveille" l\'artiste en nous !\nTu peux donc entrainer ce côté artistique en retournant, par exemple, les photos et calendriers présents sur ton bureau !',
        bouton: 'Retour à la boîte aux cartes !',
        image: 'assets/imgs/cerveau_2_parties.jpg',
        typeElem: 'ElementImage'
      }
    ]
  },

  {
    nom: 'La cocaïne',
    icon: 'arrow-forward',
    iconEtat: 'eye-off',
    iconEtatColor: 'danger',
    messageNotif: 'La cocaïne...?',
    id: 7,
    dim: "Régulation des émotions",
    listeElements: [
      <ElementSavaisTuQue>{
        bouton: 'Retour à la boite aux cartes !',
        texte: '',
        sujet: 'La cocaïne et les amphétamines ',
        positif: 'bloquent la recapture et augmentent rapidement la dopamine.',
        negatif: ' créent un effet euphorisant puissant, rapide et bref, entrainant une forte dépendance : surexcitation, accélération de pensées, logorrhée, baisse de l\'humeur, irritabilité, illusion d\'invicibilité. Mais encore des insomnies, dépression, risque suicidaire, agitation, violence, angoisse, confusion, hallucinations, psychose. Et enfin de la perte de poids, de l\'épuisement, des maladies infectieuses, des troubles visuels, respiratoires, cardio-vasculaires, et danger de mort. ',
        conseil: 'donc il vaut mieux éviter d\'en prendre, et plutot utiliser TDApp',
        typeElem: 'ElementSavaisTuQue'
      }
    ]
  },

  {
    nom: 'La caféine',
    icon: 'arrow-forward',
    iconEtat: 'eye-off',
    iconEtatColor: 'danger',
    messageNotif: 'La caféine...?',
    id: 8,
    dim: "Mémoire",
    listeElements: [
      <ElementSavaisTuQue>{
        bouton: 'Retour à la boite aux cartes !',
        texte: '',
        sujet: 'La caféine ',
        positif: 'augmente la réponse du récepteur de la dopamine, et donc augmente la concentration.',
        negatif: ' seulement sur le court terme ! Et, de plus, déclenche un stress négatif... ',
        conseil: 'Préférez une consommation occasionnelle, et en début de journée.',
        typeElem: 'ElementSavaisTuQue'
      }
    ]
  },

  {
    nom: 'Plus rapide que le TGV',
    icon: 'arrow-forward',
    iconEtat: 'eye-off',
    iconEtatColor: 'danger',
    messageNotif: 'Plus rapide que le TGV ?!',
    id: 9,
    dim: "Attention",
    listeElements: [
      <ElementVraiFaux>{
        texte: 'Les informations sont le plus souvent traitées par le biais des images perçues. \nEst-il vrai que le nerf optique transmet des informations au cerveau à une vitesse de 100 à 120 m/s, soit à peu près 400 km/h ?',
        bouton: '',
        image: 'assets/imgs/nerfOptique.jpg',
        valeur: false,
        typeElem: 'ElementVraiFaux'
      },
      <ElementParent>{
        texte: 'Théorie !',
        bouton: 'Retour à la boite aux cartes !',
        typeElem: 'ElementParent'
      }
    ]
  },

  {
    nom: 'La vengeance est un plat que se mange froid.',
    icon: 'arrow-forward',
    iconEtat: 'eye-off',
    iconEtatColor: 'danger',
    messageNotif: '"La vengeance est un plat qui se mange froid."',
    id: 10,
    dim: "Impulsivité",
    listeElements: [
      <ElementRadioBouton>{
        texte: 'À ton avis, la phrase bien connue "la vengeance est un plat qui se mange froid" signifie : ',
        bouton: 'Réponse ?',
        radioBoutons: ['Qu\'il faut se calculer, et ne pas l\'éxecuter trop rapidement.', 'Que la vengeance ne laisse qu\'un goût de plat froid en bouche.', 'Que la vengeance doit être faite le plus rapidement possible.'],
        reponse: 'Qu\'il faut se calculer, et ne pas l\'éxecuter trop rapidement.',
        typeElem: 'ElementRadioBouton'
      },
      <ElementImage>{
        texte: 'Théorie !',
        bouton: 'Retour à la boite aux cartes !',
        image: 'assets/imgs/couverts.png',
        typeElem: 'ElementImage'
      }
    ]
  },

  {
    nom: 'La procrastination',
    id: 11,
    icon: 'arrow-forward',
    iconEtat: 'eye-off',
    iconEtatColor: 'danger',
    messageNotif: 'Nous sommes tous des procrastinateurs !',
    dim: "Planning",
    listeElements: [
      <ElementParent>{
        texte: "La procrastination c\'est : " + '\n\n' + " - Se perdre sur Youtube à regarder des vidéos de chats alors qu\'à la base, on voulait voir un clip musical. \n\n - Décider que, tout à coup, connaître les drapeaux du monde et leur signification sur Wikipédia était devenu indispensable. \n\n - Se demander si trier les livres de sa bibliothèque ou vider la cage de son animal de compagnie n\'étaient pas des prérequis à la révision de son examen.",
        bouton: 'Mais encore ?',
        typeElem: 'ElementParent'
      },
      <ElementImage>{
        texte: 'La procrastination c\'est : \n Commencer un projet en décidant d\'un planning de base. Le premier jour tout va bien ! ',
        bouton: 'Jours suivants',
        image: 'assets/imgs/procrastination1.png',
        typeElem: 'ElementImage'
      },
      <ElementImage>{
        texte: 'La procrastination c\'est : \n Se rendre compte que l\'on avait finalement pas trop envie de bosser les premiers jours, mais c\'est ok, puisqu\'il nous reste encore pas mal de temps.',
        bouton: 'Jours suivants',
        image: 'assets/imgs/procrastination2.png',
        typeElem: 'ElementImage'
      },
      <ElementImage>{
        texte: 'La procrastination c\'est :  \n Commencer à stresser et culpabiliser car on a encore rien fait et que l\'on arrive gentiment au bout de l\'échéance (mais ça ne nous aide pas à démarrer...).',
        bouton: 'Jours suivants',
        image: 'assets/imgs/procrastination3.png',
        typeElem: 'ElementImage'
      },
      <ElementImage>{
        texte: 'La procrastination c\'est :  \n Faire tout le projet à la dernière minute car on n\'a plus le choix !',
        bouton: 'Pourquoi ?',
        image: 'assets/imgs/procrastination4.png',
        typeElem: 'ElementImage'
      },
      <ElementImage>{
        texte: 'Tout simplement car une partie de notre cerveau va privilégier les activités faciles, rapides, et distrayantes à faire, au détriment de nos décisions rationnelles... Jusqu\'à ce qu\'on se retrouve dans une situation critique !',
        bouton: 'Retour à la boite aux cartes',
        image: 'assets/imgs/angeDemon.jpg',
        typeElem: 'ElementImage'
      }
    ]
  },

]



