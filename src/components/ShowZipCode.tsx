import React from 'react'
import { Typography } from '@mui/material'
import { FaFaceSmile, FaFaceFrown } from 'react-icons/fa6'

const ShowZipCode = ({ zipCode }: any) => (
    zipCode === '' ? null : (
        zipCode === '1' ? (
            <>
                <Typography sx={{ fontWeight: 'bold' }}>NY</Typography>
                <FaFaceSmile size={20} color='#198754' />
            </>
        ) : (
            <FaFaceFrown size={20} color='#dc3545' />
        )
    )
)

export default ShowZipCode;