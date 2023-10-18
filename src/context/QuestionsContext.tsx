import swal from "sweetalert";
import { firebaseApp } from "../firebaseConfig/FirebaseConfig";
import { createContext, useEffect, useState, useCallback } from "react";
import { getDatabase, ref, set, onValue, get, child } from 'firebase/database'

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
        surveyId: '',
        phoneNumber: '',
        date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}.${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    })

    const resetData = () => {
        setUdata({
            name: '',
            email: '',
            surveyId: '',
            phoneNumber: '',
            date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
        })
        setAnswers({})
        swal('Gracias', 'Su respuesta ha sido enviada', 'success').then(() => window.location.reload())
    }

    const update = (set: any, field: string, value: string) => {
        set((prev: any) => ({ ...prev, [field]: value }))
    }

    const sendAnswers = () => {
        if (!uData.name || !uData.email || !uData.phoneNumber) {
            swal('Recordatorio', 'Completa todos los campos', 'warning')
            return;
        }
        get(child(ref(getDatabase()), `answers/`)).then((snapshot) => {
            if (snapshot.exists()) {
                const values = []
                for (let val in Object.entries(snapshot.val())) {
                    values.push(parseInt(Object.entries(snapshot.val())[val][0]))
                }
                set(ref(database, `answers/${Math.max(...values) + 1}`), {
                    'data': uData,
                    'respuestas': fAnswers,
                }).then(() => resetData())
            } else {
                set(ref(database, `answers/1`), {
                    'data': uData,
                    'respuestas': fAnswers,
                }).then(() => resetData())
            }
        }).catch((error) => {
            console.error(error);
        })
    }

    const getAnswers = useCallback(() => {
        const dataRef = ref(database, 'answers/')
        onValue(dataRef, (snapshot) => {
            const data = snapshot.val();
            data ? setUanswers(data) : setUanswers([])
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