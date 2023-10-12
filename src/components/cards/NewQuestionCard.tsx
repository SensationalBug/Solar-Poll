import React from 'react'
import { Grid, TextField } from '@mui/material'
import { CustomSelector } from '../custom-components/CustomSelector'
import { CustomCuantitySelector } from '../custom-components/CustomCuantitySelector';

export const NewQuestionCard = ({ index, update, updateAnswer }: any) => {
    const [questionType, setQuestionType] = React.useState('');
    const [answerCuantity, setAnswerCuantity] = React.useState('');
    return (
        <Grid key={index} container xs={10}
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
                <TextField onChange={(elem: any) => update('text', elem.target.value)} fullWidth label="Inserte un texto" variant="standard" />
            </Grid>
            <Grid item sx={{ width: '95%', margin: '5px 0', display: { xs: 'unset', md: 'flex' }, justifyContent: 'space-between' }}>
                <CustomSelector update={update} get={questionType} set={setQuestionType} />
                <CustomCuantitySelector update={update} get={answerCuantity} set={setAnswerCuantity} />
            </Grid>
            <Grid item sx={{ width: '95%', margin: '5px 0' }}>
                {answerCuantity ? (
                    [...Array(answerCuantity)].map((_, index) => (
                        <TextField onChange={(elem: any) => updateAnswer(index + 1, elem.target.value)} fullWidth label="Inserte una respuesta" variant="standard" />
                    ))
                ) : (
                    null
                )}
            </Grid>
        </Grid>
    )
}
