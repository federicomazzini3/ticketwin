import React, { useState } from "react";
import { TextField, Button, Typography, Box } from '@mui/material';
import FileBase from 'react-file-base64';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';



//productName: String, productBrand: String, ticketPrice: Number, productPrice: Number, maxTicketNumber: Number, deadline: Date,
const Form = () => {
    const [postData, setPostData] = useState({ name: '', brand: '', ticketPrice: '', productPrice: '', maxTicketNumber: '', deadline: new Date(), images: '' });


    const handleSubmit = () => {

    }

    const clear = () => {

    }


    return (
            <Box>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Typography variant='h6'>Create a competition</Typography>
                    <TextField sx={{mt:1}} name="name" variant="outlined" label="Title" fullWidth value={postData.name} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                    <TextField sx={{mt:1}} name="brand" variant="outlined" label="Brand" fullWidth value={postData.brand} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    <TextField sx={{mt:1}} name="ticketPrice" variant="outlined" label="Ticket price" fullWidth value={postData.ticketPrice} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    <TextField sx={{mt:1}} name="productPrice" variant="outlined" label="Product price" fullWidth value={postData.productPrice} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                    <TextField sx={{mt:1}} name="maxTicketNumber" variant="outlined" label="Max ticket number" fullWidth value={postData.maxTicketNumber} onChange={(e) => setPostData({ ...postData, maxTicketNumber: e.target.value })} />
                    <Box sx={{mt:2}}><LocalizationProvider dateAdapter={AdapterDayjs}> <DateTimePicker label="Responsive" renderInput={(params) => <TextField {...params} />} value={postData.deadline} onChange={(e) => setPostData({ ...postData, deadline: e })} /> </LocalizationProvider></Box>
                    <Box sx={{mt:1}}><FileBase sx={{mt:1}} type="file" multiple={false} onDone={(base64) => setPostData({ ...postData, images: [base64] })} /> </Box>
                    <Box sx={{mt:1}}><Button sx={{mt:1}} variant="contained" color="primary" size="large" type="submit" fullWidth> Submit</Button> </Box>
                    <Box sx={{mt:1}}><Button sx={{mt:1}} variant="contained" color="secondary" size="small" onClick={clear} fullWidth> Clear</Button> </Box>
                </form>
            </Box>
    )
}

export default Form;



