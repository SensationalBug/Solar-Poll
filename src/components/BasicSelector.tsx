import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { QuestionContext } from '../context/QuestionsContext';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const BasicSelector = ({ options, selectedSurvey, setSelectedSurvey }: any) => {
    const entries = Object.entries(options).reverse()
    const { getAnswersByID, getAnswers, setUanswers }: any = React.useContext(QuestionContext);

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedSurvey(event.target.value as string);
        event.target.value ?
            getAnswersByID(event.target.value).then((res: any) => setUanswers(res))
            : getAnswers()
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
                    <MenuItem value={0}>Todas</MenuItem>
                    {entries && entries.map((elem: any, index: any) => {
                        return (
                            <MenuItem key={index} value={elem[0]}>{elem[1].data.title}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}