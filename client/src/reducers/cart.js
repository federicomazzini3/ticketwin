import {ADD_CART, CLEAR_CART, REMOVE_CART, READ_CART, UPDATE_USER} from '../constants/actionType';

export default (state = {cart: []}, action) => {
    switch (action.type) {
        case READ_CART:
            return {cart: action.payload};
        case ADD_CART:
            return {cart: action.payload};
        case REMOVE_CART:
            return {cart: action.payload};
        case CLEAR_CART:
            return {cart: []}
        case UPDATE_USER:
            state.cart.map( t => console.log(t))
            return {...state, cart: state.cart.map(t => ({number: t.number, owner: action.payload})) }
        default:
            return state;
    }
}