import { createContext, useCallback, useEffect, useState } from 'react';
import { firebaseApp } from "../firebaseConfig/FirebaseConfig";
import { getDatabase, ref, set, onValue } from 'firebase/database'

export const SurveysContext = createContext({});

interface surveysContextInterface {
    children: JSX.Element;
}

interface newSurvey {
    title?: any;
}

const SurveysProvider = ({ children }: surveysContextInterface) => {
    const database = getDatabase(firebaseApp)
    const [newSurvey, setNewSurvey] = useState<newSurvey>({});
    const [surveys, setSurveys] = useState([]);

    const updateTitle = (field: any, value: any) => {
        setNewSurvey((prevState: any) => ({ ...prevState, [field]: value }))
    }
    const update = (id: any, field: any, value: any) => {
        setNewSurvey((prevState: any) => ({ ...prevState, [id]: { ...prevState[id], [field]: value } }))
    }
    const updateAnswer = (id: any, field: any, value: any) => {
        setNewSurvey((prevState: any) => ({ ...prevState, [id]: { ...prevState[id], 'answers': { ...prevState[id].answers, [field]: value } } }));
    }

    const sendNewSurvey = () => {
        set(ref(database, `surveys/${newSurvey?.title}`), newSurvey)
    }

    const getSurveys = useCallback(() => {
        const dataRef = ref(database, 'surveys/')
        onValue(dataRef, (snapshot) => {
            const data = snapshot.val();
            setSurveys(data);
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
        }}>
            {children}
        </SurveysContext.Provider>
    )
}

export default SurveysProvider;