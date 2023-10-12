import { Grid, Typography } from '@mui/material';

export default function SurveysTable() {
    return (
        <>
            <Grid
                sx={{
                    padding: 1,
                    textAlign: 'center',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: '#0A70B1',
                    borderBottom: '1px solid #0A70B1',
                }}
            >
                <Typography sx={{ color: '#fff', fontSize: '1.5em' }}>Encuestas</Typography>
            </Grid>
            <Grid>Container</Grid>
        </>
    );
}