import { useContext } from 'react'
import { Page } from '../components/Page'
import { Grid } from '@mui/material'
import { MediaContext } from '../context/MediaContext'
import SurveysTable from '../components/SurveysTable'
import { NewSurvey } from '../components/NewSurvey'
import { SurveysContext } from '../context/SurveysContext'

export const Surveys = () => {
    const { surveys }: any = useContext(SurveysContext)
    const { matchDownMD }: any = useContext(MediaContext)
    console.log(surveys)
    return (
        <Page overflow={matchDownMD ? 'auto' : 'hidden'}>
            <Grid item xs={12} md={6} sx={{ height: '100%', width: '100%', }}>
                <Grid container
                    sx={{
                        height: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <NewSurvey />
                </Grid>
                <Grid container sx={{
                    height: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Grid item xs={6} lg={8} sx={{
                    borderRadius: 3,
                    border: '1px solid #0A70B1',
                    width: { xs: '100%', md: '90%' },
                    height: { xs: '100%', md: '96%' },
                }}>
                    <SurveysTable />
                </Grid>
            </Grid>
        </Page >
    )
}
