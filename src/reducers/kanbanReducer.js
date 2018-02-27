import { LOAD_CARDS, MAKE_CARD} from '../actions';

const initialState = {cards:[]}

export default (state = initialState, action) => {
  //console.log(action)

  switch (action.type) {
    case LOAD_CARDS:
      return {...state, cards: action.cards}
    case MAKE_CARD:
      //console.log('NEW CARD CREATED',action.card)
      //console.log(state)
      let updated = { cards: state.cards.concat(action.card)}
      console.log(updated)
      return updated


    default:
      return state;
  }
}