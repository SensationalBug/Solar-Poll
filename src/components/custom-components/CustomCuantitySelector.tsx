import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem, InputLabel, FormControl, Grid } from '@mui/material';

export const CustomCuantitySelector = ({ get, set, update, index, questionType, setAnswerCuantity }: any) => {

    const handleChange = (event: SelectChangeEvent) => {
        set().then(() => setAnswerCuantity(event.target.value));
        // Esta funcion manda el valor plano par el objeto, por ahora no necesario
        // update(index, 'answers', event.target.value);
    };
    return (
        <Grid item xs={12} md={5} sx={{ margin: '5px 0' }}>
            <FormControl disabled={questionType === 3 || !questionType ? true : false} variant="standard" sx={{ width: '100%' }}>
                <InputLabel>Cantidad de respuestas</InputLabel>
                <Select
                    value={get}
                    onChange={handleChange}
                    label="Cantidad de respuestas"
                >
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                </Select>
            </FormControl>
        </Grid >
    );
}