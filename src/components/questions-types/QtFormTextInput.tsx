import { useState } from 'react'
import FormInput from '../FormInput'
import ShowZipCode from '../ShowZipCode';
import { Grid, Typography } from '@mui/material'

interface qtFormTextInputInterface {
    id: number;
}

export const QtFormTextInput = ({ id }: qtFormTextInputInterface) => {
    const [zipCode, setZipCode] = useState('');
    return (
        <Grid container sx={{ height: '70%' }}>
            <Grid item xs={12} sx={{ width: '100%' }}>
                <Grid item sx={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
                    <Grid item xs={12}>
                        <FormInput id={id} label='Enter your zip code' setValue={setZipCode} />
                    </Grid>
                    <Grid item xs={1}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <ShowZipCode zipCode={zipCode} />
                    </Grid>
                </Grid>
                <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {zipCode === '1' ? (
                        <>
                            <Typography sx={{ fontWeight: 'bold', fontSize: 20, padding: '10px 0', textAlign: 'center' }}>Solar incentives in Massachusetts:</Typography>
                            <Grid>
                                <Typography sx={{ padding: '5px 0' }}>Local incentives possible</Typography>
                                <Typography sx={{ padding: '5px 0' }}>$0 down program available</Typography>
                                <Typography sx={{ padding: '5px 0' }}>Federal Tax Credit (Average $5,439)</Typography>
                            </Grid>
                        </>
                    ) : null}
                </Grid>
            </Grid>
        </Grid>
    )
}
