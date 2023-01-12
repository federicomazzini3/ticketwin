import React from "react";
import { Card, CardContent, CardMedia, Typography, ButtonBase, Button } from "@mui/material"
import moment from 'moment';
import {useHistory} from 'react-router-dom'
import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteCompetition } from "../../../actions/competitions";


const Competition = ({ competition }) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const openCompetition = () => history.push("/competitions/" + competition._id)
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <ButtonBase onClick={openCompetition}>
            <CardMedia height="220" component="img" image={competition.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} aria-label={`Image of the current Competition: ${competition.productName}${competition.productBrand}`}/>
            </ButtonBase>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h4">
                    {competition.productName}
                </Typography>
                <Typography variant="h7" component="h4">
                    {competition.productBrand}
                </Typography>
                <Typography fontSize={15} tabIndex={0} aria-label={`${competition.ticketPrice}€ Ticket Price`}> {competition.ticketPrice}€</Typography>
                <Typography fontSize={15} tabIndex={0} aria-label={`${competition.maxTicketNumber - competition.tickets.length} Remaining Tickets`}> {competition.maxTicketNumber - competition.tickets.length} remaining tickets</Typography>
                <Typography fontSize={15} tabIndex={0} aria-label={`Competition ${competition.productName}${competition.productBrand} expire ${moment(competition.deadline).fromNow(false)}`}> Expire {moment(competition.deadline).fromNow(false)}</Typography>
                {(user?.result.name ==='admin') && (
                <Button size="small" color="primary" onClick={() => dispatch(deleteCompetition(competition._id))}><DeleteIcon fontSize="small"/> Delete</Button>)}
            </CardContent>
        </Card>
    )
}

export default Competition;