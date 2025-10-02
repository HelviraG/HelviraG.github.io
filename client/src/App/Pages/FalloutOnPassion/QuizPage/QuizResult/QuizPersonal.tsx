import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import BadgeIcon from "@mui/icons-material/Badge";
import BalanceIcon from "@mui/icons-material/Balance";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { Box, Tab, Typography, useMediaQuery } from "@mui/material";
import {
  QuiPersonalContentWrapper,
  QuizPersonalContentBody,
  QuizPersonalContentFooter,
  QuizPersonalContentHeader,
  QuizPersonalContentTabs,
  QuizPersonalHeader,
  QuizPersonalHeaderWrapper,
  QuizPersonalImgBox,
  QuizPersonalWrapperBox,
  TabPanelProps,
  TabPanelWrapper,
} from "@pages/FalloutOnPassion/QuizPage/QuizResult/QuizPersonalStyle";
import { listAllAnswers, listAnswers, showField } from "@slices/QuizSlice";
import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import useQuizResult from "../../Hooks/useQuizResult";
import { useStoreResultMutation } from "@/Redux/Services/QuizApi";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style={{
        display: "flex",
        alignItems: "center",
      }}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function stripQuotes(str: string) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

export const QuizPersonal = ({ cat }: { cat: string }) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const dispatch = useDispatch();
  const answers = useSelector(listAllAnswers);
  const { file, type } = useQuizResult(answers, cat);
  const subTitle = file ? file.result.subTitle : "";

  const category = useSelector(showField);

  const [value, setValue] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const result = (type: string) => {
    let resultContent;

    if (file) {
      switch (type) {
        case "citizen":
          resultContent = file.result.citizen;
          break;
        case "superMutant":
          resultContent = file.result.superMutant;
          break;
        case "paladin":
          resultContent = file.result.paladin;
          break;
        default:
          break;
      }
    }

    return resultContent;
  };

  const [storeResult, { isError, error, isLoading }] = useStoreResultMutation();
    
  const handleSubmit = async () => {
    if (submitted || !category) return; // 👈 double guard
    if (answers.length < 17) return;

    try {
      await storeResult({ category, type }).unwrap();
      setSubmitted(true);
    } catch (error) {
      console.error("Error storing result:", error);
    }
  };

  useEffect(() => {
    dispatch(listAnswers());
  }, [dispatch]);

  useEffect(() => {
    if (!submitted && category && type) {
      handleSubmit();
    }
  }, [category, type, submitted]);

  if (!file || !type || !result(type) || !result || !answers || !subTitle)
    return null;

  return (
    <QuizPersonalWrapperBox>
      <QuizPersonalHeaderWrapper>
        <QuizPersonalImgBox
          imgUrl={t(`app.explore.fallout_on_passion.quiz.result.img.${type}`)}
        ></QuizPersonalImgBox>
        <QuizPersonalHeader>
          <Typography variant={"h5"} align={"right"}>
            {typeof result(type) === "object" && result(type) !== null ? (result(type) as any).title : ""}
          </Typography>
        </QuizPersonalHeader>
      </QuizPersonalHeaderWrapper>
      
      <QuiPersonalContentWrapper>
        <QuizPersonalContentBody>
          <QuizPersonalContentHeader>
            <Typography variant={"subtitle1"}>
              <Trans
                i18nKey={
                  typeof result(type) === "object" && result(type) !== null
                    ? (result(type) as { text: string }).text
                    : ""
                }
                components={{
                  bold: (
                    <Typography
                      component={"span"}
                      sx={{ fontWeight: 900, color: "#341F97" }}
                    />
                  ),
                }}
              />
            </Typography>
          </QuizPersonalContentHeader>
          <Box>
            <Box>
              <QuizPersonalContentTabs
                orientation={isMobile ? "horizontal" : "horizontal"}
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                centered={isMobile}
                variant="scrollable"
                isMobile={isMobile}
                tabValue={value}
              >
                <Tab icon={<BadgeIcon />} {...a11yProps(0)} />
                <Tab label={<BalanceIcon />} {...a11yProps(1)} />
                <Tab label={<AppShortcutIcon />} {...a11yProps(2)} />
                <Tab label={<InsertEmoticonIcon />} {...a11yProps(3)} />
                <Tab label={<TravelExploreIcon />} {...a11yProps(4)} />
              </QuizPersonalContentTabs>
            </Box>
            <TabPanelWrapper>
              <TabPanel value={value} index={0}>
                <Typography variant="h6" align={"right"} sx={{ marginBottom: 2 }}>
                  {t(
                    `app.explore.fallout_on_passion.quiz.result.label.${stripQuotes(cat)}.approach`,
                  )}
                </Typography>
                <Trans
                  i18nKey={
                    typeof result(type) === "object" && result(type) !== null
                      ? (result(type) as { approach: string }).approach
                      : ""
                  }
                  components={{
                    bold: (
                      <Typography
                        component={"span"}
                        sx={{ fontWeight: 900, color: "#5352ed" }}
                      />
                    ),
                  }}
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography variant="h6" align={"right"} sx={{ marginBottom: 2 }}>
                  {t(
                    `app.explore.fallout_on_passion.quiz.result.label.${stripQuotes(cat)}.work_life`,
                  )}
                </Typography>
                <Trans
                  i18nKey={
                    typeof result(type) === "object" && result(type) !== null
                      ? (result(type) as { work_life: string }).work_life
                      : ""
                  }
                  components={{
                    bold: (
                      <Typography
                        component={"span"}
                        sx={{ fontWeight: 900, color: "#FC427B" }}
                      />
                    ),
                  }}
                />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Typography variant="h6" align={"right"} sx={{ marginBottom: 2 }}>
                  {t(
                    `app.explore.fallout_on_passion.quiz.result.label.${stripQuotes(cat)}.favorite_tools`,
                  )}
                </Typography>
                <Trans
                  i18nKey={
                    typeof result(type) === "object" && result(type) !== null
                      ? (result(type) as { favorite_tools: string }).favorite_tools
                      : ""
                  }
                  components={{
                    bold: (
                      <Typography
                        component={"span"}
                        sx={{ fontWeight: 900, color: "#5f27CD" }}
                      />
                    ),
                  }}
                />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Typography variant="h6" align={"right"} sx={{ marginBottom: 2 }}>
                  {t(
                    `app.explore.fallout_on_passion.quiz.result.label.${stripQuotes(cat)}.key_traits`,
                  )}
                </Typography>
                <Trans
                  i18nKey={
                    typeof result(type) === "object" && result(type) !== null
                      ? (result(type) as { key_traits: string }).key_traits
                      : ""
                  }
                  components={{
                    bold: (
                      <Typography
                        component={"span"}
                        sx={{ fontWeight: 900, color: "#be2edd" }}
                      />
                    ),
                  }}
                />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Typography variant="h6" align={"right"} sx={{ marginBottom: 2 }}>
                  {t(
                    `app.explore.fallout_on_passion.quiz.result.label.${stripQuotes(cat)}.social_style`,
                  )}
                </Typography>
                <Trans
                  i18nKey={
                    typeof result(type) === "object" && result(type) !== null
                      ? (result(type) as { social_style: string }).social_style
                      : ""
                  }
                  components={{
                    bold: (
                      <Typography
                        component={"span"}
                        sx={{ fontWeight: 900, color: "#0652DD" }}
                      />
                    ),
                  }}
                />
              </TabPanel>
            </TabPanelWrapper>
          </Box>
        </QuizPersonalContentBody>
        <QuizPersonalContentFooter>
          <Typography variant="caption" textAlign="center" fontStyle="italic">
            {t(subTitle)}
          </Typography>
        </QuizPersonalContentFooter>
      </QuiPersonalContentWrapper>
    </QuizPersonalWrapperBox>
  );
};
