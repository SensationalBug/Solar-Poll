import { questionCardStyles } from '../styles/questionCardStyles';
import { Card, CardContent, CardActions, Typography, Grid } from '@mui/material'
import CustomButton from './CustomButton';

interface questionCardInterface {
    title: string;
    text: string;
    question: any;
    handleNext?: any;
    handlePrevious?: any;
    questionProps?: any;
    count: number;
    current: number;
}
const QuestionCard = ({
    title,
    text,
    question,
    handleNext,
    handlePrevious,
    count,
    current,
    ...questionProps
}: questionCardInterface) => {
    return (
        <Grid container sx={questionCardStyles.container}>
            <Card sx={questionCardStyles.card}>
                <CardContent sx={questionCardStyles.cardContent}>
                    <Grid container sx={questionCardStyles.textContainer}>
                        <Grid container sx={questionCardStyles.textContent}>
                            <Typography sx={questionCardStyles.title}>{title}</Typography>
                        </Grid>
                        <Grid container sx={questionCardStyles.textContent}>
                            <Typography sx={questionCardStyles.text}>{text}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={questionCardStyles.questionContent}>
                        {question(questionProps)}
                    </Grid>
                </CardContent>
                <CardActions sx={questionCardStyles.cardFooter}>
                    <CustomButton
                        text={'Previous'}
                        onClick={handlePrevious}
                        disabled={current > 1 ? false : true}
                    />
                    <Typography sx={{ letterSpacing: 2, userSelect: 'none', }}>{current}/{count}</Typography>
                    <CustomButton
                        text={'Next'}
                        outline={false}
                        bgColor={'#0A70B1'}
                        onClick={handleNext}
                        disabled={current === count ? true : false}
                    />
                </CardActions>
            </Card>
        </Grid>
    )
}

export default QuestionCard;
