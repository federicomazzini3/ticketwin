import React from "react";
import { useSelector } from "react-redux";
import Competition from "./Competition/Competition";

const Competitions = () => {
    const competitions = useSelector((state) => state.competitions); //from reducers

    console.log(competitions);
    return (
        <>
            <h1> COMPETITIONS </h1>
            <Competition/>
            <Competition/>
        </>
    )
}

export default Competitions;