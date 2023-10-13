import { createContext, useCallback, useEffect, useState } from 'react';
import { firebaseApp } from "../firebaseConfig/FirebaseConfig";
import { getDatabase, ref, set, onValue, orderByChild } from 'firebase/database'
import { v4 as uuid } from 'uuid';

export const SurveysContext = createContext({});

interface surveysContextInterface {
    children: JSX.Element;
}

interface newSurvey {
    title?: any;
}

const SurveysProvider = ({ children }: surveysContextInterface) => {
    const date = new Date();
    const database = getDatabase(firebaseApp)
    const [newSurveyTitle, setNewSurveyTitle] = useState({
        title: '',
        date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    })
    const [newSurvey, setNewSurvey] = useState<newSurvey>({});
    const [surveys, setSurveys] = useState([]);

    const updateTitle = (field: any, value: any) => {
        setNewSurveyTitle((prevState: any) => ({ ...prevState, [field]: value }))
    }
    const update = (id: any, field: any, value: any) => {
        setNewSurvey((prevState: any) => ({ ...prevState, [id]: { ...prevState[id], [field]: value } }))
    }
    const updateAnswer = (id: any, field: any, value: any) => {
        setNewSurvey((prevState: any) => ({ ...prevState, [id]: { ...prevState[id], 'answers': { ...prevState[id].answers, [field]: value } } }));
    }

    const sendNewSurvey = () => {
        set(ref(database, `surveys/${uuid()}`), {
            'data': newSurveyTitle,
            'questions': newSurvey
        }).then(() => setNewSurvey({}))
    }

    const getSurveys = useCallback(() => {
        const dataRef = ref(database, 'surveys/')
        onValue(dataRef, (snapshot) => {
            const data = snapshot.val();
            data ? setSurveys(data) : setSurveys([])
        })
    }, [database])

    useEffect(() => {
        getSurveys()
    }, [getSurveys])

    return (
        <SurveysContext.Provider value={{
            updateTitle,
            update,
            updateAnswer,
            newSurvey,
            setNewSurvey,
            sendNewSurvey,
            surveys,
            newSurveyTitle
        }}>
            {children}
        </SurveysContext.Provider>
    )
}

export default SurveysProvider;