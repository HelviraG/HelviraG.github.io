import { useListResultQuery } from "@/Redux/Services/QuizApi";
import { Box, CardMedia, useMediaQuery } from "@mui/material";
import { DefaultizedPieValueType, pieArcLabelClasses, PieChart } from "@mui/x-charts";
import { 
    ChartBox,
    DashboardContentChartWrapper, 
    DashboardContentDivider, 
    DashboardContentInner, 
    DashboardContentInnerPill, 
    DashboardContentInnerPillTypo, 
    DashboardContentTypo,
    EmptyBoxWrapper
} from "./QuizGeneralStyle";
import { useTranslation } from "react-i18next";

export const GeneralDashboard = () => {
    const { t } = useTranslation();
    const { data } = useListResultQuery({});
    const isMobile = useMediaQuery("(max-width: 500px)")

    if (!data?.percentages) return <EmptyBoxWrapper></EmptyBoxWrapper>;

    const dataToChart = [
        { value: parseInt(data.percentages.citizen, 10), label: t('app.explore.fallout_on_passion.quiz.result.types.citizen'), labelMarkType: 'square' as const },
        { value: parseInt(data.percentages.paladin, 10), label: t('app.explore.fallout_on_passion.quiz.result.types.paladin'), labelMarkType: 'square' as const },
        { value: parseInt(data.percentages.superMutant, 10), label: t('app.explore.fallout_on_passion.quiz.result.types.superMutant'), labelMarkType: 'square' as const },
    ];

    const getArcLabel = (params: DefaultizedPieValueType) => {
        const percent = params.value;

        return `${(percent).toFixed(0)}%`;
    };

    return (
        <Box sx={(theme) => ({ 
            display: 'flex', 
            position: 'relative', 
           
            [theme.breakpoints.down(585)]: {
                height: '850px', 
            }
        })}>
            <Box 
                sx={(theme) => ({ 
                    display: 'flex', 
                    flex: 1, 
           
                    [theme.breakpoints.down(585)]: {
                        height: '850px', 
                    }
                })}
            >
                <CardMedia component="img" image="https://od.lk/s/MzRfMzc4MDEwODhf/thumb-1920-830262.jpg" sx={{ filter: 'saturate(1)' }} />
            </Box>
            <DashboardContentInner>
                <Box>
                    <DashboardContentInnerPill>
                        <DashboardContentInnerPillTypo>{t('app.explore.fallout_on_passion.quiz.result.chart.allCategory')}</DashboardContentInnerPillTypo>
                    </DashboardContentInnerPill>
                </Box>
                <Box sx={(theme) => ({ 
                    [theme.breakpoints.down(390)]: {
                        marginTop: '10px'
                    }
                 })}>
                    <DashboardContentTypo>{t('app.explore.fallout_on_passion.quiz.result.chart.subText')}</DashboardContentTypo>
                    <DashboardContentDivider />
                </Box>
                <DashboardContentChartWrapper>
                    <ChartBox>
                        <PieChart
                            series={[
                                {
                                    innerRadius: 30,
                                    outerRadius: 100,
                                    paddingAngle: 5,
                                    cornerRadius: 10,
                                    startAngle: -45,
                                    endAngle: 280,
                                    data: dataToChart,
                                    arcLabel: getArcLabel
                                },
                            ]}
                            sx={(theme) => ({
                                '& .MuiChartsLegend-root': {
                                    backgroundColor: theme.game.special.dark,
                                    borderRadius: theme.spacing(3),
                                    color: theme.palette.background.paper,
                                    padding: '10px 12px'
                                },

                                [`& .${pieArcLabelClasses.root}`]: {
                                    fill: 'white',
                                    fontSize: 14
                                }
                            })}
                            slotProps={{
                                noDataOverlay: { 
                                    message: t('app.explore.fallout_on_passion.quiz.result.chart.noData'),
                                    sx: {
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        fill: 'white'
                                    }
                                },
                                legend: {
                                    direction: isMobile ? 'horizontal' : 'vertical',
                                    position: { 
                                        vertical: isMobile ? 'bottom' : 'middle',
                                        horizontal: 'center'
                                    }
                                }
                            }}
                            height={250}
                        />
                    </ChartBox>
                </DashboardContentChartWrapper>
            </DashboardContentInner>
        </Box>
    );
}