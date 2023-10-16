import React from 'react'
import { Grid } from '@mui/material';
import Home from '../components/Home';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { SurveysContext } from '../context/SurveysContext';

interface survey {
    data?: any;
    question?: any;
}

export const Encuesta = () => {
    const { getSurveyByID }: any = React.useContext(SurveysContext)
    const [survey, setSurvey] = React.useState<survey>()
    const { id } = useParams();
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSurveyByID(id);
                setSurvey(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [getSurveyByID, id, survey?.data.date])
    return (
        <Grid container sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F9F9F9',
            justifyContent: 'space-between',
        }}>
            <Header />
            <Home id={id} survey={survey} />
            <Footer />
        </Grid>
    )
}
