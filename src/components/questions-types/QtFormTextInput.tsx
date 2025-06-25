import { useState } from 'react'
import FormInput from '../FormInput'
import { Grid, Typography } from '@mui/material'

interface qtFormTextInputInterface {
    id: number;
}

export const QtFormTextInput = ({ id }: qtFormTextInputInterface) => {
    const [length, setLength] = useState(0);
    return (
        <Grid container sx={{ height: '70%' }}>
            <Grid item xs={12} sx={{ width: '100%' }}>
                <Grid item sx={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
                    <Grid item xs={12} sx={{ margin: '20px 20px' }}>
                        <FormInput id={id} label='Enter your answer here' setLength={setLength} />
                        <Typography sx={{ textAlign: 'end', margin: '20px 0' }}>{length}/100</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
