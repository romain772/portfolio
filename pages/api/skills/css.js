const data  =
{
    title : "Compétences Css",
    globalDescription : "Pour aller plus loin que le CSS Inline de base, je me suis intéressé : ",
    descriptionList : [
        {
            title : "- au Développement avec Sass",
            image : "https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png",
            link : "https://sass-lang.com/"
        },
        {
            title : "- à l'utilisation de Framework CSS tels que Tailwind (utilisé pour ce projet),",
            image : "https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg",
            link :  "https://tailwindcss.com/"
        },
        {
            title : "- Bulma",
            image : "https://bulma.io/images/bulma-logo.png",
            link :  "https://bulma.io/"
        },
        {
            title : "- ou UIKIT",
            image : "https://seeklogo.com/images/U/uikit-logo-8CE34FE030-seeklogo.com.png",
            link :  "https://getuikit.com/"
        }
    ]
}

export default function handler(req, res) {
    res.status(200).json({ data })
}