import Swal from "sweetalert2";
import { firebaseApp } from "../firebaseConfig/FirebaseConfig";
import { createContext, useEffect, useState, useCallback } from "react";
import { getDatabase, ref, set, onValue, get, child, remove } from 'firebase/database'

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
        Swal.fire('Gracias', 'Su respuesta ha sido enviada', 'success').then(() => window.location.reload())
    }

    const update = (set: any, field: string, value: string) => {
        set((prev: any) => ({ ...prev, [field]: value }))
    }

    const sendAnswers = () => {
        if (!uData.name || !uData.email || !uData.phoneNumber) {
            Swal.fire('Recordatorio', 'Completa todos los campos', 'warning')
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

    const getAnswersByID = (id: number) => {
        return new Promise(resolve => {
            const dataRef = ref(database, `answers/`)
            onValue(dataRef, (snapshot) => {
                const selectedAnswers: any = []
                snapshot.val() ? (
                    Object.entries(snapshot.val()).map((elem: any, index) => (
                        elem[1].data.surveyId === id ?
                            selectedAnswers.push(elem[1]) : []
                    ))
                ) : setUanswers([])
                resolve(selectedAnswers)
            })
        })
    }

    const getAnswersToDelete = useCallback(() => {
        return new Promise(resolve => {
            const dataRef = ref(database, 'answers/')
            onValue(dataRef, (snapshot) => {
                const data = snapshot.val();
                data ? resolve(data) : resolve([])
            })
        })
    }, [database])

    const moveAnswer = (name: string) => {
        Swal.fire({
            title: 'Advertencia',
            icon: 'warning',
            html: 'Estas seguro que deseas eliminar esta respuesta?',
            showCancelButton: true,
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        })
            .then((res: any) => {
                if (res.isConfirmed) {
                    getAnswersToDelete().then((res: any) => {
                        // eslint-disable-next-line array-callback-return
                        Object.entries(res).map((elem: any, index: any) => {
                            if (elem[1].data.name === name) {
                                remove(ref(database, `answers/${elem[0]}`)).then(() => {
                                    Swal.fire('Poof!',
                                        'La respuesta ha sido eliminada.',
                                        'success');
                                }).catch((err) => console.log(err))
                            }
                        })
                    })
                }
            });
    }

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
            getAnswersByID,
            setUanswers,
            moveAnswer
        }}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionProvider;