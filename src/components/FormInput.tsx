import ShowZipCode from './ShowZipCode';
import { useContext, useState } from 'react';
import { Grid, TextField } from '@mui/material'
import { QuestionContext } from '../context/QuestionsContext';

interface formInputInterface {
    id: number;
}

const FormInput = ({ id }: formInputInterface) => {
    const { updateAnswer }: any = useContext(QuestionContext)
    const [zipCode, setZipCode] = useState('');

    const updateZipCode = (target: any) => {
        return new Promise(resolve => {
            setZipCode(target.value)
            resolve('ok');
        })
    }

    return (
        <Grid container sx={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
            <Grid item xs={11}>
                <TextField
                    fullWidth
                    variant="standard"
                    label="Enter your zip code"
                    onChange={({ target }: any) => updateZipCode(target).then(() => updateAnswer(id, target.value))}
                />
            </Grid>
            <Grid item xs={1}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <ShowZipCode zipCode={zipCode} />
            </Grid>
        </Grid>
    )
}

export default FormInput