import { useContext } from 'react'
import { Grid } from '@mui/material'
import QuestionCard from '../components/QuestionCard'
import { QuestionContext } from '../context/QuestionsContext'

const Home = () => {
    const { currentQuestion, questions, handleNext, handlePrevious, }: any = useContext(QuestionContext)
    return (
        <Grid container>
            <QuestionCard
                title={questions[currentQuestion].title}
                text={questions[currentQuestion].text}
                question={questions[currentQuestion].question}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                current={currentQuestion + 1}
                count={questions.length}
            />
        </Grid>
    )
}

export default Home