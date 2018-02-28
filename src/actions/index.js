import 'whatwg-fetch';

const KANBAN_API = '/api/kanban/';

export const LOAD_CARDS = 'LOAD_CARDS';
export const MAKE_CARD = 'MAKE_CARD';
export const EDIT_CARD = 'EDIT_CARD';


// must return type and object
export const loadCards = () => {
  return dispatch => {
    return fetch(KANBAN_API)
    .then(response => {
      return response.json()
    })
    .then(json => {
      dispatch({
        type: LOAD_CARDS,
        cards: json
      })
    })
    .catch(err => {
      return dispatch({
        type: LOAD_CARDS,
        cards: []
      })
    })
  }
}

export const makeCard = (newCard) => {
  return dispatch => {
    return fetch(KANBAN_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCard)
    })
    .then(response => {
      return response.json()
    })
    //return type, and data(object) to reducer
    .then(json => {
      return 
      dispatch({
          type: MAKE_CARD,
          card: json
      })
    })
    .catch(err => {
      return dispatch({
        type: MAKE_CARD,
        cards: []
      })
    })
  }
}

export const editCard = (card) => {
  //console.log('EDIT CARD BEFORE DISPATCH',card)
  let id = card.id;
  return dispatch => {
    return fetch(KANBAN_API + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(card)
    })
    .then(response => {
      return response.json()
    })
    .then(json => {
      return dispatch({
        type: EDIT_CARD,
        card: json
      })
    })
    .catch(err => {
      return dispatch({
        type: EDIT_CARD,
        cards: []
      })
    })
  }
}
