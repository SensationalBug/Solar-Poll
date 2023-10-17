import { useContext } from 'react'
import CheckInput from '../components/CheckInput';
import { QuestionContext } from '../context/QuestionsContext';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import QtOptionButton from '../components/questions-types/QtOptionButton';
import { QtFormTextInput } from '../components/questions-types/QtFormTextInput';
import QtRadioFormControl from '../components/questions-types/QtRadioFormControl';
interface validateAnswersInterface {
    id: number;
    type: number;
    answers: string[];
}
const ValidateAnswers = ({ id, answers, type }: validateAnswersInterface) => {
    const { update, setAnswers }: any = useContext(QuestionContext);
    const showAnswers = () => {
        if (type === 1) {
            return answers.map((elem: any, index: number) => {
                return (
                    <QtOptionButton
                        id={id}
                        key={index}
                        title={elem}
                        onClick={() => update(setAnswers, id, elem)}
                        icon={<QuestionMarkIcon sx={{ fontSize: { xs: '4em', md: '5em', lg: '6em' } }} />} />
                )
            })
        }
        if (type === 2) {
            return (
                <CheckInput radioFormControl={
                    <>
                        {answers.map((elem: any, index: number) => (
                            <QtRadioFormControl key={index} id={id} title={elem} />
                        ))}
                    </>
                } />
            )

        }
        if (type === 3) {
            return <QtFormTextInput id={id} />
        }
    }
    return (
        <>
            {showAnswers()}
        </>
    )
}

export default ValidateAnswers;