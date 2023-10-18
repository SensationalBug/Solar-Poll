import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const BasicSelector = ({ options, selectedSurvey, setSelectedSurvey }: any) => {
    const entries = Object.entries(options).reverse()

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedSurvey(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 200, maxWidth: 200 }}>
            <FormControl fullWidth >
                <InputLabel sx={{ color: '#fff' }}>Filtro</InputLabel>
                <Select
                    value={selectedSurvey}
                    onChange={handleChange}
                    sx={{ color: '#fff' }}
                >
                    {entries && entries.map((elem: any, index: any) => (
                        <MenuItem value={elem[1].data.title}>{elem[1].data.title}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}