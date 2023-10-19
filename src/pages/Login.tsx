import logo from '../assets/logo.svg'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { QuestionContext } from '../context/QuestionsContext'
import { Grid, Typography, TextField, Button } from '@mui/material'

export const Login = () => {
    const { login }: any = useContext(UserContext)
    const { update }: any = useContext(QuestionContext)
    const [loginData, setLoginData] = useState({
        email: '',
        pwd: '',
    })
    return (
        <Grid container sx={{ height: '100vh' }}>
            <Grid item md={6} lg={7}
                sx={{
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0A70B1',
                    display: { xs: 'none', md: 'flex' },
                    boxShadow: '0px 0px 20px'
                }}>
                <img alt='...' src={logo} style={{ width: '50%' }} />
            </Grid>
            <Grid item xs={12} md={6} lg={5}
                sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Grid item xs={10} lg={9} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography sx={{ textAlign: 'center', margin: '20px 0 0 0', letterSpacing: 20, fontSize: '2em', fontWeight: '600' }}>SOLAR POLL</Typography>
                    <TextField
                        onChange={({ target }: any) => update(setLoginData, 'email', target.value)}
                        fullWidth
                        label="Username"
                        variant='standard'
                        sx={{ margin: '20px 0' }} />
                    <TextField
                        onChange={({ target }: any) => update(setLoginData, 'pwd', target.value)}
                        fullWidth
                        label="Password"
                        type='password'
                        variant='standard'
                        sx={{ margin: '20px 0' }} />
                    <Button
                        onClick={() => login(loginData.email, loginData.pwd)}
                        sx={{
                            margin: '20px 0',
                            backgroundColor: '#0A70B1'
                        }}
                        variant='contained'
                    >Sign in</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
