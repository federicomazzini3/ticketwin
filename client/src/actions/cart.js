import { ADD_CART, CLEAR_CART, READ_CART, REMOVE_CART } from "../constants/actionType";

export const readCart = () => (dispatch) => {
    const data = JSON.parse(localStorage.getItem('cart'))
    if(data){ 
      dispatch({type:READ_CART, payload: data.cart})
    }
    else {
      localStorage.setItem('cart', JSON.stringify({cart: []}));
      return readCart();
    }
}

export const addToCart = (ticketNumber, userId) => (dispatch) => {
    console.log("add cart action")
    const ticket = { number: ticketNumber, owner: userId }
    const data = JSON.parse(localStorage.getItem('cart'));
    data.cart.push(ticket)
    localStorage.setItem('cart', JSON.stringify({cart: data.cart}));
    dispatch({type:ADD_CART, payload: data.cart})
};

export const removeFromCart = (ticketNumber) => (dispatch) =>  {
    const data = JSON.parse(localStorage.getItem('cart'));
    const filteredData = data.cart.filter(ticket => ticket.number != ticketNumber)
    localStorage.setItem('cart', JSON.stringify({cart: filteredData}))
    dispatch({type:REMOVE_CART, payload: filteredData})
}

export const clearCart = () => (dispatch) => {
  localStorage.setItem('cart', JSON.stringify([]));
  dispatch({type:CLEAR_CART})
}

export const updateWithUser = (userId) => {
  const data = JSON.parse(localStorage.getItem('cart'));
  const updatedData = data.cart.map(ticket => ({number: ticket.number, owner: userId}))
  localStorage.setItem('cart', JSON.stringify({cart: updatedData}))
}
