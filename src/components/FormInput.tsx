import { Grid, TextField } from '@mui/material'

const FormInput = () => {
    return (
        <Grid container sx={{}}>
            <TextField
                fullWidth
                variant="filled"
                label="Enter your zip code"
                sx={{
                    top: -130,
                    position: 'relative',
                }} />
        </Grid>
    )
}

export default FormInput