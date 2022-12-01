import React from "react";
import { Grid, CircularProgress, Container } from "@mui/material"
import { useSelector } from "react-redux";
import Competition from "./Competition/Competition";
import { getCompetitions } from '../../actions/competitions'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'


const Competitions = () => {
    const {competitions} = useSelector((state) => state.competitions); //from reducers

    console.log(competitions);
    return (
        !competitions.length ? <CircularProgress/> : (
            <Grid container spacing={4}>
                {competitions.map((competition) => (
                    <Grid key={competition._id} item  xs={6} sm={6} md={3}>
                        <Competition competition={competition}></Competition>
                    </Grid>
                ))}
            </Grid>
            
    ))
}

export default Competitions; 