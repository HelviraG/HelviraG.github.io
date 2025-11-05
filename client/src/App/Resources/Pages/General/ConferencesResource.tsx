import { convertTags } from "@hooks/useConverters";
import { useListAbstractsQuery, useListConferencesQuery } from "@services/ConferencesApi";
import { useTranslation } from "react-i18next";

export interface IEvent {
  year: string;
  day: string;
  month: string;
  event: string;
  place: string;
  location: string;
  tags: string[];
  imgUrl: string;
  lightColor: string;
  darkColor: string;
  link?: string;
  lang: string;
  githubLink?: string;
}

export interface IConference {
  id: number;
  abstract?: string;
  cover: string;
  title: string;
  lang: string;
  events: IEvent[];
}

export interface IAbstract {
  id: number;
  content: string;
  title: string;
  lang: string;
  isNew: boolean;
  confId?: number;
}

export const ListConferences = () => {
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  const { t } = useTranslation();

  const { data } = useListConferencesQuery();

  if (data && data.conferences) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    return data.conferences.map((conf: IConference) => {
      return {
        id: conf.id,
        cover: conf.cover,
        title: conf.title,
        lang: conf.lang,
        events: conf.events.map((event: IEvent) => {
          return {
            tags: event.tags.map((tag) => convertTags(tag)),
            month: event.month.includes("t(") ? eval(event.month) : event.month,
            year: event.year,
            day: event.day,
            location: event.location,
            place: event.place,
            lang: event.lang,
            imgUrl: event.imgUrl,
            lightColor: event.lightColor,
            darkColor: event.darkColor,
            event: event.event,
            link: event.link,
            githubLink: event.githubLink,
          };
        }),
      };
    });
  }

  return [];
};

export const ListAbstracts = () => {
  const { data } = useListAbstractsQuery();

  if (data && data.abstracts) {
    return data.abstracts.map((abstract) => {
      return {
        id: abstract.id,
        content: abstract.content,
        title: abstract.title,
        lang: abstract.lang,
        isNew: abstract.isNew,
        confId: abstract?.confId
      };
    });
  }

  return [];
};
