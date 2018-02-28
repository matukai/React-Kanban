import 'whatwg-fetch';

const KANBAN_API = '/api/kanban/';

export const LOAD_CARDS = 'LOAD_CARDS';
export const MAKE_CARD = 'MAKE_CARD';
export const EDIT_CARD = 'EDIT_CARD';

export const loadCards = () => {
  return dispatch => {
    return fetch(KANBAN_API)
    .then(response => {
      return response.json()
    })
    .then(json => {
      //console.log(json)
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
      console.log('response from server',response)
      return response.json()
    })
    .then(json => {
      console.log(json)
      return dispatch({
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
  let id = card.id;
  console.log('BEFORE',card)
  if(card.status === 'queue'){
    card.status = 'inProgress'
  }
  if(card.status === 'inProgress'){
    card.status = 'done'
  }
  console.log('AFTER', card)
  return dispatch => {
    return fetch(KANBAN_API + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(card)
    })
    .then(response => {
      console.log('response from server',response)
      return response.json()
    })
    .then(json => {
      console.log(json)
      return dispatch({
          type: MAKE_CARD,
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
