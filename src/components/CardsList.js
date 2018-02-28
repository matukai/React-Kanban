import React, {Component} from 'react';
import CardsListItem from './CardsListItem';
import {connect} from 'react-redux';
import {editCard} from '../actions/index';

class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editedCard: {
        title: '',
        priority: '',
        status: '',
        created_by: '',
        asssigned_to: ''
      }
    }

    let cards = props.cards;
    let filter = props.filter;
    let status = props.status;
    this.downHandler = this.downHandler.bind(this);
  }

  upHandler() {
    
  }
  
  downHandler(event) {
    const target = this.findCard(event.target.id)
  }
  
  findCard(id) {
    const foundCard = this.props.cards.find(card => {
      return card.id == id;
    })
    this.downChangeStatus(foundCard)
  }

  downChangeStatus(card) {
    if(card.status === 'queue'){
      card.status = 'inProgress'
    }else if(card.status === 'inProgress'){
      card.status = 'done'
    }
    console.log(card)
    this.props.editCard(card)
  }









  render() {
    return (
      <div className={this.props.status}>
        {this.props.cards.filter((element)=> {
          return element.status === this.props.filter
        }).map((element,idx) => {
          return (
            <CardsListItem
            key={idx}
            id={element.id}
            title={element.title}
            priority={element.priority}
            status={element.status}
            created_by={element.created_by}
            asssigned_to={element.asssigned_to}
            downHandler={this.downHandler}
            />)})}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    editCard: (card) => {
      dispatch(editCard(card));
    }
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(CardList)