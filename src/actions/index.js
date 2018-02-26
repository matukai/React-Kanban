import 'whatwg-fetch';

const KANBAN_API = '/api/kanban';

export const LOAD_CARDS = 'LOAD_CARDS';
export const SET_CARD = 'SET_CARD';


export const setCard = card => {
  return {
    type: SET_CARD,
    card
  }
}

export const loadCards = () => {
  return dispatch => {
    return fetch(KANBAN_API)
    .then(response => {
      return response.json()
    })
    .then(json => {
      //console.log('ACTIONS INDEX',json)
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