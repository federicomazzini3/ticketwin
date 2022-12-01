import {FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_COMPETITION, SEARCH, START_LOADING, END_LOADING} from '../constants/actionType';

export default (state = {isLoading: true, competitions: []}, action) => {
    switch (action.type) {
        case FETCH_ALL:
        case SEARCH:
            return {
                ...state, 
                competitions: action.payload.data, 
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_COMPETITION:
                return {...state, competition: action.payload};
        case CREATE:
            return {...state, competitions: [...state.competitions, action.payload]};
        case UPDATE:
            return {...state, competitions: state.competitions.map((competition) => competition._id === action.payload._id ? action.payload : competition)}
        case DELETE:
            return {...state, competitions: state.competitions.filter((competition) => competition._id !== action.payload)}
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        default:
            return state;
    }
}