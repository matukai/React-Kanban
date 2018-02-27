import React, {Component} from 'react';
import {makeCard} from '../actions';
import {connect} from 'react-redux'

class CreateCard extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
        newCard: {
        title: '',
        priority: '',
        status: '',
        created_by: '',
        assigned_to: ''
      }
    }
    this.handleCardTitle = this.handleCardTitle.bind(this)
    this.handleCardPriority = this.handleCardPriority.bind(this)
    this.handleCardStatus = this.handleCardStatus.bind(this)
    this.handleCardCreatedBy = this.handleCardCreatedBy.bind(this)
    this.handleCardAssignedTo = this.handleCardAssignedTo.bind(this)
    this.submitHandler = this.submitHandler.bind(this)

  }

handleCardTitle(event) {
  this.setState({ newCard: Object.assign({}, this.state.newCard, {title: event.target.value})})
}

handleCardPriority(event) {
  this.setState({ newCard: Object.assign({}, this.state.newCard, {priority: event.target.value})})
}

handleCardStatus(event) {
  this.setState({ newCard: Object.assign({}, this.state.newCard, {status: event.target.value})})
}

handleCardCreatedBy(event) {
  this.setState({ newCard: Object.assign({}, this.state.newCard, {created_by: event.target.value})})
}

handleCardAssignedTo(event) {
  this.setState({ newCard: Object.assign({}, this.state.newCard, {assigned_to: event.target.value})})
}

submitHandler(event) {
  event.preventDefault();
  this.props.makeCard(this.state.newCard)
  this.setState(this.props.newCard)
}


render() {
  return (
    <div> 
  
      <form onSubmit={this.submitHandler}>

        New Task: <br/>
        <input 
          type="text"
          placeholder="title"
          value={this.state.newCard.title}
          onChange={this.handleCardTitle} />
          <br/>
        <input 
          type="text"
          placeholder="priority level"
          value={this.state.newCard.priority}
          onChange={this.handleCardPriority} />
          <br/>
        <input 
          type="text"
          placeholder="status"
          value={this.state.newCard.status}
          onChange={this.handleCardStatus} />
          <br/>
        <input 
          type="text"
          placeholder="created by"
          value={this.state.newCard.created_by}
          onChange={this.handleCardCreatedBy} />
          <br/>
        <input 
          type="text"
          placeholder="assigned to"
          value={this.state.newCard.assigned_to}
          onChange={this.handleCardAssignedTo} />
          <br/>
        <input type="submit"/>
      </form>
  
    </div>
  )
}//end render

}//end CreateCard

const mapStateToProps = state => {
  //console.log('CREATE CARD', state)
  return {
    cards: state.cards.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeCard: (data) => {
      dispatch(makeCard(data));
    }
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);
