import React from 'react'
import Competitions from './Competitions';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getCompetitions } from '../../actions/competitions';
import { Container } from '@mui/system';

const CompetitionsPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCompetitions());
    }, [dispatch]);
    return (
        
        <Container sx={{ py: 8 }} maxWidth="md">
            <Competitions></Competitions>
        </Container>
    )
}

export default CompetitionsPage