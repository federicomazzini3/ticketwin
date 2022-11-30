import React from "react";
import { Grid, CircularProgress, Container } from "@mui/material"
import { useSelector } from "react-redux";
import Competition from "./Competition/Competition";
import { getCompetitions } from '../../actions/competitions'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'


const Competitions = () => {
    const {competitions} = useSelector((state) => state.competitions); //from reducers

    const[currentId, setCurrentId] = useState(null)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCompetitions());
      }, [dispatch]);

    console.log(competitions);
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
        {!competitions.length ? <CircularProgress/> : (
            <Grid container spacing={4}>
                {competitions.map((competition) => (
                    <Grid key={competition._id} item  xs={6} sm={6} md={3}>
                        <Competition competition={competition} setCurrentId={setCurrentId}></Competition>
                    </Grid>
                ))}
            </Grid>
            
        )}
        </Container>
    )
}

export default Competitions; 