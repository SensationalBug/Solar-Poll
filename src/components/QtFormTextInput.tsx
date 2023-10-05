import FormInput from './FormInput'
import { Grid, Typography } from '@mui/material'

interface qtFormTextInputInterface {
    id: number;
    zipCode: string;
}

export const QtFormTextInput = ({ id, zipCode }: qtFormTextInputInterface) => {
    return (
        <Grid container sx={{ height: '70%' }}>
            <Grid item xs={12} sx={{ width: '100%' }}>
                <FormInput id={id} />
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
