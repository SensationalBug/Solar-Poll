import logo from '../assets/logo.png'
import React, { useContext } from 'react'
import { Grid, Typography } from '@mui/material'
import { MediaContext } from '../context/MediaContext'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import CustomTooltip from './custom-components/CustomTooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    const { matchDownMD }: any = useContext(MediaContext)
    return (
        <Grid container
            sx={{
                padding: '5px 10px',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={logo}
                    alt={'...'}
                    width={matchDownMD ? 150 : 200}
                />
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faPhone} size={'1x'} color='#0A70B1' />
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
                            marginLeft: '5px',
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