import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCompetitionsBySearch } from '../../../actions/competitions';
import { Paper, AppBar, TextField, Button, Chip, Grid, Box } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const SearchBar = () => {

    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('')

    const searchCompetitions = () => {
        if (search.trim()) {
            dispatch(getCompetitionsBySearch(search, 1))
            history.push(`/competitions/search?searchQuery=${search || 'none'}&page=1`);
        } else {
            history.push('/competitions')
        }
    }

    const onEnterButton = (e) => {
        if (e.keyCode === 13) {
            searchCompetitions();
        }
    }
    return (
        <AppBar position='static' color='inherit' sx={{ mb: 2, borderRadius: 5, p: 2, pt: 1 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={10}>
                        <TextField name='search' variant='standard' label='   Search...' fullWidth value={search} onChange={(e) => { setSearch(e.target.value) }} onKeyDown={onEnterButton} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Button onClick={searchCompetitions} variant='contained' color='primary' sx={{ mt: 2 }}>Search</Button>
                    </Grid>
                </Grid>
            </Box>
        </AppBar>
    )
}

export default SearchBar