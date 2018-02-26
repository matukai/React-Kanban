import { LOAD_CARDS, CREATE_CARD } from '../actions';

const initialState = {}

export default (state = initialState, action) => {
  console.log('REDUCER', state)
  switch (action.type) {
    case LOAD_CARDS:
      return {...state, cards: action.cards}

    default:
      return state;
  }
}