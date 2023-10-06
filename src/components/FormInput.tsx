import { useContext } from 'react';
import { Grid, TextField } from '@mui/material'
import { QuestionContext } from '../context/QuestionsContext';

interface formInputInterface {
    id?: number;
    label: string;
    setValue: any;
}

const FormInput = ({ id, label, setValue }: formInputInterface) => {
    const { updateAnswer }: any = useContext(QuestionContext)

    const updateZipCode = (target: any) => {
        return new Promise(resolve => {
            setValue(target.value)
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
            }}>
            <TextField
                fullWidth
                label={label}
                variant="standard"
                onChange={
                    ({ target }: any) =>
                        updateZipCode(target)
                            .then(() => updateAnswer(id, target.value))}
            />
        </Grid>
    )
}

export default FormInput