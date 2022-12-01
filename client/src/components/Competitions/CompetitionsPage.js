import React from 'react'
import Competitions from './Competitions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCompetitions } from '../../actions/competitions';
import { Container } from '@mui/system';
import Pagination from '../Pagination/Pagination'
import { Paper } from '@mui/material';

const CompetitionsPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCompetitions());
    }, [dispatch]);
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Competitions></Competitions>
            <Paper elevation={6} sx={{ borderRadius: 4, mt: 2, p: 2 }}>
                <Pagination />
            </Paper>
        </Container>
    )
}

export default CompetitionsPage