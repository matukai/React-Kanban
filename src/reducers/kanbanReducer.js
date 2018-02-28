import { LOAD_CARDS, MAKE_CARD, EDIT_CARD} from '../actions';

const initialState = {cards:[]}

//primariy setting state . receiving data from action then bundling up and passing down
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return {...state, cards: action.cards}
    case MAKE_CARD:
      let updated = { cards: state.cards.concat(action.card)}
      return updated
    case EDIT_CARD:
       let edited = { cards: state.cards.concat(action.card)}
      return edited

    default:
      return state;
  }
}