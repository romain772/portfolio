const experiences = [
    {
        id : 1,
        title : "Manager service Care Center @ DAHER TECHNOLOGIES",
        date : "JUILLET 2012 / SEPTEMBRE 2020",
        location : "Marly La Ville / IDF",
        tasks : [
            "Service Qualité : Prise en charge et analyse des demandes et réclamations client ALCATEL-LUCENT puis NOKIA",
            "Support et suivi opérationnel : Analyse et résolution des anomalies de l’ensemble des services",
            "Création / mise en place de standards de travail, visuel et de réaction",
            "Utilisation d’un ERP (SAP), et d’OFFICE"
        ],
    },
    {
        id : 2,
        title : "Service Réception @ DAHER INTERNATIONAL",
        date : "MARS 2012 / JUILLET 2012",
        location: "Marly La Ville / IDF",
        tasks : [
            "Accueil et gestion des transporteurs et expressistes",
            "Contrôle et enregistrement informatique (SAP) de la marchandise",
            "Détection et analyse des anomalies et litiges de livraison",
            "Polyvalence sur l’ensemble des postes opérationnels du site dans le cadre de l’amélioration continue"
        ]
    },
    {
        id : 3,
        title : "Conseiller de vente @ CREATIVE SA puis DUTY FREE PARIS",
        date : "OCTOBRE 2005 / JANVIER 2012",
        location: "Marly La Ville / IDF",
        tasks : [
            "Conseiller de vente en prêt à porter / maroquinerie de luxe à l’aéroport Paris Charles De Gaulle",
            "Gestion des stocks du magasin et du réassort",
            "Utilisation du logiciel de caisse (SAP), reporting des chiffres quotidiens (EXCEL)",
            "Utilisation quotidienne de l’anglais pour une clientèle internationale"
        ],
    }
]

export default function handler(req, res) {
    res.status(200).json({ experiences })
  }