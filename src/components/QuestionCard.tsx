import React from 'react'
import { Card, CardContent, CardActions, Typography, Grid } from '@mui/material'
import Options from './Options'

const QuestionCard = ({ optionButton, ...buttonProps }: any) => {
    return (
        <Grid container sx={{
            height: '75vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Card sx={{
                borderRadius: 5,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: '#FFFFFF',
                justifyContent: 'space-between',
                width: { sm: '80%', xs: '100%' },
                height: { md: '90%', xs: '100%' },
                boxShadow: '0 4px 20px 0 rgb(0 0 0 / 9%)',
            }}>
                <CardContent sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <Grid container
                        sx={{
                            height: '15%',
                            padding: '20px',
                        }}>
                        <Grid container
                            sx={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    margin: '0 0 8px',
                                    fontSize: { md: 30, xs: 20 },
                                }}
                            >
                                Please select your home type</Typography>
                        </Grid>
                        <Grid container
                            sx={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Typography
                                sx={{
                                    color: '#808080',
                                    margin: '0 0 8px',
                                    fontSize: { md: 16, xs: 14 },
                                    textAlign: { md: 'justify', xs: 'center' }
                                }}
                            >
                                This helps us to determine what type of solar system suits best for your roof.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <Options />
                        <Options />
                        <Options />
                        <Options />
                    </Grid>
                </CardContent>
                <CardActions sx={{
                    width: '100%',
                    padding: '20px 0',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTop: '1px solid #E3E3E3',
                }}>
                    {optionButton(buttonProps)}
                </CardActions>
            </Card>
        </Grid>
    )
}

export default QuestionCard