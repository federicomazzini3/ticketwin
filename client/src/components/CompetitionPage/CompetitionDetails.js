import React from 'react'
import { Grid, Typography } from '@mui/material'

const CompetitionDetails = ({competition}) => {
    return (
        <>
            <Grid item xs={12} sm={4} component='img' src={competition.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
            <Grid item xs={12} sm={8} sx={{ p: 5 }}>
                <Typography variant='h2'>{competition.productName}</Typography>
                <Typography variant='h3'>{competition.productBrand}</Typography>
                <Typography variant='h5' sx={{ textDecoration: 'line-through' }} >{competition.productPrice}€</Typography>
                <Typography variant='h5'>{competition.ticketPrice}€</Typography>
                <Typography variant='h5'>{competition.maxTicketNumber} ticket rimasti</Typography>
            </Grid>
        </>
    )
}

export default CompetitionDetails