import logo from '../assets/logo.png'
import FooterButtons from './FooterButtons'
import { Grid, Typography } from '@mui/material'
import { QuestionContext } from '../context/QuestionsContext'
import { useContext } from 'react'

const Footer = () => {
    const { logAnswers }: any = useContext(QuestionContext)
    return (
        <Grid container
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#0A70B1',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: { xs: 'center', md: 'space-between' },
            }}>
            <Grid item onClick={logAnswers}
                sx={{
                    display: 'flex',
                    margin: '0 20px',
                    marginTop: { xs: '10px', md: 0 },
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <img
                    src={logo}
                    alt={'...'}
                    width={100}
                />
            </Grid>
            <Grid item sx={{ marginTop: '10px' }}>
                <Typography
                    sx={{
                        fontSize: 12,
                        color: '#fff',
                        margin: '0 20px',
                        textAlign: 'center',
                    }}
                >
                    © 2023 EasySolar.us   All rights reserved
                </Typography>
                <Grid
                    sx={{
                        display: 'flex',
                        margin: '5px 0',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <FooterButtons title='Terminos' />
                    <FooterButtons title='Politicas' />
                    <FooterButtons title='Contact Us' />
                </Grid>
            </Grid>
        </Grid >
    )
}

export default Footer