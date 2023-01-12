import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCompetitionsBySearch } from '../../../actions/competitions';
import { AppBar, TextField, Grid, IconButton } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const SearchBar = () => {

    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
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
            <Grid container justify={"space-between"} alignItems='center' direction={'row'}>
            <Grid tabIndex={0} aria-label={"Search Bar: type something and click enter to search competitions"} container item xs={11}>
                <TextField name='search' variant='standard' label='Search...' fullWidth value={search} onChange={(e) => { setSearch(e.target.value) }} onKeyDown={onEnterButton} />
            </Grid>
            <Grid container item xs={1}>
                <IconButton aria-label={"Search Icon"} onClick={searchCompetitions}><SearchIcon fontSize='large'></SearchIcon></IconButton>
            </Grid>
            </Grid>
        </AppBar>
    )
}

export default SearchBar