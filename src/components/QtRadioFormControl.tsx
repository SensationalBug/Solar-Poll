import { FormControlLabel, Radio } from '@mui/material'

interface radioFormControlInterface {
    title: string;
}
const QtRadioFormControl = ({ title }: radioFormControlInterface) => {
    return (
        <FormControlLabel
            value={title}
            label={title}
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
                border: '3px solid #808080',
                '&:hover': {
                    backgroundColor: '#CDE9ED',
                    border: '3px solid #0A70B1',
                }
            }}
        />
    )
}

export default QtRadioFormControl