import i18n from "@i18n";
import { CodingEN } from "@resources/Pages/FalloutOnPassion/ActivityResult/Coding/CodingEN";
import { CodingFR } from "@resources/Pages/FalloutOnPassion/ActivityResult/Coding/CodingFR";
import { DesigningEN } from "@resources/Pages/FalloutOnPassion/ActivityResult/Designing/DesigningEN";
import { DesigningFR } from "@resources/Pages/FalloutOnPassion/ActivityResult/Designing/DesigningFR";
import { GamingEN } from "@resources/Pages/FalloutOnPassion/ActivityResult/Gaming/GamingEN";
import { GamingFR } from "@resources/Pages/FalloutOnPassion/ActivityResult/Gaming/GamingFR";
import { MachineLearningEN } from "@resources/Pages/FalloutOnPassion/ActivityResult/MachineLearning/MachineLearningEN";
import { MachineLearningFR } from "@resources/Pages/FalloutOnPassion/ActivityResult/MachineLearning/MachineLearningFR";
import { Answer } from "@services/QuizApi";

type Profile = "TypeA" | "TypeB" | "TypeC";

const calculateTotalScore = (
  responses: Answer[],
  relevantIds: number[],
): number => {
  return responses
    .filter((response) =>
      relevantIds.includes(parseInt(response.questionId, 10)),
    )
    .reduce((total, response) => total + parseInt(response.answer, 10), 0);
};

const determineProfile = (responses: Answer[]): Profile => {
  const obsessiveIds = [2, 4, 7, 9, 11, 12];
  const harmoniousIds = [1, 3, 5, 6, 8, 10];

  const obsessiveScore = calculateTotalScore(responses, obsessiveIds);
  const harmoniousScore = calculateTotalScore(responses, harmoniousIds);

  if (obsessiveScore > harmoniousScore) {
    return "TypeC";
  } else if (harmoniousScore > obsessiveScore) {
    return "TypeB";
  } else {
    return "TypeA";
  }
};

const getProfile = (responses: Answer[] | undefined): Profile => {
  if (!responses) return "TypeA";

  return determineProfile(responses);
};

const matchTypeWithResult = (profile: string) => {
  let type = "";

  switch (profile) {
    case "TypeA":
      type = "citizen";
      break;
    case "TypeB":
      type = "paladin";
      break;
    case "TypeC":
      type = "superMutant";
      break;
    default:
      type = "citizen";
      break;
  }

  return type;
};

const getFileResult = (lang: string, fileCat: string) => {
  let component;

  if (lang === "EN") {
    switch (fileCat) {
      case "coding":
        component = CodingEN;
        break;
      case "gaming":
        component = GamingEN;
        break;
      case "designing":
        component = DesigningEN;
        break;
      case "machine_learning":
        component = MachineLearningEN;
        break;
      default:
        component = CodingEN;
        break;
    }
  }

  if (lang === "FR") {
    switch (fileCat) {
      case "coding":
        component = CodingFR;
        break;
      case "gaming":
        component = GamingFR;
        break;
      case "designing":
        component = DesigningFR;
        break;
      case "machine_learning":
        component = MachineLearningFR;
        break;
      default:
        component = CodingFR;
        break;
    }
  }

  return component;
};

export default function useQuizResult(
  answers: Answer[] | undefined,
  cat: string,
) {
  const profile = getProfile(answers);
  const lang = i18n.language;
  const type = matchTypeWithResult(profile);

  const file = getFileResult(lang.toUpperCase(), cat);

  return {
    file: file,
    profile: getProfile(answers),
    type: type,
  };
}
