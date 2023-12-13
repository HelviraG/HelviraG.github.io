import { useTranslation } from "react-i18next";
import { Tags } from "./Enums/Tags";
import { useTheme } from "@mui/material";

export interface IConference {
    year: string;
    day: string;
    month: string;
    event: string;
    title: string;
    place?: string;
    location: string;
    tags: string[];
    imgUrl: string;
    lightColor: string;
    darkColor: string;
    link?: string;
}

export const ListConferences = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    return [
        {
            "year": "2023",
            "day": "31",
            "month": t('app.general.month.october'),
            "event": "Asynconf",
            "title": "Si la reconversion m'était contée: itinéraire d'une reconversion",
            "place": "Terrasse Discovery",
            "location": "Paris, France",
            "tags": [Tags.DISCOVERY, Tags.REPLAY],
            "imgUrl": "https://i.ibb.co/mDKYGtZ/sddefault.jpg",
            "lightColor": theme.event.primary.light,
            "darkColor": theme.event.primary.dark,
            "link": "https://www.youtube.com/embed/rOkFhYHl2rc"
        },
        {
            "year": "2023",
            "day": "20",
            "month": t('app.general.month.october'),
            "event": "DevFest Nantes",
            "title": "Je ne suis pas passionnée 🔥 et alors ?",
            "place": "Cité des Congrès",
            "location": "Nantes, France",
            "tags": [Tags.DISCOVERY, Tags.REPLAY],
            "imgUrl": "https://i.ibb.co/hdZ7JNw/1698420175427.jpg",
            "lightColor": theme.event.info.light,
            "darkColor": theme.event.info.dark,
            "link": "https://www.youtube.com/embed/o-2cC8KC2wg?list=PLuZ_sYdawLiUHU4E1i5RrFsRN_lQcgPwT"
        },
        {
            "year": "2023",
            "day": "31",
            "month": t('app.general.month.may'),
            "event": "Web2Day",
            "title": "Heureux accident: La reconversion ou quand le dev s'impose à soi !",
            "place": "Stereolux 4",
            "location": "Nantes, France",
            "tags": [Tags.TECH_NOCODE],
            "imgUrl": "https://i.ibb.co/R9ZkYkN/1682695859511.jpg",
            "lightColor": theme.event.warning.light,
            "darkColor": theme.event.warning.dark
        },
        {
            "year": "2023",
            "day": "26",
            "month": t('app.general.month.may'),
            "event": "DevFest Lille",
            "title": "Les reconvertis: cette nouvelle vague 🌊 de profils dans le dev",
            "place": "Grand Palais",
            "location": "Lille, France",
            "tags": [Tags.DISCOVERY, Tags.REPLAY],
            "imgUrl": "https://i.ibb.co/KG9dRhZ/maxresdefault.jpg",
            "lightColor": theme.event.primary.light,
            "darkColor": theme.event.primary.dark,
            "link": "https://www.youtube.com/embed/fbiam_bOKPY"
        },
        {
            "year": "2023",
            "day": "20",
            "month": t('app.general.month.april'),
            "event": "NantesJS",
            "title": "Je ne suis pas passionnée 🔥 et alors ?",
            "place": "SNCF Connect & Tech",
            "location": "Nantes, France",
            "tags": [Tags.TECH],
            "imgUrl": "https://i.ibb.co/Fs2k42y/1682424175890.jpg",
            "lightColor": theme.event.info.light,
            "darkColor": theme.event.info.dark
        },
        {
            "year": "2023",
            "day": "02",
            "month": t('app.general.month.february'),
            "event": "Very Tech Trip",
            "title": "Les reconvertis: cette nouvelle vague 🌊 de profils dans le dev",
            "place": "Cité des Sciences et de l'Industrie",
            "location": "Paris, France",
            "tags": [Tags.QUICKY],
            "imgUrl": "https://i.ibb.co/X5m0dmP/image-1.png",
            "lightColor": theme.event.warning.light,
            "darkColor": theme.event.warning.dark
        },
        {
            "year": "2023",
            "day": "19",
            "month": t('app.general.month.january'),
            "event": "Touraine Tech",
            "title": "Les reconvertis: cette nouvelle vague 🌊 de profils dans le dev",
            "place": "École Polytech Tours",
            "location": "Tours, France",
            "tags": [Tags.HUMAN_TECH, Tags.REPLAY],
            "imgUrl": "https://i.ibb.co/pQzqTjr/maxresdefault-1.jpg",
            "lightColor": theme.event.primary.light,
            "darkColor": theme.event.primary.dark,
            "link": "https://www.youtube.com/embed/y9oCT0Zx3Vc"
        },
        {
            "year": "2022",
            "day": "15",
            "month": t('app.general.month.december'),
            "event": "Agile Tour Rennes",
            "title": "Les reconvertis: cette nouvelle vague 🌊 de profils dans le dev",
            "place": "Couvent des Jacobins",
            "location": "Rennes, France",
            "tags": [Tags.BEGINNER],
            "imgUrl": "https://i.ibb.co/Fg8vCQC/Fk-Bpzqj-WYAMk1-Nc.jpg",
            "lightColor": theme.event.info.light,
            "darkColor": theme.event.info.dark
        },
        {
            "year": "2022",
            "day": "17",
            "month": t('app.general.month.november'),
            "event": "Codeurs en Seine",
            "title": "Les reconvertis: cette nouvelle vague 🌊 de profils dans le dev",
            "place": "Kindarena",
            "location": "Rouen, France",
            "tags": [Tags.QUICKY, Tags.REPLAY],
            "imgUrl": "https://i.ibb.co/6gZkH9m/1668788757970.jpg",
            "lightColor": theme.event.warning.light,
            "darkColor": theme.event.warning.dark,
            "link": "https://www.youtube.com/embed/B8eqnvsg9O4"
        }
    ];
}