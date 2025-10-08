import { convertTags } from "@hooks/useConverters";
import { useListPressArticlesQuery } from "@services/PressApi";
import { useTranslation } from "react-i18next";

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
  
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  const { data } = useListPressArticlesQuery();

  if (data && data.press) {
    return data.press.map((pressArticle) => {
      return {
        media: pressArticle.media,
        mediaImg: pressArticle.mediaImg,
        title: pressArticle.title,
        tags: pressArticle.tags.map((tag) => {
          if (tag.startsWith("t(") && typeof t === 'function') {
            // extract translation key inside parentheses
            const key = tag.match(/t\(['"](.+?)['"]\)/)?.[1];
            return key ? t(key) : tag;
          }
          return convertTags(tag);
        }),
        imgUrl: pressArticle.imgUrl,
        lightColor: pressArticle.lightColor,
        darkColor: pressArticle.darkColor,
        link: pressArticle.link,
        writtenBy: pressArticle.writtenBy,
        caption: pressArticle.caption,
      };
    });
  }

  return [];
};
