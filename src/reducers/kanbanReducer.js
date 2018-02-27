import { LOAD_CARDS, CREATE_CARD , MAKE_CARD} from '../actions';

const initialState = {cards:[]}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return {...state, cards: action.cards}
    case MAKE_CARD:
      return {...state, cards: action.cards}



    default:
      return state;
  }
}