import React, { Component} from 'react';
import {connect} from 'react-redux';

export const CardsListItem = (props) => {
  const {downHandler,upHandler} = props

  return (
    <li>
        <div className="card">
          <br/>
          <div className="attribute"><span>Title: </span>{props.title}</div>
          <div className="attribute"><span>Priority: </span>{props.priority}</div>
          <div className="attribute"><span>Status: </span>{props.status}</div>
          <div className="attribute"><span>Created By: </span>{props.created_by}</div>
          <div className="attribute"><span>Assigned To: </span>{props.assigned_to}</div>
          <br/>
          <button type="submit">edit</button>

          <button onClick={downHandler} id={props.id} >down</button>
          <button onClick={upHandler} id={props.id} >up</button>

        </div>
    </li>
  );
}


export default CardsListItem;