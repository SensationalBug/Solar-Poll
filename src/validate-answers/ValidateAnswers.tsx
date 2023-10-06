import { useContext } from 'react'
import CheckInput from '../components/CheckInput';
import QtOptionButton from '../components/QtOptionButton';
import { QuestionContext } from '../context/QuestionsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { QtFormTextInput } from '../components/QtFormTextInput';
import QtRadioFormControl from '../components/QtRadioFormControl';

interface validateAnswersInterface {
    id: number;
    type: number;
    answers: string[];
}
const ValidateAnswers = ({ id, answers, type }: validateAnswersInterface) => {
    const { update, setAnswers }: any = useContext(QuestionContext);
    const showAnswers = () => {
        if (type === 1) {
            return answers.map((elem: any, index: number) => (
                <QtOptionButton
                    id={id}
                    key={index}
                    title={elem.title}
                    onClick={() => update(setAnswers, id, elem.title)}
                    icon={<FontAwesomeIcon icon={elem.img} size='4x' />} />
            ))
        }
        if (type === 2) {
            return (
                <CheckInput radioFormControl={
                    <>
                        {answers.map((elem: any, index: number) => (
                            <QtRadioFormControl key={index} id={id} title={elem.title} />
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