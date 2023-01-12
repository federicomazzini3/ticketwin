import React from "react";
import { Grid, CircularProgress } from "@mui/material"
import { useSelector } from "react-redux";
import Competition from "./Competition/Competition";


const Competitions = () => {
    const { competitions, isLoading } = useSelector((state) => state.competitions); //from reducers
    if (!competitions?.length && !isLoading) return 'No competitions found'

    if (isLoading) return <CircularProgress />

    if (!isLoading) return (
        <Grid tabIndex={0} aria-label={"Competitions Ongoin"} container spacing={4}>
            {competitions.map((competition) => (
                <Grid key={competition._id} item xs={6} sm={4} md={3}>
                    <Competition competition={competition}></Competition>
                </Grid>
            ))}
        </Grid>
    )
}

export default Competitions; 