import { createContext, useState } from 'react';

export const SurveysContext = createContext({});

interface surveysContextInterface {
    children: JSX.Element;
}

const SurveysProvider = ({ children }: surveysContextInterface) => {
    const [newSurvey, setNewSurvey] = useState({
        name: '',
    });
    const updateSurvey = (field: any, value: any) => {
        setNewSurvey((prevState) => ({ ...prevState, [field]: value }))
    }
    return (
        <SurveysContext.Provider value={{ updateSurvey, newSurvey }}>
            {children}
        </SurveysContext.Provider>
    )
}

export default SurveysProvider;