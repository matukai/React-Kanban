import React from 'react';
import CardsListItem from './CardsListItem';


const CardsList = ({ cards }) => {
  //console.log('CARDS LIST' , cards)
  const cardsListContent = cards.map( (card, idx) => {
    return <CardsListItem key={idx} {...card}/>
  })

  return (
    <ul className="cards-list">
      {cardsListContent}
    </ul>
  )
 }


export default CardsList;