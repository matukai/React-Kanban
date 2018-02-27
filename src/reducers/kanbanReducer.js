import { LOAD_CARDS, MAKE_CARD} from '../actions';

const initialState = {cards:[]}

export default (state = initialState, action) => {
  //console.log(action.type)
  switch (action.type) {
    case LOAD_CARDS:
      return {...state, cards: action.cards}



    default:
      return state;
  }
}