import 'whatwg-fetch';

const KANBAN_API = '/api/kanban';

export const LOAD_CARDS = 'LOAD_CARDS';
export const MAKE_CARD = 'MAKE_CARD';


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
      console.log(response)
      //return response.json()
      return loadCards(dispatch)

    })
    .then(json => {
      console.log(json)
      return loadCards(dispatch({
          type: MAKE_CARD,
          cards: json
      }))
    })
    .catch(err => {
      return dispatch({
        type: MAKE_CARD,
        cards: []
      })
    })
  }
}
