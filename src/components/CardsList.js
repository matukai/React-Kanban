import React, {Component} from 'react';
import CardsListItem from './CardsListItem';
import {connect} from 'react-redux';


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
    const target = this.findCard(event)
    console.log('doooown handler', event.target.id)
  }
  
  findCard(name) {
    //console.log(name)
    const foundCard = this.props.cards.find(card => {
      //console.log(card.title)
      return card.name === name;
    })
    console.log(foundCard)
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

  }
}




export default connect(mapStateToProps, mapDispatchToProps)(CardList)