import { useTranslation } from "react-i18next"
import { Types } from "./Enums/Types";

export interface IExperience {
    anchor: string;
    company: string;
    companyImg: string;
    companyType: string;
    time: string;
    duration: string;
    position: string;
    missions: string[];
    technos: string[]   ;
    lightColor: string;
    darkColor: string;
    link?: string;
}

export const ListTechnologies = () => {
    return [
        {
            "backEnd": ["PHP", "Laravel", "Symfony", "Elasticsearch", "C#"],
            "database": ["SQL", "MySQL", "MariaDB", "MongoDB", "PostgreSQL"],
            "fontEnd": ["sass", "grunt", "HTML", "CSS", "redux", "RTK Query", "ReactJS", "Typescript", "JavaScript", "Material UI", "Boostrap"],
            "tools": ["sentry", "kibana", "SourceTree", "Git", "GitHub", "GitLab", "Figma"],
            "methodologies": ["Agile"]
        }
    ]
}

export const ListExperiences = () => {
    const { t } = useTranslation();

    return [
        {
            "anchor": Types.LEFT,
            "company": "Onepilot",
            "companyImg": "https://i.ibb.co/YNqLsxr/onepilot-logo.jpg",
            "companyType": t('app.career.type.customer'),
            "time": `${t('app.general.month.october')}, 2021 -> ${t('app.career.duration.present')}`,
            "duration": `2 ${t('app.career.duration.year')}`,
            "position": "Software Engineer",
            "missions": [
                t('app.career.missions.op.first'),
                t('app.career.missions.op.second'),
                t('app.career.missions.op.third'),
            ],
            "technos": ["ReactJs", "TypeScript", "Laravel 9+", "Redux", t('app.career.technos.archi'), t('app.career.technos.api'), "Elasticsearch", "MySQL", "RTK Query", "Kibana", "Sentry"],
            "lightColor": "#C2C4FD",
            "darkColor": "#3938EE",
        },
        {
            "anchor": Types.RIGHT,
            "company": "Oxalys Technologies",
            "companyImg": "https://i.ibb.co/Mg05Lpn/oxalys-logo.png",
            "companyType": t('app.career.type.buy'),
            "time": `${t('app.general.month.november')}, 2020 -> ${t('app.general.month.october')}, 2021`,
            "duration": `1 ${t('app.career.duration.year')}`,
            "position": t('app.career.position.software'),
            "missions": [
                t('app.career.missions.ox.first'),
                t('app.career.missions.ox.second'),
                t('app.career.missions.ox.third'),
            ],
            "technos": ["JavaScript", "PHP 7", "Symfony", "Twig", "AJAX", "jQuery", t('app.career.technos.api'), "Git", "GitLab", "SQL", "Perl"],
            "lightColor": "#0A254E",
            "darkColor": "#0A254E"
        },
        {
            "anchor": Types.LEFT,
            "company": "ResearchPool",
            "companyImg": "https://i.ibb.co/tcDg1yN/researchpool-logo.jpg",
            "companyType": "FinTech",
            "time": `${t('app.general.month.april')}, 2020 -> ${t('app.general.month.june')}, 2020`,
            "duration": `6 ${t('app.career.duration.month')}`,
            "position": t('app.career.position.developer'),
            "missions": [
                t('app.career.missions.re.first'),
                t('app.career.missions.re.second'),
                t('app.career.missions.re.third'),
                t('app.career.missions.re.fourth'),
            ],
            "technos": ["HTML/CSS", "JavaScript", "PHP 7", "Laravel", "Bootstrap", "AJAX",  "jQuery", "Git", "SourceTree", "MariaDB", "nginx"],
            "lightColor": "#97CBF2",
            "darkColor": "#02A1DB"
        },
        {
            "anchor": Types.RIGHT,
            "company": "Paytweak",
            "companyImg": "https://i.ibb.co/HCYm8gM/paytweak-logo.png",
            "companyType": "FinTech",
            "time": `${t('app.general.month.june')}, 2019 -> ${t('app.general.month.december')}, 2019`,
            "duration": `6 ${t('app.career.duration.month')}`,
            "position": t('app.career.position.developer'),
            "missions": [
                t('app.career.missions.pa.first'),
                t('app.career.missions.pa.second'),
                t('app.career.missions.pa.third'),
                t('app.career.missions.pa.fourth'),
                t('app.career.missions.pa.fifth')
            ],
            "technos": ["HTML/CSS", "JavaScript", "PHP 7", "C#", "jQuery", t('app.career.technos.api'), "Git", "Fork", "MySQL", t('app.career.technos.oop')],
            "lightColor": "#E02424",
            "darkColor": "#DB0303"
        },
    ]
}