import React from "react";
import { Grid, CircularProgress } from "@mui/material"
import { useSelector } from "react-redux";
import Competition from "./Competition/Competition";

const Competitions = ({setCurrentId}) => {
    const competitions = useSelector((state) => state.competitions); //from reducers

    console.log(competitions);
    return (
        !competitions.length ? <CircularProgress/> : (
            <Grid container alignItems="stretch" spacing={3}>
                {competitions.map((competition) => (
                    <Grid  key={competition._id} item xs={12} sm={6}>
                        <Competition competition={competition} setCurrentId={setCurrentId}></Competition>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Competitions;