const data  =
{
    title : "Compétences PHP",
    globalDescription : "Concernant le dévéloppement PHP, j'ai choisi de me tourner vers 2 frameworks populaire et rapides :",
    descriptionList : [
        {
            title : "- Symfony\xAE",
            image : "https://symfony.com/logos/symfony_white_03.svg",
            link : "https://symfony.com/"
        },
        {
            title : "- et Yii\xAE",
            image : "https://www.yiiframework.com/image/logo.svg",
            link :  "https://www.yiiframework.com/"
        },
    ]
}

export default function handler(req, res) {
    res.status(200).json({ data })
}