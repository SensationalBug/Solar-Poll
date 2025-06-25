import React from 'react'
import { Grid, TextField } from '@mui/material'
import { CustomSelector } from '../custom-components/CustomSelector'
import { CustomCuantitySelector } from '../custom-components/CustomCuantitySelector';
import { SurveysContext } from '../../context/SurveysContext';

export const NewQuestionCard = ({ index, setDisableButton }: any) => {
    const { update, updateAnswer }: any = React.useContext(SurveysContext)
    const [questionType, setQuestionType] = React.useState('');
    const [answerCuantity, setAnswerCuantity] = React.useState(0);
    const addNewAnswer = () => {
        return new Promise(resolve => {
            setAnswerCuantity(0)
            resolve('ok')
        })
    }
    return (
        <Grid item container xs={10}
            sx={{
                margin: 2,
                padding: 1,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #808080',
            }}>
            <Grid item sx={{ width: '95%', margin: '5px 0' }}>
                <TextField onChange={(elem: any) => update(index, 'question', elem.target.value)} fullWidth label="Inserte una pregunta" variant="standard" />
            </Grid>
            <Grid item sx={{ width: '95%', margin: '5px 0' }}>
                <TextField onChange={(elem: any) => update(index, 'description', elem.target.value)} fullWidth label="Inserte una descripcion" variant="standard" />
            </Grid>
            <Grid item sx={{ width: '95%', margin: '5px 0', display: { xs: 'unset', md: 'flex' }, justifyContent: 'space-between' }}>
                <CustomSelector
                    index={index}
                    update={update}
                    get={questionType}
                    set={setQuestionType}
                    setDisableButton={setDisableButton}
                    setAnswerCuantity={setAnswerCuantity}
                />
                <CustomCuantitySelector
                    index={index}
                    update={update}
                    set={addNewAnswer}
                    get={answerCuantity}
                    questionType={questionType}
                    setAnswerCuantity={setAnswerCuantity}
                />
            </Grid>
            <Grid item sx={{ width: '95%', margin: '5px 0' }}>
                {answerCuantity ? (
                    [...Array(answerCuantity)].map((_, answerIndex) => (
                        <TextField key={answerIndex} onChange={(elem: any) => updateAnswer(index, answerIndex, elem.target.value)} fullWidth label="Inserte una respuesta" variant="standard" />
                    ))
                ) : (
                    null
                )}
            </Grid>
        </Grid>
    )
}
