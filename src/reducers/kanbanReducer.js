import { LOAD_CARDS, CREATE_CARD } from '../actions';

const initialState = {cards:[]}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
    console.log('KANBAN REDUCER',action.cards)
      return {...state, cards: action.cards}

    default:
      return state;
  }
}