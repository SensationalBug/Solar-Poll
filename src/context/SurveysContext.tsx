import swal from 'sweetalert';
import { v4 as uuid } from 'uuid';
import { firebaseApp } from "../firebaseConfig/FirebaseConfig";
import { createContext, useCallback, useEffect, useState } from 'react';
import { getDatabase, ref, set, onValue, remove } from 'firebase/database'

export const SurveysContext = createContext({});

interface surveysContextInterface {
    children: JSX.Element;
}

interface newSurvey {
    type?: any;
    answers?: any;
    question?: any;
    description?: any;
}

const SurveysProvider = ({ children }: surveysContextInterface) => {
    const date = new Date();
    const database = getDatabase(firebaseApp)
    const [newSurveyTitle, setNewSurveyTitle] = useState({
        title: '',
        date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}.${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    })
    const [surveys, setSurveys] = useState([]);
    const [newSurvey, setNewSurvey] = useState<newSurvey>({
    });

    const updateTitle = (field: any, value: any) => {
        setNewSurveyTitle((prevState: any) => ({ ...prevState, [field]: value }))
    }
    const update = (id: any, field: any, value: any) => {
        setNewSurvey((prevState: any) => ({ ...prevState, [id]: { ...prevState[id], [field]: value } }))
    }
    const updateAnswer = (id: any, field: any, value: any) => {
        setNewSurvey((prevState: any) => ({ ...prevState, [id]: { ...prevState[id], 'answers': { ...prevState[id].answers, [field]: value } } }));
    }

    const deleteSurvey = (id: string) => {
        swal({
            title: "Seguro que quieres eliminar esta encuesta?",
            text: "Una vez que clickees SI, la encuesta se eliminará",
            icon: "warning",
            buttons: ['No', 'Si'],
            dangerMode: true,
        })
            .then((res) => {
                if (res) {
                    remove(ref(database, `surveys/${id}`)).then(() => {
                        swal("Poof! La encuesta ha sido eliminada!", {
                            icon: "success",
                        });
                    }).catch((err) => console.log(err))
                }
            });
    }

    const sendNewSurvey = () => {
        return new Promise((resolve) => {
            set(ref(database, `surveys/${uuid()}`), {
                'data': newSurveyTitle,
                'questions': newSurvey
            }).then(() => setNewSurvey({}))
            resolve('ok')
        })
    }

    const getSurveys = useCallback(() => {
        onValue(ref(database, 'surveys/'), (snapshot) => {
            const data = snapshot.val();
            data ? setSurveys(data) : setSurveys([])
        })
    }, [database])

    const getSurveyByID = (id: string) => {
        return new Promise((resolve, reject) => {
            onValue(ref(database, `surveys/${id}`), (snapshot) => {
                const data = snapshot.val();
                resolve(data);
            }, (error) => reject(error));
        });
    };

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
            newSurveyTitle,
            deleteSurvey,
            getSurveyByID,
        }}>
            {children}
        </SurveysContext.Provider>
    )
}

export default SurveysProvider;