import { useState } from 'react'
import { Grid } from '@mui/material'
import { ContactForm } from './ContactForm'
import QuestionCard from './cards/QuestionCard'

interface survey {
    id?: any;
    survey?: any;
}

const Home = ({ survey, id }: survey) => {
    const [slideToShow, setSlideToShow] = useState(1);
    return (
        <Grid container
            sx={{
                height: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {survey &&
                survey.questions.length < slideToShow ? (
                <ContactForm
                    id={id}
                    slideToShow={slideToShow}
                    setSlideToShow={setSlideToShow} />
            ) : (survey?.questions &&
                survey?.questions.map((elem: any, index: any) => {
                    const { question, description, type, answers }: any = elem;
                    return (
                        <QuestionCard
                            id={index + 1}
                            key={question}
                            text={description}
                            type={type}
                            title={question}
                            answers={answers}
                            slideToShow={slideToShow}
                            setSlideToShow={setSlideToShow}
                            count={survey?.questions.length}
                        />
                    )
                })
            )
            }
        </Grid>
    )
}

export default Home