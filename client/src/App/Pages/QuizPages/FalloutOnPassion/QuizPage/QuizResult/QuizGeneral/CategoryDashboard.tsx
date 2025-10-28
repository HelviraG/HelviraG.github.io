import { useListResultQuery } from "@/Redux/Services/QuizApi";
import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';
import { Box, CardMedia, useMediaQuery } from "@mui/material"
import { DefaultizedPieValueType } from "@mui/x-charts";
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

export const CategoryDashboard = ({ cat }: { cat: string }) => {
    const { t } = useTranslation('translation');
    const { data } = useListResultQuery({ category: cat });
    const isMobile = useMediaQuery("(max-width: 500px)")
    
    if (!data?.percentages) return <EmptyBoxWrapper></EmptyBoxWrapper>;

    const categories: { key: 'citizen' | 'paladin' | 'superMutant', label: string, labelMarkType: 'square' }[] = [
        { key: 'citizen', label: t('app.explore.fallout_on_passion.quiz.result.types.citizen'), labelMarkType: 'square' },
        { key: 'paladin', label: t('app.explore.fallout_on_passion.quiz.result.types.paladin'), labelMarkType: 'square' },
        { key: 'superMutant', label: t('app.explore.fallout_on_passion.quiz.result.types.superMutant'), labelMarkType: 'square' },
    ];

    const dataToChart = categories
        .map(({ key, label, labelMarkType }) => ({
            value: parseInt(data.percentages[key], 10),
            label,
            labelMarkType,
        }))
        .filter(item => item.value !== 0);

    const getArcLabel = (params: DefaultizedPieValueType) => {
        const percent = params.value;

        return `${(percent).toFixed(0)}%`;
    };

    return (
        <Box sx={(theme) => ({ 
            display: 'flex', 
            position: 'relative', 
           
            [theme.breakpoints.down(585)]: {
                height: '600px', 
            }
        })}>
            <Box 
                sx={(theme) => ({ 
                    display: 'flex', 
                    flex: 1
                })}
            >
                <CardMedia component="img" image="https://i.ibb.co/zhzjcGG7/thumb-1920-830262.jpg" />
            </Box>
            <DashboardContentInner>
                <Box>
                    <DashboardContentInnerPill>
                        <DashboardContentInnerPillTypo>team {cat}</DashboardContentInnerPillTypo>
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
                                    fontSize: 14,
                                },
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
    )
}