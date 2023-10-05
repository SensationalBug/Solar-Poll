import { FormControlLabel, Radio } from '@mui/material'
import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionsContext';

interface radioFormControlInterface {
    id: number;
    title: string;
}
const QtRadioFormControl = ({ id, title }: radioFormControlInterface) => {
    const { updateAnswer, fAnswers }: any = useContext(QuestionContext)
    return (
        <FormControlLabel
            value={title}
            label={title}
            onChange={({ target }: any) => updateAnswer(id, target.value)}
            control={<Radio
                sx={{
                    color: '#808080',
                    '&.Mui-checked': {
                        color: '#0A70B1',
                    },
                }} />}
            sx={{
                width: '90%',
                borderRadius: 3,
                padding: '5px 0',
                margin: '5px 0',
                transition: '.3s',
                '&:hover': {
                    backgroundColor: '#CDE9ED',
                    border: '3px solid #0A70B1',
                },
                backgroundColor: fAnswers[id] === title ? '#CDE9ED' : null,
                border: fAnswers[id] === title ? '3px solid #0A70B1' : '3px solid #808080',
            }}
        />
    )
}

export default QtRadioFormControl