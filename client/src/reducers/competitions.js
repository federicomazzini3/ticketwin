import {FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_COMPETITION} from '../constants/actionType';

export default (state = {competitions: []}, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return {...state, competitions: action.payload};
        case FETCH_COMPETITION:
                return {...state, competition: action.payload};
        case CREATE:
            return {...state, competitions: [...state.competitions, action.payload]};
        case UPDATE:
            return {...state, competitions: state.competitions.map((competition) => competition._id === action.payload._id ? action.payload : competition)}
        case DELETE:
            return {...state, competitions: state.competitions.filter((competition) => competition._id !== action.payload)}
        default:
            return state;
    }
}