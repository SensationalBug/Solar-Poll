import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem, InputLabel, FormControl, Grid } from '@mui/material';

export const CustomCuantitySelector = ({ get, set, update, index, questionType }: any) => {

    const handleChange = (event: SelectChangeEvent) => {
        set(event.target.value);
        update(index, 'answers', event.target.value);
    };
    return (
        <Grid item xs={12} md={5} sx={{ margin: '5px 0' }}>
            <FormControl disabled={questionType === 3 ? true : false} variant="standard" sx={{ width: '100%' }}>
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