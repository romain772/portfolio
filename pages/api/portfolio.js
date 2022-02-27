const portfolio = [
    {
        id : 1,
        name : "PronoSite Euro 2021",
        description : "Un site de pari en ligne, dévéloppé avec React & Symfony, avec gestion des utilisateurs.",
        tags : ['ReactJS','Symfony','Bulma','MySQL'],
        image : '/Pronosite.png',
        link : 'https://pronosite.herokuapp.com/home/',
        fullproject : false
    },
    {
        id : 2,
        name : "Kids Site",
        description : "1er projet complet, présenté et validé par la 3W Academy pour le diplôme de Développeur/intégrateur Web Junior.",
        tags : ['Javascript','PHP','Css','MySQL'],
        image : '/kidsSite.png',
        link : 'https://romainbre.sites.3wa.io/NewFolder/projet2/',
        fullproject : true
    },
    {
        id : 3,
        name : "Snapshop",
        description : "Boutique de vente HeadWear/Snapbacks, projet développé lors de la formation.",
        tags : ['PHP','Jquery','Css','MySQL'],
        image : '/SnapShop.png',
        link : 'https://romainbre.sites.3wa.io/Developpement/projet/projet/index.php',
        fullproject : false
    },
]

export default function handler(req, res) {
    res.status(200).json({ portfolio })
  }