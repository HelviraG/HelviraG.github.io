import { convertTags } from "@hooks/useConverters";
import { useListVideosQuery } from "@services/VideosApi";
import { useTranslation } from "react-i18next";

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
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  const { t } = useTranslation();
  const { data } = useListVideosQuery();

  if (data) {
    if (data.videos) {
      return data.videos.map((video) => {
        return {
          channel: video.channel,
          title: video.title,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          tags: video.tags.map((tag) =>
            tag.includes("t(") ? eval(tag) : convertTags(tag),
          ),
          imgUrl: video.imgUrl,
          lightColor: video.lightColor,
          darkColor: video.darkColor,
          link: video.link,
          channelImg: video.channelImg,
        };
      });
    }
  }

  return [];
};
