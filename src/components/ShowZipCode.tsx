import React from 'react'
import { Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const ShowZipCode = ({ zipCode }: any) => (
    zipCode === '' ? null : (
        zipCode === '1' ? (
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.5em' }}>NY</Typography>
        ) : (
            <FontAwesomeIcon icon={faClose} size='2x' color='#dc3545' />
        )
    )
)

export default ShowZipCode;