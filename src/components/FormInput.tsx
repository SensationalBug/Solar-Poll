import { useContext } from 'react';
import { Grid, TextareaAutosize } from '@mui/material'
import { QuestionContext } from '../context/QuestionsContext';

interface formInputInterface {
    id?: number;
    label: string;
    setLength: any;
}

const FormInput = ({ id, label, setLength }: formInputInterface) => {
    const { update, setAnswers }: any = useContext(QuestionContext)

    const updateLength = (target: any) => {
        return new Promise(resolve => {
            setLength(target.value.length)
            resolve('ok');
        })
    }

    return (
        <Grid
            container
            sx={{
                display: 'flex',
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
            <TextareaAutosize
                maxLength={100}
                minRows={5}
                onChange={
                    ({ target }: any) =>
                        updateLength(target)
                            .then(() => update(setAnswers, id, target.value))}
                style={{ width: '90%', maxWidth: '90%', fontSize: '18px' }}
            />
        </Grid>
    )
}

export default FormInput