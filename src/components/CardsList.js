import React from 'react';
import CardsListItem from './CardsListItem';
import Queue from './Queue';


export default (props) => {
  let cards = props.cards;
  let filter = props.filter;
  let status = props.status

return (
  <div className={status}>
    {cards.filter((element)=> {
      return element.status === filter
    }).map((element,idx) => {
      return (
        <CardsListItem
        key={idx}
        title={element.title}
        priority={element.priority}
        status={element.status}
        created_by={element.created_by}
        asssigned_to={element.asssigned_to}
        />)})}
  </div>)
}

