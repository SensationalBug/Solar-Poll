import { Box, Button, Grid, Typography } from '@mui/material'
import ArrowBack from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForward from '@mui/icons-material/ArrowForwardIosOutlined';

export const CustomNumberSelector = ({ numberSelected, handleDecrease, handleIncrease }: any) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: '12px', justifyContent: 'center', display: 'flex', userSelect: 'none' }}>Cantidad de preguntas</Typography>
            <Grid sx={{ display: 'flex' }}>
                <Button
                    onClick={() => handleDecrease()}
                    disabled={numberSelected <= 1 ? true : false}
                >
                    <ArrowBack />
                </Button>
                <Box width={20} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.4em', userSelect: 'none' }}>{numberSelected}</Box>
                <Button
                    onClick={() => handleIncrease()}
                    disabled={numberSelected >= 10 ? true : false}
                >
                    <ArrowForward />
                </Button>
            </Grid>
        </Box>
    )
}
