import { LOAD_CARDS, MAKE_CARD} from '../actions';

const initialState = {cards:[]}

export default (state = initialState, action) => {

  switch (action.type) {
    case LOAD_CARDS:
      return {...state, cards: action.cards}
    case MAKE_CARD:
      let updated = { cards: state.cards.concat(action.card)}
      return updated


    default:
      return state;
  }
}