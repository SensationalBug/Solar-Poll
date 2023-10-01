import React from 'react'
import { Grid } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import QuestionCard from './components/QuestionCard'
import CustomButton from './components/CustomButton'

const Main = () => {
    const optionButton = () => (
        <Grid>
            <CustomButton
                outline
                text={'Previous'}
                onClick={() => console.log('Previous')} />
            <CustomButton
                outline={false}
                text={'Next'}
                bgColor={'#0A70B1'}
                onClick={() => console.log('Next')} />
        </Grid>
    )
    return (
        <Grid container
            sx={{
                height: '100vh',
                backgroundColor: '#F9F9F9',
                justifyContent: 'space-between',
            }}
        >
            <Header />
            <QuestionCard optionButton={() => optionButton()} />
            <Footer />
        </Grid>
    )
}

export default Main