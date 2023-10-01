import React from 'react'
import { Grid, Typography } from '@mui/material'
import Options from './Options'

const QuestionCard = ({ optionButton, ...buttonProps }: any) => {
    return (
        <Grid container
            sx={{
                height: '75vh',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Grid item md={10} xs={11}
                sx={{
                    height: '100%',
                    borderRadius: 5,
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                    // justifyContent: 'space-between',
                    boxShadow: '0 4px 20px 0 rgb(0 0 0 / 9%)',
                }}
            >
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
                                fontSize: { md: 30, xs: 20 },
                                margin: '0 0 8px'
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
                                fontSize: { md: 16, xs: 14 },
                                padding: '0 40px',
                                textAlign: { md: 'justify', xs: 'center' }
                            }}
                        >
                            This helps us to determine what type of solar system suits best for your roof.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}
                    sx={{
                        // height: '60%',
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
                <Grid container
                    sx={{
                        // height: '15%',
                        padding: '20px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTop: '1px solid #E3E3E3',
                    }}
                >
                    {optionButton(buttonProps)}
                </Grid>
            </Grid>
            {/* <Grid item
                sx={{
                    padding: '10px 0',
                    justifyContent: 'flex-end',
                }}
            >
                <Typography
                    sx={{
                        letterSpacing: 1,
                        color: '#808080',
                        textAlign: { md: 'end', xs: 'center' },
                    }}
                >
                    Step 1/1
                </Typography>
            </Grid> */}
        </Grid >
    )
}

export default QuestionCard