import React from "react";
import { Card, CardContent, CardMedia, Button, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from "react-redux";
import { deleteCompetition } from "../../../actions/competitions";

const Competition = ({ competition, setCurrentId }) => {
    const dispatch = useDispatch();
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
            <CardMedia component="img" image={competition.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt="random" />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h4" component="h2">
                    {competition.productName}
                </Typography>
                <Typography variant="h6" component="h2">
                    {competition.productBrand}
                </Typography>
                <Typography> {competition.ticketPrice}$</Typography>
                <Typography> {competition.maxTicketNumber - competition.tickets.length} ticket rimasti</Typography>
                <Typography> {moment(competition.deadline).fromNow(false)}</Typography>
                <Button size="small" color="primary" onClick={() => setCurrentId(competition._id)}><MoreHorizIcon fontSize="small"/> Edit</Button>
                <Button size="small" color="primary" onClick={() => dispatch(deleteCompetition(competition._id))}><DeleteIcon fontSize="small"/> Delete</Button>
            </CardContent>
        </Card>
    )
}

export default Competition;