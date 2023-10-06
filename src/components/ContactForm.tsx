import {
    Grid,
    Card,
    TextField,
    keyframes,
    Typography,
    CardActions,
    CardContent,
} from '@mui/material'
import { useContext } from 'react'
import CustomButton from './CustomButton'
import { QuestionContext } from '../context/QuestionsContext';
import { questionCardStyles } from '../styles/questionCardStyles'

interface contactFormInterface {
    slideToShow: number;
    setSlideToShow: any;
}

export const ContactForm = ({ slideToShow, setSlideToShow }: contactFormInterface) => {
    const { sendAnswers, update, setUdata }: any = useContext(QuestionContext)
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
                <CardContent sx={questionCardStyles.cardContent}>
                    <Grid container>
                        <Grid container sx={questionCardStyles.textContent}>
                            <Typography sx={questionCardStyles.title}>Ingresa tus datos de contacto</Typography>
                        </Grid>
                        <Grid container sx={questionCardStyles.textContent}>
                            <Typography sx={questionCardStyles.text}>Permitenos estar un paso mas cerca de ti con este formulario con el cual podremos ponernos en contacto contigo.</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={questionCardStyles.questionContent}>
                        <Grid
                            container
                            sx={{
                                display: 'flex',
                                alignSelf: 'center',
                                flexDirection: 'row',
                            }}>
                            <TextField
                                fullWidth
                                label="Nombre"
                                variant="standard"
                                onChange={
                                    ({ target }: any) => update(setUdata, 'name', target.value)}
                            />
                        </Grid>
                        <Grid
                            container
                            sx={{
                                display: 'flex',
                                alignSelf: 'center',
                                flexDirection: 'row',
                            }}>
                            <TextField
                                fullWidth
                                label="Correo"
                                variant="standard"
                                onChange={
                                    ({ target }: any) => update(setUdata, 'email', target.value)}
                            />
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
