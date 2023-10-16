import { firebaseApp } from "../firebaseConfig/FirebaseConfig";
import { getDatabase, ref, set, onValue } from 'firebase/database'
import { createContext, useEffect, useState, useCallback } from "react";

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

    return (
        <QuestionContext.Provider value={{
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