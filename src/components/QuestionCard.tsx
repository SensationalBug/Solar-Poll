import CustomButton from './CustomButton';
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
    return (
        <Grid item xs={12} lg={10} xl={6} sx={[questionCardStyles.container, { display: slideToShow === id ? 'flex' : 'none' }]}>
            <Card sx={[questionCardStyles.card, { minHeight: '70vh', borderRadius: { xs: 0, md: 4 }, }]}>
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
                        onClick={() => setSlideToShow(slideToShow - 1)}
                        disabled={slideToShow > 1 ? false : true}
                    />
                    <Typography sx={{ letterSpacing: 2, userSelect: 'none', }}>{slideToShow}/{count}</Typography>
                    <CustomButton
                        text={'Next'}
                        outline={false}
                        bgColor={'#0A70B1'}
                        onClick={() => setSlideToShow(slideToShow + 1)}
                        disabled={slideToShow === count ? true : false}
                    />
                </CardActions>
            </Card>
        </Grid>
    )
}

export default QuestionCard;



