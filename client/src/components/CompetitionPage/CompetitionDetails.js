import React from 'react'
import { Grid, Typography } from '@mui/material'
import {useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material';

const CompetitionDetails = ({competition}) => {
    const theme = useTheme();
    const isMatchMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const responsiveAlign = () => {
        if(isMatchMobile === true) return 'center' 
        else return 'left'
    }
    return (
        <>
            <Grid item xs={12} sm={4} component='img' src={competition.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
            <Grid item xs={12} sm={8} sx={{ p: 5 }}>
                <Typography variant='h4' textAlign={responsiveAlign()}>{competition.productName}</Typography>
                <Typography variant='h5' textAlign={responsiveAlign()}>{competition.productBrand}</Typography>
                <Typography  sx={{ textDecoration: 'line-through' }} textAlign={responsiveAlign()}>{competition.productPrice}€</Typography>
                <Typography textAlign={responsiveAlign()}>{competition.ticketPrice}€</Typography>
                <Typography textAlign={responsiveAlign()}>{competition.maxTicketNumber - competition.tickets.length} ticket rimasti</Typography>
            </Grid>
        </>
    )
}

export default CompetitionDetails