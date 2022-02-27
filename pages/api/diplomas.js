const diplomas = [
    {
        id : 1,
        title : "Développeur intégrateur en réalisation d’applications web",
        date : "Octobre 2020 / Mai 2021",
        location : "3W Academy / Paris",
        description : "Titre RNCP Niveau III / Développeur Web Junior, utilisation de HTML5, CSS3, Javascript, PHP, MYSQL (gestion de base de données).",
        link : "https://3wa.fr/formations/formation-developpeur-web/une-formation-developpeur-web-junior/"
    },
    {
        id : 2,
        title : "Baccalauréat Littéraire",
        date : "2004",
        location: "Lycée CDG / Longperrier / IDF",
    }
]

export default function handler(req, res) {
    res.status(200).json({ diplomas })
  }
