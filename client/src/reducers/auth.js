import {AUTH, LOGOUT, FETCH_USER, UPDATE} from '../constants/actionType';

const authReducer = (state = {authData: null, users: []}, action) => {
    switch(action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        case LOGOUT:
            localStorage.clear(); 
            return { ...state, authData: null };
        case FETCH_USER:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        case UPDATE:  
            return {...state, users: state.users.map((user) => user._id === action.data._id ? action.data : user)}
        default:
            return state; 
    }
};

export default authReducer;