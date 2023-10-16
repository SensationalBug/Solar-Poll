import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, Modal, Button } from '@mui/material';


export const SurveyModal = ({ data, openSurveyModal, setOpenSurveyModal }: any) => {
    const entries = data ? Object.entries(data[1]?.questions) : []
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
                    {entries.map((elem: any, index) => {
                        return (
                            <Grid container sx={{ border: '1px solid #808080', margin: '10px 0', padding: '10px' }}>
                                <Grid item xs={12} sx={{ margin: '5px 0' }}>Pregunta:{elem[1].question}</Grid>
                                <Grid item xs={12} sx={{ margin: '5px 0' }}>Descripcion:{elem[1].description}</Grid>
                                <Grid item xs={12} sx={{ margin: '5px 0', display: { xs: 'unset', md: 'flex' }, justifyContent: 'space-between' }}>Tipo:{elem[1].type}</Grid>
                                <Grid item xs={12} sx={{ margin: '5px 0' }}>
                                    {data[1]?.questions[index].answers ? (
                                        Object.entries(data[1]?.questions[index].answers).map((elem: any, answerIndex: any) => <div>Respuesta:{elem[1]}</div>)
                                    ) : null}
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
                <Button
                    color='error'
                    variant='contained'
                    onClick={() => setOpenSurveyModal(!openSurveyModal)}
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