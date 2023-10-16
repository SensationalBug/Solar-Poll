import { useContext } from 'react'
import { Grid, Typography } from '@mui/material';
import { QuestionContext } from '../../context/QuestionsContext';

interface options {
    id: number;
    title: string;
    icon: any;
    onClick?: any;
}
const QtOptionButton = ({ id, title, icon, onClick }: options) => {
    const { fAnswers }: any = useContext(QuestionContext)
    return (
        <Grid
            onClick={onClick}
            item
            xs={4}
            md={2}
            m={1}
            sx={{
                borderRadius: 3,
                display: 'flex',
                cursor: 'pointer',
                padding: '10px 0',
                userSelect: 'none',
                transition: '0.2s',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                '&:hover': {
                    backgroundColor: '#CDE9ED',
                    border: '4px solid #0A70B1',
                },
                backgroundColor: fAnswers[id] === title ? '#CDE9ED' : null,
                border: fAnswers[id] === title ? '4px solid  #0A70B1' : '4px solid rgba(0,0,0,.25)',
            }}
        >
            {icon}
            < Typography
                sx={{
                    padding: '5px 0',
                    fontWeight: 'bold',
                    fontSize: { lg: '22px', xs: '18px' },
                }}
            >
                {title}
            </Typography >
        </Grid >
    )
}

export default QtOptionButton