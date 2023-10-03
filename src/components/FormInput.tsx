import { useContext } from 'react';
import { Grid, TextField } from '@mui/material'
import { QuestionContext } from '../context/QuestionsContext';
import ShowZipCode from './ShowZipCode';

const FormInput = () => {
    const { zipCode, setZipCode }: any = useContext(QuestionContext)
    return (
        <Grid container sx={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
            <Grid item xs={11}>
                <TextField
                    fullWidth
                    variant="standard"
                    label="Enter your zip code"
                    onChange={({ target }: any) => setZipCode(target.value)}
                />
            </Grid>
            <Grid item xs={1}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <ShowZipCode zipCode={zipCode} />
            </Grid>
        </Grid>
    )
}

export default FormInput