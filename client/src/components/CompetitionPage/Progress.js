import React from 'react'
import { Box, LinearProgress, Typography, Grid } from '@mui/material'



const Progress = ({ maxTicketNumber, ticketSoldNumber }) => {
    const normalise = (value) => ((value) * 100) / (maxTicketNumber);

    return (
        <Grid container item xs={12} sx={{ mt: 10, textAlign: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <Typography align={'center'}>{ticketSoldNumber} ticket venduti</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" value={normalise(ticketSoldNumber)} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">
                        {maxTicketNumber}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
}

export default Progress