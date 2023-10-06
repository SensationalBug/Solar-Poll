import { useContext } from 'react';
import { keyframes } from '@mui/system';
import CustomButton from './CustomButton';
import { QuestionContext } from '../context/QuestionsContext';
import { questionCardStyles } from '../styles/questionCardStyles';
import ValidateAnswers from '../validate-answers/ValidateAnswers';
import { Card, CardContent, CardActions, Typography, Grid } from '@mui/material'
interface questionCardInterface {
    id: number;
    text: string;
    type: number;
    title: string;
    count: number;
    answers: any;
    slideToShow: number;
    setSlideToShow: any;
}
const QuestionCard = ({
    id,
    text,
    type,
    title,
    count,
    answers,
    slideToShow,
    setSlideToShow,
}: questionCardInterface) => {
    const { fAnswers }: any = useContext(QuestionContext)
    const toLeftSlide = keyframes`
    from {
        opacity: 0;
        // left: 200px;
      }
      to {
        opacity: 1;
        // left: 0px;
      }
  `;
    return (
        <Grid item xs={12} lg={10} xl={6} sx={[questionCardStyles.container, { display: slideToShow === id ? 'flex' : 'none' }]}>
            <Card sx={[questionCardStyles.card, {
                minHeight: '70vh',
                position: 'relative',
                borderRadius: { xs: 0, md: 4 },
                animation: `${toLeftSlide} .5s 1 ease-out`,
            }]}>
                <CardContent sx={questionCardStyles.cardContent}>
                    <Grid container>
                        <Grid container sx={questionCardStyles.textContent}>
                            <Typography sx={questionCardStyles.title}>{title}</Typography>
                        </Grid>
                        <Grid container sx={questionCardStyles.textContent}>
                            <Typography sx={questionCardStyles.text}>{text}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={questionCardStyles.questionContent}>
                        <ValidateAnswers id={id} answers={answers} type={type} />
                    </Grid>
                </CardContent>
                <CardActions sx={questionCardStyles.cardFooter}>
                    <CustomButton
                        text={'Previous'}
                        disabled={slideToShow > 1 ? false : true}
                        onClick={() => setSlideToShow(slideToShow - 1)}
                    />
                    <Typography sx={{ letterSpacing: 2, userSelect: 'none', }}>{slideToShow}/{count}</Typography>
                    <CustomButton
                        text='Next'
                        outline={false}
                        bgColor='#0A70B1'
                        disabled={fAnswers[id] ? false : true}
                        onClick={() => setSlideToShow(slideToShow + 1)}
                    />
                </CardActions>
            </Card>
        </Grid >
    )
}

export default QuestionCard;



