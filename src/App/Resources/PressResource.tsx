import { useTranslation } from 'react-i18next';
import { Tags } from './Enums/Tags';

export interface IPress {
    media: string;
    mediaImg: string;
    title: string;
    tags: string[];
    imgUrl: string;
    lightColor: string;
    darkColor: string;
    link?: string;
    writtenBy?: string;
    caption: string;
}

export const ListPressArticles = () => {
    const { t } = useTranslation();

    return [
        {
            "media": "Obeo Blog",
            "mediaImg": "https://i.ibb.co/16HF3J1/obeoblog-media.png",
            "title": "Le DevFest Nantes 2023, on y était!",
            "tags": [Tags.DEVFEST, t('app.press.tags.conference')],
            "imgUrl": "https://i.ibb.co/tKRmnmp/obeoblog-article.jpg",
            "lightColor": "",
            "darkColor": "",
            "link": "https://blog.obeosoft.com/le-devfest-nantes-2023-on-y-etait",
            "writtenBy": "Thibault Béziers la Fosse",
            "caption": "Le 19 et 20 octobre 2023 a eu lieu, à la Cité des Congrès de Nantes, la 11ème édition du DevFest Nantes 2023. C’est un événement rassemblant des développeurs passionnés pour réfléchir aux futures technologies, partager et échanger autour des technologies du Web, du Cloud, du BigData, du Mobile et des Objets Connectés.",
        },
        {
            "media": "We love devs",
            "mediaImg": "https://i.ibb.co/zZVT2jQ/we-love-devs-channel.jpg",
            "title": "Le récap de la semaine",
            "tags": [Tags.BLOG, Tags.ENGINEERING],
            "imgUrl": "https://i.ibb.co/G786RKb/RECAP-W3-D-4-du18au22-1.png",
            "lightColor": "",
            "darkColor": "",
            "link": "https://welovedevs.com/fr/articles/se-reconvertir-dans-le-developpement-rencontre-avec-un-product-owner-chez-la-macif-laccessibilite-numerique-apple-le-recap-de-la-semaine/",
            "writtenBy": "Marie Cicero",
            "caption": "Se reconvertir dans le développement avec Helvira au Web2Day 2023, rencontre avec Julie, Product Owner chez la Macif, L’accessibilité numérique & Apple avec Jihène au DevFest Lille 2023 et rencontre avec un concepteur Développeur chez Covéa ✨ C ‘est le récap de la semaine"
        },
        {
            "media": "Hubvisory",
            "mediaImg": "https://i.ibb.co/CmTyhLr/hubvisory-media.jpg",
            "title": "Quand la Tech se mêle des enjeux actuels : retour sur le DevFest",
            "tags": [Tags.BLOG, Tags.ENGINEERING],
            "imgUrl": "https://i.ibb.co/VVFq6v4/article-hubvisory.jpg",
            "lightColor": "",
            "darkColor": "",
            "link": "https://hubvisory.com/fr/blog/quand-la-tech-se-m%C3%AAle-des-enjeux-actuels-retour-sur-le-devfest",
            "writtenBy": "Yannick",
            "caption": "Lors du DevFest 2023, notre développeur Yannick a pu assister à de nombreuses conférences sur l'accessibilité, le handicap, ou encore la reconversion. On lit !",
        },
        
        {
            "media": "LinkedIn",
            "mediaImg": "https://i.ibb.co/Z2VWr78/linkedin-media.png",
            "title": "Pourquoi encourager les femmes dans le développement web ?",
            "tags": [Tags.WOMEN_IN_TECH, Tags.MOTIVATION_CALL],
            "imgUrl": "https://i.ibb.co/k4fr0H4/article-linkedin-femmes-web.jpg",
            "lightColor": "",
            "darkColor": "",
            "link": "https://www.linkedin.com/pulse/pourquoi-encourager-les-femmes-dans-le-d%25C3%25A9veloppement-web-goma-?trackingId=zOF5hMlKRxKYyKSi0UDZlg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3B7r1HEKxCREyOD1hGNFUL%2Bg%3D%3D",
            "writtenBy": "Helvira Goma",
            "caption": "17%. C’est le pourcentage de femmes programmeurs en France (Insee 2017). C’est peu. C’est ce que l’on se dit tout de suite. Pourtant, cette donnée est logique.",
        },
        {
            "media": "Challenges",
            "mediaImg": "https://i.ibb.co/TKR0j46/challenge-media.jpg",
            "title": "Ces cinq femmes inspirantes se sont reconverties dans la tech",
            "tags": [Tags.CHALLENGES, Tags.WOMEN, Tags.TECH],
            "imgUrl": "https://i.ibb.co/ncq7pMN/fireshot-capture-095-forum-femmes-numerique-femmesetnumerique-captag-events.jpg",
            "lightColor": "",
            "darkColor": "",
            "link": "https://www.challenges.fr/femmes/social-builder-ces-cinq-femmes-inspirantes-se-sont-reconverties-dans-la-tech_804275",
            "writtenBy": "Laure Croiset",
            "caption": 'Alors que la filière du numérique compte seulement 27% de femmes, focus sur cinq "super-héroïnes" qui ont tout quitté pour faire carrière dans la tech.',
        },
        {
            "media": "LinkedIn",
            "mediaImg": "https://i.ibb.co/Z2VWr78/linkedin-media.png",
            "title": "6 conseils pour tout développeur(se) en reconversion",
            "tags": [Tags.TECH, t('app.press.tags.retraining')],
            "imgUrl": "https://i.ibb.co/gSrMnNX/article-conseil-reconversion.jpg",
            "lightColor": "",
            "darkColor": "",
            "link": "https://www.linkedin.com/pulse/6-conseils-pour-tout-d%25C3%25A9veloppeurse-en-reconversion-goma-/?trackingId=iP%2BrsnLYSMmcKzYUDDfSdw%3D%3D",
            "writtenBy": "Helvira Goma",
            "caption": "Alors comme cela, vous avez découvert le code par hasard et vous avez envie d’aller plus loin ?",
        },
        {
            "media": "LinkedIn",
            "mediaImg": "https://i.ibb.co/Z2VWr78/linkedin-media.png",
            "title": "Ce qu'on ne vous dit pas sur la reconversion professionnelle",
            "tags": [Tags.TECH, t('app.press.tags.retraining')],
            "imgUrl": "https://i.ibb.co/0VxC2t8/article-linkedin-reconversion.jpg",
            "lightColor": "",
            "darkColor": "",
            "link": "https://www.linkedin.com/pulse/ce-quon-ne-vous-dit-pas-sur-la-reconversion-helvira-goma-/?trackingId=iP%2BrsnLYSMmcKzYUDDfSdw%3D%3D",
            "writtenBy": "Helvira Goma",
            "caption": "Si on m’avait dit que je serai développeuse web et que ce serait une passion, j’aurai ri aux éclats ! Je ne savais même pas que ce métier existait. Je consultais les sites web sans vraiment m’intéresser aux rouages.",
        },
        {
            "media": "La Vie",
            "mediaImg": "https://i.ibb.co/qBgzy6C/lavie-media.png",
            "title": "Avec les Descodeuses, un cursus pour des têtes de la « tech » au féminin",
            "tags": [t('app.press.tags.actuality'), t('app.press.tags.solidarity')],
            "imgUrl": "https://i.ibb.co/tYYLzs6/image-1.jpg",
            "lightColor": "",
            "darkColor": "",
            "link": "https://www.lavie.fr/actualite/solidarite/avec-les-descodeuses-un-cursus-pour-des-tetes-de-la-tech-au-feminin-60081.php",
            "writtenBy": "Alexandra Luthereau",
            "caption": "En Île-de-France, l'association Descodeuses sensibilise et forme les femmes des quartiers populaires au développement web. Pour plus de mixité dans le monde numérique.",
        }
    ]
}