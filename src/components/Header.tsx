import React from 'react'
import { Grid, Typography } from '@mui/material'
import { MdSunny } from 'react-icons/md'
import { SlPhone } from 'react-icons/sl'
import CustomTooltip from './CustomTooltip'

const Header = () => {
    return (
        <Grid container
            sx={{
                height: '10vh',
                padding: '5px 30px',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                <MdSunny size={80} color='#F9CD15' />
                <Typography
                    sx={{
                        left: -50,
                        fontSize: 35,
                        fontWeight: 'bold',
                        position: 'relative',
                    }}
                >
                    <b style={{ color: '#0A70B1' }}>Easy</b>
                    Solar
                </Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                <SlPhone size={25} color='#0A70B1' />
                <CustomTooltip title={
                    <React.Fragment>
                        <Typography sx={{ color: '#000', padding: '5px 0' }}><strong>Would you rather call? It's Free!</strong></Typography>
                        <Typography sx={{ color: '#000', padding: '5px 0' }}>Talk directly to a solar specialist about your potential solar savings</Typography>
                        <Typography sx={{ color: '#808080', padding: '15px 0', fontSize: 13 }}><span>Solar representative available between Monday - Friday: 9AM - 6PM CST</span></Typography>
                    </React.Fragment>
                }>
                    <Typography
                        sx={{
                            fontSize: { md: '1.5em', xs: '1em' },
                            marginLeft: '10px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                        }}
                    >
                        (809)-252-6353
                    </Typography>
                </CustomTooltip>
            </Grid>
        </Grid>
    )
}

export default Header