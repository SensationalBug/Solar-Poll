import { useContext, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { SurveysContext } from '../context/SurveysContext'
import { SurveyModal } from './SurveyModal';

export default function SurveysTable() {
    const [open, setOpen] = useState(false)
    const [selectedSurvey, setSelectedSurvey] = useState()
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
                    <Box onClick={() => {
                        setOpen(true)
                        setSelectedSurvey(elem)
                    }}
                        sx={{
                            transition: '.5s',
                            padding: '10px 20px',
                            borderBottom: '1px solid #808080',
                            '&:hover': {
                                fontWeight: 'bold',
                                backgroundColor: '#CDE9ED',
                            }
                        }}
                    >
                        <Typography key={index}
                            sx={{
                                color: '#000',
                                fontSize: '1.5em',
                            }}
                        >
                            {elem[1].data.title}
                        </Typography>
                    </Box>
                ))}
            </Grid>
            <SurveyModal
                data={selectedSurvey}
                openSurveyModal={open}
                setOpenSurveyModal={setOpen}
            />
        </>
    );
}