import { useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import { SurveysContext } from '../context/SurveysContext'

export default function SurveysTable() {
    const { surveys }: any = useContext(SurveysContext)
    const entries = Object.entries(surveys);
    return (
        <>
            <Grid
                sx={{
                    padding: 1,
                    textAlign: 'center',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: '#0A70B1',
                    borderBottom: '1px solid #0A70B1',
                }}
            >
                <Typography sx={{ color: '#fff', fontSize: '1.5em' }}>Encuestas</Typography>
            </Grid>
            <Grid>
                {entries.map((elem: any, index) => (
                    <Typography key={index} sx={{ color: '#000', fontSize: '1.5em' }}>{elem[0]}</Typography>
                ))}
            </Grid>
        </>
    );
}