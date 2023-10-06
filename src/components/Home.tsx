import { Grid } from '@mui/material'
import { useContext, useState } from 'react'
import QuestionCard from './QuestionCard'
import { QuestionContext } from '../context/QuestionsContext'
import { ContactForm } from './ContactForm'

const Home = () => {
    const [slideToShow, setSlideToShow] = useState(1);
    const { questions }: any = useContext(QuestionContext)
    return (
        <Grid container
            sx={{
                height: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {questions.length < slideToShow ? (
                <ContactForm
                    slideToShow={slideToShow}
                    setSlideToShow={setSlideToShow} />
            ) : (
                questions.map((elem: any) => {
                    const { id, title, text, type, answers }: any = elem;
                    return (
                        <QuestionCard
                            key={id}
                            id={id}
                            text={text}
                            type={type}
                            title={title}
                            answers={answers}
                            count={questions.length}
                            slideToShow={slideToShow}
                            setSlideToShow={setSlideToShow}
                        />
                    )
                })
            )}
        </Grid>
    )
}

export default Home