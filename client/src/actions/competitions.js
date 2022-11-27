import * as api from '../api';
//import competitions from '../reducers/competitions';

//Action Creators => functions that returns actions

export const getCompetitions = () => async (dispatch) => {
    try{
        const { data } = await api.fetchCompetitions();
        dispatch({type:'FETCH_ALL', payload: data});
    } catch (err) {
        console.log(err.message)
    }
}

export const createCompetition = (competition) => async(dispatch) => {
    try {
        const { data } = await api.createCompetition(competition);
        dispatch({type:'CREATE', payload:data})
    } catch(err) {
        console.log(err.message)
    }
}