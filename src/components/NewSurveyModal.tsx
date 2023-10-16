import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, Modal, Button } from '@mui/material';
import { NewQuestionCard } from './cards/NewQuestionCard';
import { SurveysContext } from '../context/SurveysContext';

interface survey {
    newSurvey?: any;
    update?: any;
    updateAnswer?: any;
    sendNewSurvey?: any;
    updateTitle?: any;
    setNumberSelected?: any;
}
export const NewSurveyModal = ({
    open,
    setOpen,
    numberSelected,
    handleDecrease,
    handleIncrease,
    setNumberSelected }: any) => {
    const { sendNewSurvey, updateTitle }: survey = React.useContext(SurveysContext)
    const [disableButton, setDisableButton] = React.useState(false)
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Grid item xs={12} md={8} sx={{
                padding: 1,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                bgcolor: 'background.paper',
                justifyContent: 'space-between',
                height: { xs: '100%', md: '90%' },
            }}>
                <Grid sx={{
                    width: '100%',
                    display: 'flex',
                    overflow: 'auto',
                    alignItems: 'center',
                    flexDirection: 'column',
                    bgcolor: 'background.paper',
                }}>
                    {[...Array(numberSelected)].map((_, index) => (
                        <NewQuestionCard
                            index={index}
                            setDisableButton={setDisableButton}
                        />
                    ))}
                </Grid>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button sx={{ margin: '10px 0' }}
                        color='error'
                        variant='contained'
                        onClick={() => handleDecrease()}
                    >
                        Quitar pregunta
                    </Button>
                    <Button sx={{ margin: '10px 0' }}
                        variant='contained'
                        onClick={() => handleIncrease()}
                    >
                        Agregar pregunta
                    </Button>
                    <Button
                        disabled={disableButton ? false : true}
                        color='success'
                        variant='contained'
                        sx={{ margin: '10px 0' }}
                        onClick={() => {
                            sendNewSurvey().then(() => {
                                setOpen(false);
                                setNumberSelected(1);
                                setDisableButton(false);
                                updateTitle('title', '');
                            });
                        }}
                    >
                        Guardar encuesta
                    </Button>
                </Grid>
                <Button
                    color='error'
                    variant='contained'
                    onClick={() => setOpen(false)}
                    sx={{
                        right: 0,
                        position: 'absolute',
                        display: { xs: 'flex', md: 'none' }
                    }}
                >
                    <CloseIcon />
                </Button>
            </Grid>
        </Modal >
    );
}