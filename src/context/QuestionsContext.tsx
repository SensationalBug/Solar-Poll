import { createContext, useState } from "react";
import { fa1, fa2, fa3, fa4, fa5, fa6 } from '@fortawesome/free-solid-svg-icons'

export const QuestionContext = createContext({});

interface props {
    children: JSX.Element;
}

const QuestionProvider = ({ children }: props) => {
    const [zipCode, setZipCode] = useState('');
    const [answers, setAnswers] = useState({
        1: '',
        2: '',
        3: '',
        4: '',
    })

    const updateAnswer = (field: string, value: string) => {
        setAnswers((prev: any) => ({ ...prev, [field]: value }))
    }

    // const updStateData = (
    //     setState: React.Dispatch<React.SetStateAction<any>>,
    //     value: any,
    //     fieldName: string,
    // ) => {
    //     setState((prevState: any) => ({
    //         ...prevState,
    //         [fieldName]: value,
    //     }));
    // };

    const logAnswers = () => {
        console.log(answers)
    }

    const questions = [
        {
            id: 1,
            type: 1,
            title: 'Discover your potential solar savings',
            text: 'And find available incentives and estimates in your area. First: Are you a homeowner?',
            answers: [{ title: 'Homeowner', img: fa1 }, { title: 'Renter', img: fa2 }],
        },
        {
            id: 2,
            type: 1,
            title: 'Please select your home type',
            text: 'This helps us to determine what type of solar system suits best for your roof.',
            answers: [
                { title: 'Single family', img: fa3 },
                { title: 'Townhome', img: fa4 },
                { title: 'Multi family', img: fa5 },
                { title: 'Mobile home', img: fa6 }],
        },
        {
            id: 3,
            type: 2,
            title: 'Estimate your monthly electric bill',
            text: 'Estimate your monthly electric bill',
            answers: [
                { title: 'Opcion 1', img: '' },
                { title: 'Opcion 2', img: '' },
                { title: 'Opcion 3', img: '' },
                { title: 'Opcion 4', img: '' }],
        },
        {
            id: 4,
            type: 3,
            title: 'What is your zip code?',
            text: 'What is your zip code?',
            answers: [''],
        }
    ];

    return (
        <QuestionContext.Provider value={{
            questions,
            zipCode,
            setZipCode,
            updateAnswer,
            answers,
            logAnswers
        }}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionProvider;