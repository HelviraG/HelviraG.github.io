import { Tags } from "@resources/Enums/Tags";
import { Types } from "@resources/Enums/Types";

export const convertTags = (tag: string) => {
  switch (tag) {
    case "TECH":
      return Tags.TECH;
    case "TALK":
      return Tags.TALK;
    case "ALL":
      return Tags.ALL;
    case "BEGINNER":
      return Tags.BEGINNER;
    case "BLOG":
      return Tags.BLOG;
    case "CHALLENGES":
      return Tags.CHALLENGES;
    case "DEVFEST":
      return Tags.DEVFEST;
    case "DISCOVERY":
      return Tags.DISCOVERY;
    case "ENGINEERING":
      return Tags.ENGINEERING;
    case "ENGLISH":
      return Tags.ENGLISH;
    case "FRENCH":
      return Tags.FRENCH;
    case "HUMAN_TECH":
      return Tags.HUMAN_TECH;
    case "INTERVIEW":
      return Tags.INTERVIEW;
    case "LIVE":
      return Tags.LIVE;
    case "MOTIVATION_CALL":
      return Tags.MOTIVATION_CALL;
    case "PASSION":
      return Tags.PASSION;
    case "PRESS":
      return Tags.PRESS;
    case "PUB":
      return Tags.PUB;
    case "QUICKY":
      return Tags.QUICKY;
    case "QUIZ":
      return Tags.QUIZ;
    case "REPLAY":
      return Tags.REPLAY;
    case "TECH_NOCODE":
      return Tags.TECH_NOCODE;
    case "TESTIMONY":
      return Tags.TESTIMONY;
    case "VIDEO":
      return Tags.VIDEO;
    case "WOMEN":
      return Tags.WOMEN;
    case "WOMEN_IN_TECH":
      return Tags.WOMEN_IN_TECH;
    case "YEAR":
      return Tags.YEAR;
    case "INSPIRATION":
      return Tags.INSPIRATION;
  }
};

export const convertToTypes = (type: string) => {
  switch (type) {
    case "RIGHT":
      return Types.RIGHT;
    case "LEFT":
      return Types.LEFT;
    case "BOTTOM":
      return Types.BOTTOM;
    case "TOP":
      return Types.TOP;
    case "SUCCESS":
      return Types.SUCCESS;
    case "ERROR":
      return Types.ERROR;
  }
};
