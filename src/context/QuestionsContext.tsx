import { createContext, useState } from "react";
import { fa1, fa2, fa3, fa4, fa5, fa6 } from '@fortawesome/free-solid-svg-icons'
import { firebaseApp } from "../firebaseConfig/FirebaseConfig";
import { getDatabase, ref, set } from 'firebase/database'

export const QuestionContext = createContext({});

interface props {
    children: JSX.Element;
}

const QuestionProvider = ({ children }: props) => {
    const database = getDatabase(firebaseApp)
    const [fAnswers, setAnswers] = useState({
        name: ''
    })

    const updateAnswer = (field: string, value: string) => {
        setAnswers((prev: any) => ({ ...prev, [field]: value }))
    }

    const sendAnswers = () => {
        set(ref(database, `answers/${fAnswers?.name}`), {
            fAnswers
        })
        console.log(fAnswers)
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
        },
        {
            id: 5,
            type: 2,
            title: 'Otra pregunta',
            text: 'Estimate your monthly electric bill',
            answers: [
                { title: 'Opcion 5', img: '' },
                { title: 'Opcion 6', img: '' },
                { title: 'Opcion 7', img: '' },
                { title: 'Opcion 8', img: '' }],
        },
    ];

    return (
        <QuestionContext.Provider value={{
            questions,
            updateAnswer,
            fAnswers,
            sendAnswers
        }}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionProvider;