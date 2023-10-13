import React from 'react'
import { NewSurveyModal } from './NewSurveyModal';
// import { MediaContext } from '../context/MediaContext'
// import Add from '@mui/icons-material/AddCircleOutlineOutlined';
import { Grid, Typography, Button, TextField } from '@mui/material'
import { SurveysContext } from '../context/SurveysContext';
// import { CustomNumberSelector } from './custom-components/CustomNumberSelector';

export const NewSurvey = () => {
    const [open, setOpen] = React.useState(false);
    const [numberSelected, setNumberSelected] = React.useState(1)
    const { updateTitle, newSurveyTitle }: any = React.useContext(SurveysContext)
    // const { matchDownMD }: any = React.useContext(MediaContext)

    const handleDecrease = () => {
        numberSelected === 1 ? setNumberSelected(1) : setNumberSelected(numberSelected - 1)
    }
    const handleIncrease = () => {
        numberSelected >= 10 ? setNumberSelected(numberSelected) : setNumberSelected(numberSelected + 1)
    }
    return (
        <Grid item xs={10} md={11} sx={{ height: '90%', borderRadius: 3, border: '1px solid #0A70B1' }}>
            <Grid item
                sx={{
                    height: '10%',
                    textAlign: 'center',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: '#0A70B1',
                    borderBottom: '1px solid #808080',
                }}
            >
                <Typography sx={{ color: '#fff', fontSize: '1em' }}>
                    Agregar nueva encuesta
                </Typography>
            </Grid>
            <Grid item
                sx={{
                    height: '90%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                }}>
                <Grid item sx={{ width: '90%' }}>
                    <TextField value={newSurveyTitle.title} onChange={(elem: any) => updateTitle('title', elem.target.value)} fullWidth label="Nombre de la encuesta" variant="outlined" />
                </Grid>
                <Grid item sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}>
                    {/* <CustomNumberSelector numberSelected={numberSelected} handleDecrease={handleDecrease} handleIncrease={handleIncrease} /> */}
                    <Button
                        variant='contained'
                        onClick={() => setOpen(true)}
                        sx={{ backgroundColor: '#0A70B1' }}
                        disabled={newSurveyTitle.title ? false : true}
                    >
                        Crear encuesta
                    </Button>
                </Grid>
            </Grid>
            <NewSurveyModal open={open} setOpen={setOpen} numberSelected={numberSelected} handleDecrease={handleDecrease} handleIncrease={handleIncrease} />
        </Grid>
    )
}
