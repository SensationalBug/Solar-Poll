import { Link } from 'react-router-dom';
import { SurveyModal } from './SurveyModal';
import { useContext, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { SurveysContext } from '../context/SurveysContext';

export default function SurveysTable() {
    const [open, setOpen] = useState(false)
    const [selectedSurvey, setSelectedSurvey] = useState()
    const { surveys, deleteSurvey }: any = useContext(SurveysContext)
    const entries = Object.entries(surveys);

    const setData = (data: any) => {
        return new Promise((resolve) => {
            setSelectedSurvey(data)
            resolve("ok");
        })
    }
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
                    <Grid container sx={{
                        transition: '.5s',
                        padding: '10px 20px',
                        borderBottom: '1px solid #808080',
                        '&:hover': {
                            fontWeight: 'bold',
                            backgroundColor: '#CDE9ED',
                        },
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Grid item xs={10} onClick={() => {
                            setData(elem).then(() => setOpen(true))
                        }}
                            sx={{ cursor: 'pointer' }}>
                            <Typography key={index}
                                sx={{
                                    color: '#000',
                                    fontSize: '1.5em',
                                    textTransform: 'capitalize',
                                }}
                            >
                                {elem[1].data.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Link to={`/encuesta/${elem[0]}`} target='_blank'>
                                <OpenInNewIcon sx={{
                                    color: '#000',
                                    transition: '.2s',
                                    '&:hover': {
                                        color: '#0A70B1'
                                    }
                                }} />
                            </Link>
                        </Grid>
                        <Grid item xs={1}
                            sx={{
                                display: 'flex',
                                cursor: 'pointer',
                                transition: '.2s',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '&:hover': {
                                    color: 'red',
                                }
                            }}
                            onClick={() => deleteSurvey(elem[0])}>
                            <CloseIcon />
                        </Grid>
                    </Grid>
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