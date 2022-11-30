import * as api from '../api';
import {FETCH_ALL, FETCH_COMPETITION, CREATE, UPDATE, DELETE} from '../constants/actionType';

//Action Creators => functions that returns actions

export const getCompetitions = () => async (dispatch) => {
    try{
        const { data } = await api.fetchCompetitions();
        dispatch({type: FETCH_ALL, payload: data});
    } catch (err) {
        console.log(err.message)
    }
}

export const getCompetition = (id) => async (dispatch) => {
    try{
        const { data } = await api.fetchCompetition(id);
        dispatch({type: FETCH_COMPETITION, payload: data});
    } catch (err) {
        console.log(err.message)
    }
}

export const createCompetition = (competition, onSuccess) => async(dispatch) => {
    try {
        const { data } = await api.createCompetition(competition);
        dispatch({type: CREATE , payload:data})
        onSuccess(data._id)
    } catch(err) {
        console.log(err.message)
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