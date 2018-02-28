import React, { Component} from 'react';
import {connect} from 'react-redux';

export const CardsListItem = (props) => {


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
          <button type="button">edit</button>
          <button type="button" >down</button>
          <button type="button">up</button>
        </div>
    </li>
  );
}


export default CardsListItem;