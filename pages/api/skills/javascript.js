const data  =
{
    title : "Compétences Javascript",
    globalDescription : "Pour approfondir mes connaissances en JS et me diriger vers la programmation orientée objet:",
    descriptionList : [
        {
            title : "- je me suis perfectionné sur ReactJS\xAE",
            image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png",
            link : "https://fr.reactjs.org/"
        },
        {
            title : "- et son framework NEXTJS\xAE",
            image : "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
            link :  "https://nextjs.org/"
        },
        {
            title : "- et ai également quelques connaissances sur VueJS\xAE",
            image : "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
            link :  "https://vuejs.org/"
        },
        {
            title : "- et son framework NuxtJS\xAE.",
            image : "https://nuxtjs.org/design-kit/colored-logo.svg",
            link :  "https://nuxtjs.org/fr/"
        }
    ]
}

export default function handler(req, res) {
    res.status(200).json({ data })
}