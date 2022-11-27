import {FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionType';

export default (competitions = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...competitions, action.payload];
        case UPDATE:
            return competitions.map((competition) => competition._id === action.payload._id ? action.payload : competition)
        case DELETE:
            return competitions.filter((competition) => competition._id !== action.payload)
        default:
            return competitions;
    }
}