import React, {Component} from 'react';

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

handleCardAssignedBy(event) {
  this.setState({ newCard: Object.assign({}, this.state.newCard, {assigned_to: event.target.value})})
}

submitHandler(event) {
  event.preventDefault();
}



render() {
  return (
    <div> 
  
      <form onSubmit={this.submitHandler}>

        New Task: <br/>
        <input 
          type="text"
          placeholder="title"
          onChange={this.handleCardTitle} />
          <br/>
        <input 
          type="text"
          placeholder="priority level"
          onChange={this.handleCardPriority} />
          <br/>
        <input 
          type="text"
          placeholder="status"
          onChange={this.handleCardStatus} />
          <br/>
        <input 
          type="text"
          placeholder="created by"
          onChange={this.handleCardCreatedBy} />
          <br/>
        <input 
          type="text"
          placeholder="assigned by"
          onChange={this.handleCardAssignedBy} />
          <br/>
        <input type="submit"/>
      </form>
  
    </div>
  )
}//end render

}//end CreateCard

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}




export default CreateCard;