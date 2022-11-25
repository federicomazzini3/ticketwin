import React, {useState} from "react";
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { mergeClasses } from "@material-ui/styles";
import FileBase from 'react-file-base64';
//productName: String, productBrand: String, ticketPrice: Number, productPrice: Number, maxTicketNumber: Number, deadline: Date,
const Form = () => {
    const [postData, setPostData] = useState({name: '', brand: '', ticketPrice: '', productPrice: '', maxTicketNumber: '', deadline: new Date(), images: ''});
    const styles = useStyles();
    const handleSubmit = () => {

    }

    const clear = () => {

    }

    
    return (
        <Paper className={styles.paper}>
            <form autoComplete="off" noValidate className={`${styles.root} ${styles.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Create a competition</Typography>
                <TextField name="name" variant="outlined" label="Title" fullWidth value = {postData.name} onChange = {(e) => setPostData({ ...postData, creator: e.target.value})}/>
                <TextField name="brand" variant="outlined" label="Brand" fullWidth value = {postData.brand} onChange = {(e) => setPostData({ ...postData, title: e.target.value})}/>
                <TextField name="ticketPrice" variant="outlined" label="Ticket price" fullWidth value = {postData.ticketPrice} onChange = {(e) => setPostData({ ...postData, message: e.target.value})}/>
                <TextField name="productPrice" variant="outlined" label="Product price" fullWidth value = {postData.productPrice} onChange = {(e) => setPostData({ ...postData, tags: e.target.value})}/>
                <TextField name="maxTicketNumber" variant="outlined" label="Max ticket number" fullWidth value = {postData.maxTicketNumber} onChange = {(e) => setPostData({ ...postData, tags: e.target.value})}/>
                <div className={styles.fileInput}><FileBase type="file" multiple={false} onDone={(base64) => setPostData({...postData, images: [base64]})}/></div>
                <Button className={styles.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth> Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth> Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;



