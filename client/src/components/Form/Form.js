import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useDispatch } from 'react-redux';
import { createCompetition, updateCompetition } from "../../actions/competitions";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//productName: String, productBrand: String, ticketPrice: Number, productPrice: Number, maxTicketNumber: Number, deadline: Date,
const Form = () => {
    const [competitionData, setCompetitionData] = useState({ productName: '', productBrand: '', ticketPrice: '', productPrice: '', maxTicketNumber: '', deadline: new Date(), image: '' });
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createCompetition(competitionData, (id) => history.push(`/competitions/${id}`)))

        clear();
    }

    const clear = () => {
        setCompetitionData({ productName: '', productBrand: '', ticketPrice: '', productPrice: '', maxTicketNumber: '', deadline: new Date(), image: '' })
    }

    if (!user?.result?.name) {
        return (
            <Paper elevation={3}>
                <Typography variant="h6" align="center">
                    You're not allowed to add a new competition
                </Typography>
                <Typography variant="h6" align="center">
                    Log in first
                </Typography>
            </Paper>
        )
    }


    return (
        <Box sx={{ width: 300, mt: 3 }} margin='auto'>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant='h6'>Create a competition</Typography>
                <TextField sx={{ mt: 1 }} name="productName" variant="outlined" label="Title" fullWidth value={competitionData.productName} onChange={(e) => setCompetitionData({ ...competitionData, productName: e.target.value })} />
                <TextField sx={{ mt: 1 }} name="productBrand" variant="outlined" label="Brand" fullWidth value={competitionData.productBrand} onChange={(e) => setCompetitionData({ ...competitionData, productBrand: e.target.value })} />
                <TextField sx={{ mt: 1 }} name="ticketPrice" variant="outlined" label="Ticket price" fullWidth value={competitionData.ticketPrice} onChange={(e) => setCompetitionData({ ...competitionData, ticketPrice: e.target.value })} />
                <TextField sx={{ mt: 1 }} name="productPrice" variant="outlined" label="Product price" fullWidth value={competitionData.productPrice} onChange={(e) => setCompetitionData({ ...competitionData, productPrice: e.target.value })} />
                <TextField sx={{ mt: 1 }} name="maxTicketNumber" variant="outlined" label="Max ticket number" fullWidth value={competitionData.maxTicketNumber} onChange={(e) => setCompetitionData({ ...competitionData, maxTicketNumber: e.target.value })} />
                <Box sx={{ mt: 2 }}><LocalizationProvider dateAdapter={AdapterDayjs}> <DateTimePicker label="Responsive" renderInput={(params) => <TextField {...params} />} value={competitionData.deadline} onChange={(e) => setCompetitionData({ ...competitionData, deadline: e })} /> </LocalizationProvider></Box>
                <Box sx={{ mt: 1 }}><FileBase sx={{ mt: 1 }} type="file" multiple={false} onDone={({ base64 }) => setCompetitionData({ ...competitionData, image: base64 })} /> </Box>
                <Box sx={{ mt: 1 }}><Button sx={{ mt: 1 }} variant="contained" color="primary" size="large" type="submit" fullWidth> Submit</Button> </Box>
                <Box sx={{ mt: 1 }}><Button sx={{ mt: 1 }} variant="contained" color="secondary" size="small" onClick={clear} fullWidth> Clear</Button> </Box>
            </form>
        </Box>
    )
}

export default Form;



