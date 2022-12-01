import React from 'react'
import Competitions from './Competitions';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/system';
import Pagination from './Pagination/Pagination'
import { Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const CompetitionsPage = () => {

    const dispatch = useDispatch();
    const query = useQuery();
    const page = query.get('page') || 1;

    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <SearchBar></SearchBar>
            <Competitions></Competitions>
            <Paper elevation={6} sx={{ borderRadius: 4, mt: 2, p: 2 }}>
                <Pagination  page={page}/>
            </Paper>
        </Container>
    )
}

export default CompetitionsPage