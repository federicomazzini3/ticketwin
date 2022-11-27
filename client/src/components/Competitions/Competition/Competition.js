import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from "@mui/material"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import Competitions from "../Competitions";

const Competition = ({ competition }) => {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
            <CardMedia component="img" image={competition.images || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt="random" />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h4" component="h2">
                    {competition.productName}
                </Typography>
                <Typography variant="h6" component="h2">
                    {competition.productBrand}
                </Typography>
                <Typography> {competition.ticketPrice}$</Typography>
                <Typography> {competition.maxTicketNumber - competition.tickets.length} ticket rimasti</Typography>
            </CardContent>
        </Card>
    )
}

export default Competition;