import React from 'react';
import CardsListItem from './CardsListItem';
import Queue from './Queue';


const CardsList = ({ cards }) => {
  //console.log('CARDS LIST' , cards)
  // const cardsListContent = cards.map( (card, idx) => {
  //   return <CardsListItem key={idx} {...card}/>
  // })

    const queue = cards.filter(element => {
      return element.status === 'queue'
    }).map( (card, idx) => {
      return <CardsListItem key={idx} {...card}/>
    })

    const inProgress = cards.filter(element => {
      return element.status === 'inProgress'
    }).map( (card, idx) => {
      return <CardsListItem key={idx} {...card}/>
    })

    const done = cards.filter(element => {
      return element.status === 'done'
    }).map( (card, idx) => {
      return <CardsListItem key={idx} {...card}/>
    })


  return (
    <div className="kanban">
      <div className="kanbanqueue">
        <h1>queue</h1>
        {queue}
      </div>

      <div className="kanbaninprogress">
        <h1>in progress</h1>
        {inProgress}
      </div>

      <div className="done">
        <h1>done</h1>
        {done}
      </div>

      {/* <ul className="cards-list">
        {cardsListContent}
      </ul> */}

    </div>
  )
 }


export default CardsList;