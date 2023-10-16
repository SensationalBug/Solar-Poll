import {
    Grid,
    Card,
    TextField,
    keyframes,
    Typography,
    CardActions,
    CardContent,
} from '@mui/material'
import { MuiTelInput } from 'mui-tel-input'
import { useContext, useState } from 'react'
import CustomButton from './custom-components/CustomButton'
import { QuestionContext } from '../context/QuestionsContext';
import { questionCardStyles } from '../styles/questionCardStyles'

interface contactFormInterface {
    slideToShow: number;
    setSlideToShow: any;
}

export const ContactForm = ({ slideToShow, setSlideToShow }: contactFormInterface) => {
    const { sendAnswers, update, setUdata }: any = useContext(QuestionContext)
    const [value, setValue] = useState('')
    const toLeftSlide = keyframes`
    from {
        opacity: 0;
        left: 100px;
      }
      to {
        opacity: 1;
        left: 0px;
      }
  `;
    return (
        <Grid item xs={12} lg={10} xl={6} sx={[questionCardStyles.container]}>
            <Card sx={[questionCardStyles.card, {
                minHeight: '70vh',
                position: 'relative',
                borderRadius: { xs: 0, md: 4 },
                animation: `${toLeftSlide} .3s 1 ease-out`
            }]}>
                <CardContent sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>
                    <Grid container>
                        <Grid container sx={questionCardStyles.textContent}>
                            <Typography sx={questionCardStyles.title}>Ingresa tus datos de contacto</Typography>
                        </Grid>
                        <Grid container sx={questionCardStyles.textContent}>
                            <Typography sx={questionCardStyles.text}>Permitenos estar un paso mas cerca de ti con este formulario con el cual podremos ponernos en contacto contigo.</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{
                        width: '90%'
                    }}>
                        <Grid
                            container
                            sx={{
                                display: 'flex',
                                margin: '20px 0',
                                alignSelf: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}>
                            <TextField
                                label="Nombre"
                                variant="standard"
                                onChange={
                                    ({ target }: any) => update(setUdata, 'name', target.value)}
                                sx={{ width: '100%' }}
                            />
                        </Grid>
                        <Grid
                            container
                            sx={{
                                display: 'flex',
                                alignSelf: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                margin: '20px 0'
                            }}>
                            <TextField
                                label="Correo"
                                variant="standard"
                                onChange={
                                    ({ target }: any) => update(setUdata, 'email', target.value)}
                                sx={{ width: '50%' }}
                            />
                            <MuiTelInput style={{ width: '40%' }} defaultCountry='US' value={value} onChange={(value: any) => {
                                setValue(value);
                                update(setUdata, 'phoneNumber', value)
                            }} />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions sx={questionCardStyles.cardFooter}>
                    <CustomButton
                        text={'Previous'}
                        onClick={() => setSlideToShow(slideToShow - 1)}
                    />
                    <CustomButton
                        text='Enviar'
                        outline={false}
                        bgColor='#0ab110'
                        onClick={async () => sendAnswers()}
                    />
                </CardActions>
            </Card>
        </Grid >
    )
}
