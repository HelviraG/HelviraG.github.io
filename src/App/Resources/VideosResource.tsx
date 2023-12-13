import { useTranslation } from "react-i18next";
import { Tags } from "./Enums/Tags";

export interface ILive {
    channel: string;
    channelImg: string;
    title: string;
    tags: string[];
    imgUrl: string;
    lightColor: string;
    darkColor: string;
    link?: string;
}

export const ListVideos = () => {
    const { t } = useTranslation();

    return [
        {
            "channel": "Gouvernement",
            "title": "On a toutes une tête à travailler dans la tech",
            "tags": [Tags.PUB, Tags.VIDEO, Tags.ALL],
            "imgUrl": "https://i.ibb.co/kgPGWDv/pub-gouv-large.jpg",
            "lightColor": "",
            "darkColor": "",
            "link": "https://www.youtube.com/embed/cJ0UVShYgJw",
            "channelImg": "https://i.ibb.co/4dnB73p/gouvernement-channel.jpg",
        },
        {
            "channel": "WeLoveDevs - La chaine secondaire",
            "title": "SE RECONVERTIR DANS LE DÉVELOPPEMENT avec Helvira au Web2Day 2023",
            "tags": [Tags.VIDEO, Tags.INTERVIEW, Tags.ALL],
            "imgUrl": "https://i.ibb.co/Mspzzq0/maxresdefault-2.jpg",
            "lightColor": "",
            "darkColor": "",
            "link": "https://www.youtube.com/embed/fCRGr6JOBfI",
            "channelImg": "https://i.ibb.co/zZVT2jQ/we-love-devs-channel.jpg",
        },
        {
            "channel": "Social Builder",
            "title": "#JaiOséLaTech - Helvira",
            "tags": [Tags.VIDEO, Tags.INTERVIEW, Tags.ALL],
            "imgUrl": "https://i.ibb.co/XLVbY0N/social-builder-miniature-large.jpg",
            "lightColor": "",
            "darkColor": "",
            "link": "https://www.youtube.com/embed/HtdqFtq1nOc",
            "channelImg": "https://i.ibb.co/KyvfJgS/social-builder-channel.jpg",
        },
        {
            "channel": "Social Builder",
            "title": "Forum Femmes & Numérique | Plénière du matin",
            "tags": [Tags.LIVE, Tags.VIDEO, t('app.lives.tags.testimony'), Tags.ALL],
            "imgUrl": "https://i.ibb.co/ncq7pMN/fireshot-capture-095-forum-femmes-numerique-femmesetnumerique-captag-events.jpg",
            "lightColor": "",
            "darkColor": "",
            "link": "https://www.youtube.com/embed/bOM_p7rAa5c?t=6710",
            "channelImg": "https://i.ibb.co/KyvfJgS/social-builder-channel.jpg",
        },
        {
            "channel": "Alors on dev",
            "title": "[DEV] Comment se passe une formation en reconversion ?",
            "tags": [Tags.LIVE, t('app.lives.tags.testimony'), Tags.ALL],
            "imgUrl": "https://i.ibb.co/YXXjxBW/bilan-9.jpg",
            "lightColor": "",
            "darkColor": "",
            "link": "https://www.youtube.com/embed/ao59Uan86LM",
            "channelImg": "https://i.ibb.co/b10YXv6/alors-on-dev-channel.jpg",
        },
        {
            "channel": "WeLoveDevs - La chaine secondaire",
            "title": "Empouvoirer les développeuses [BEST-OF LIVE avec Helvira de Motiv'Her]",
            "tags": [Tags.LIVE, Tags.INTERVIEW, Tags.ALL],
            "imgUrl": "https://i.ibb.co/17Dg9Qn/bilan-8.jpg",
            "lightColor": "",
            "darkColor": "",
            "link": "https://www.youtube.com/embed/wF4fAiYosJE",
            "channelImg": "https://i.ibb.co/zZVT2jQ/we-love-devs-channel.jpg",
        },
        {
            "channel": "Ada Tech School",
            "title": '"Vis ma vie de développeuse" avec Flora Hommand, Laure Leter et Helvira Goma',
            "tags": [Tags.LIVE, t('app.lives.tags.testimony'), Tags.ALL],
            "imgUrl": "https://i.ibb.co/yPYtkNT/bilan-1.jpg",
            "lightColor": "",
            "darkColor": "",
            "link": "https://www.youtube.com/embed/WYkVSdL5NE0",
            "channelImg": "https://i.ibb.co/82B0hys/ada-tech-school-channel.jpg",
        },
        {
            "channel": "Javascript Academy",
            "title": "Aider les FEMMES à devenir développeuses avec Helvira (Fondatrice de Motiv'Her)",
            "tags": [Tags.LIVE, Tags.INTERVIEW, Tags.ALL],
            "imgUrl": "https://i.ibb.co/NpNQXcx/bilan-4.jpg",
            "lightColor": "",
            "darkColor": "",
            "link": "https://www.youtube.com/embed/twNH2bovVT0",
            "channelImg": "https://i.ibb.co/yFQxMbg/javascript-academy-channel.jpg",
        },
    ]
} 
