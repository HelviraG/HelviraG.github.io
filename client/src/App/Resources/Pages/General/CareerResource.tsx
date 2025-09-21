import { convertToTypes } from "@hooks/useConverters";
import { Types } from "@resources/Enums/Types";
import { useListCareerQuery } from "@services/CareerApi";
import { useTranslation } from "react-i18next";

export interface IExperience {
  anchor: Types | undefined;
  company: string;
  companyImg: string;
  companyType: string;
  time: string;
  duration: string;
  position: string;
  missions: string[];
  technos: string[];
  lightColor: string;
  darkColor: string;
  link?: string;
}

export interface IExperiencev2 {
  anchor: string;
  company: string;
  companyImg: string;
  companyType: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  durationNumber: string;
  durationFrame: string;
  position: string;
  missions: string[];
  technos: string[];
  lightColor: string;
  darkColor: string;
  link?: string;
}

export const ListExperiences = () => {
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  const { t } = useTranslation();
  const { data } = useListCareerQuery();

  if (data && data.career) {
    return data.career.map((careerEvent: IExperiencev2) => {
      const startMonth = eval(careerEvent.startMonth);
      const endMonth = eval(careerEvent.endMonth);
      const time = `${startMonth}, ${careerEvent.startYear} -> ${endMonth}${careerEvent.endYear !== "" ? `, ${eval(careerEvent.endYear)}` : ""}`;
      const duration = `${careerEvent.durationNumber} ${eval(careerEvent.durationFrame)}`;

      return {
        anchor: convertToTypes(careerEvent.anchor),
        company: careerEvent.company,
        companyImg: careerEvent.companyImg,
        companyType: careerEvent.companyType.includes("t(")
          ? eval(careerEvent.companyType)
          : careerEvent.companyType,
        missions: careerEvent.missions.map((mission) => {
          return mission.includes("t(") ? eval(mission) : mission;
        }),
        technos: careerEvent.technos.map((techno) => {
          return techno.includes("t(") ? eval(techno) : techno;
        }),
        position: careerEvent.position.includes("t(")
          ? eval(careerEvent.position)
          : careerEvent.position,
        lightColor: careerEvent.lightColor,
        darkColor: careerEvent.darkColor,
        time,
        duration,
      };
    });
  }

  return [];
};
