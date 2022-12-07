import * as api from '../api';
import {FETCH_ALL, FETCH_COMPETITION, CREATE, UPDATE, DELETE, SEARCH, START_LOADING, END_LOADING, BUY} from '../constants/actionType';

export const getCompetitions = (page) => async (dispatch) => {
    try{
        dispatch({type: START_LOADING});
        const { data } = await api.fetchCompetitions(page);
        dispatch({type: FETCH_ALL, payload: data});
        dispatch({type: END_LOADING});
    } catch (err) {
        console.log(err.message)
    }
}
 
export const getCompetitionsBySearch = (searchQuery,page) => async (dispatch) => {
    try{
        dispatch({type: START_LOADING});
        const { data } = await api.fetchCompetitionsBySearch(searchQuery, page);
        dispatch({type: SEARCH, payload: data});
        dispatch({type: END_LOADING});
    } catch (err) {
        console.log(err.message)
    }
}

export const getCompetition = (id) => async (dispatch) => {
    try{
        dispatch({type: START_LOADING});
        const { data } = await api.fetchCompetition(id);
        dispatch({type: FETCH_COMPETITION, payload: data});
        dispatch({type: END_LOADING});
    } catch (err) {
        console.log(err.message)
    }
}

export const createCompetition = (competition, onSuccess, onFailure) => async(dispatch) => {
    try {
        const { data } = await api.createCompetition(competition);
        dispatch({type: CREATE , payload:data})
        onSuccess(data._id)
    } catch(err) {
        onFailure(err.message)
    }  
}

export const updateCompetition = (id, competition) => async(dispatch) => {
    try {
        const {data} = await api.updateCompetition(id, competition);

        dispatch({ type: UPDATE, payload: data})
    } catch (err) {
        console.log(err.message);
    }
}

export const deleteCompetition = (id) => async(dispatch) => {
    try{
        await api.deleteCompetition(id);

        dispatch({type: DELETE, payload: id})
    } catch(err) {
        console.log(err)
    }
}

export const buyTicket = (id, ticket) => async(dispatch) => {
    try{
        const {data} = await api.buyTicket(id,ticket);
        
        dispatch({type: BUY, payload: data})
    } catch(err) {
    
    }
}