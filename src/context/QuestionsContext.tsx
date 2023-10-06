import { firebaseApp } from "../firebaseConfig/FirebaseConfig";
import { getDatabase, ref, set, onValue } from 'firebase/database'
import { createContext, useEffect, useState, useCallback } from "react";
import { fa1, fa2, fa3, fa4, fa5, fa6 } from '@fortawesome/free-solid-svg-icons'

export const QuestionContext = createContext({});

interface props {
    children: JSX.Element;
}

const QuestionProvider = ({ children }: props) => {
    const date = new Date()
    const database = getDatabase(firebaseApp)
    const [uAnswers, setUanswers] = useState([])
    const [fAnswers, setAnswers] = useState({})
    const [uData, setUdata] = useState({
        name: '',
        email: '',
        date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
    })

    const update = (set: any, field: string, value: string) => {
        set((prev: any) => ({ ...prev, [field]: value }))
    }

    const sendAnswers = () => {
        set(ref(database, `answers/${uData?.name}`), {
            'respuestas': fAnswers,
            'data': uData,
        })
    }

    const getAnswers = useCallback(() => {
        const dataRef = ref(database, 'answers/')
        onValue(dataRef, (snapshot) => {
            const data = snapshot.val();
            setUanswers(data);
        })
    }, [database])

    useEffect(() => {
        getAnswers()
    }, [getAnswers])

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
            fAnswers,
            sendAnswers,
            getAnswers,
            uAnswers,
            update,
            setUdata,
            setAnswers,
        }}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionProvider;