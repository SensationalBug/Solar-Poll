import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, Modal, Button } from '@mui/material';


export const SurveyModal = ({ data, openSurveyModal, setOpenSurveyModal }: any) => {
    return (
        <Modal
            open={openSurveyModal}
            onClose={() => setOpenSurveyModal(!openSurveyModal)}
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
                    width: '60vw',
                    display: 'flex',
                    overflow: 'auto',
                    alignItems: 'center',
                    flexDirection: 'column',
                    bgcolor: 'background.paper',
                }}>
                    {Object.entries(data[1]?.questions).map((elem: any, index) => {
                        console.log(data[1]?.questions[0].answers)
                        return (
                            <>
                                <Grid item sx={{ width: '95%', margin: '5px 0' }}>Pregunta:{elem[1].description}</Grid>
                                <Grid item sx={{ width: '95%', margin: '5px 0' }}>Descripcion:{elem[1].question}</Grid>
                                <Grid item sx={{ width: '95%', margin: '5px 0', display: { xs: 'unset', md: 'flex' }, justifyContent: 'space-between' }}>Tipo:{elem[1].type}</Grid>
                                <Grid item sx={{ width: '95%', margin: '5px 0' }}>
                                    {data[1]?.questions[0].answers ? (
                                        data[1]?.questions[0].answers.map((elem: any, answerIndex: any) => (
                                            <div>Respuesta:{elem}</div>
                                        ))
                                    ) : (
                                        null
                                    )}
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
                <Button
                    color='error'
                    variant='contained'
                    onClick={() => console.log(data[1].questions)}
                    // onClick={() => setOpenSurveyModal(!openSurveyModal)}
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