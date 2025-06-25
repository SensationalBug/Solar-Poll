import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem, InputLabel, FormControl, Grid } from '@mui/material';

export const CustomSelector = ({ get, set, update, index, setAnswerCuantity, setDisableButton }: any) => {

    const handleChange = (event: SelectChangeEvent) => {
        setAnswerCuantity(0)
        setDisableButton(true)
        set(event.target.value);
        update(index, 'type', event.target.value);
    };

    return (
        <Grid item xs={12} md={5} sx={{ margin: '5px 0' }}>
            <FormControl variant="standard" sx={{ width: '100%' }}>
                <InputLabel>Tipo de pregunta</InputLabel>
                <Select
                    value={get}
                    onChange={handleChange}
                    label="Tipo de pregunta"
                >
                    <MenuItem value={1}>Botones</MenuItem>
                    <MenuItem value={2}>Lista</MenuItem>
                    <MenuItem value={3}>Texto</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    );
}