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

export const addToCart = (ticketNumber, userId, competitionId, ticketPrice, productName ) => (dispatch) => {
    const ticket = { number: ticketNumber, owner: userId }
    const data = JSON.parse(localStorage.getItem('cart'));
    if( data.cart.some(competition => competition.id === competitionId)){
      const updatedData = data.cart.map((competition) => {
        if (competition.id === competitionId) {
          return {
            ...competition,
            tickets: [...competition.tickets, {number: ticketNumber, owner:userId}]
          }
        } else return competition
        })
      localStorage.setItem('cart', JSON.stringify({cart: updatedData}));
      dispatch({type:ADD_CART, payload: updatedData})
    } else {
      const updatedData = [...data.cart, {id: competitionId, ticketPrice: ticketPrice, productName: productName, tickets: [{number: ticketNumber, owner: userId}]}]
      localStorage.setItem('cart', JSON.stringify({cart: updatedData}));
      dispatch({type:ADD_CART, payload: updatedData})
    }
};

export const removeFromCart = (ticketNumber, competitionId) => (dispatch) =>  {
    const data = JSON.parse(localStorage.getItem('cart'));

    const filteredData = data.cart.map(competition =>  
                                        (competition.id === competitionId) ? ({ id: competition.id,
                                                                                ticketPrice: competition.ticketPrice,
                                                                                productName: competition.productName,
                                                                               tickets: competition.tickets.filter(ticket => ticket.number !== ticketNumber)})
                                                                            :  competition)
                                  .filter(competition => competition.tickets.length > 0)

    localStorage.setItem('cart', JSON.stringify({cart: filteredData}))
    dispatch({type:REMOVE_CART, payload: filteredData})
}

export const removeAllExcept = (competitionId) => (dispatch) => {
  const data = JSON.parse(localStorage.getItem('cart'));

  const filteredData = data.cart.filter(competition => competition.id === competitionId);

  localStorage.setItem('cart', JSON.stringify({cart: filteredData}))
  dispatch({type:REMOVE_CART, payload: filteredData})
}

export const clearCart = () => (dispatch) => {
  localStorage.setItem('cart', JSON.stringify({cart: []}));
  dispatch({type:CLEAR_CART})
}

export const updateWithUser = (userId) => {
  const data = JSON.parse(localStorage.getItem('cart'));
  if (data){
    const updatedData = data.cart.map(competition =>  {return { 
      id: competition.id, 
      ticketPrice: competition.ticketPrice,
      productName: competition.productName,
      tickets: competition.tickets.map(ticket => ({number: ticket.number, owner: userId}))
    }})
    localStorage.setItem('cart', JSON.stringify({cart: updatedData}))
  }
}
