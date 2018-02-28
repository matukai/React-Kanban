import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editCard} from '../actions';


class CardEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editedCard: {
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
    this.setState({ editedCard: Object.assign({}, this.state.editedCard, {title: event.target.value})})
  }
  
  handleCardPriority(event) {
    this.setState({ editedCard: Object.assign({}, this.state.editedCard, {priority: event.target.value})})
  }
  
  handleCardStatus(event) {
    this.setState({ editedCard: Object.assign({}, this.state.editedCard, {status: event.target.value})})
  }
  
  handleCardCreatedBy(event) {
    this.setState({ editedCard: Object.assign({}, this.state.editedCard, {created_by: event.target.value})})
  }
  
  handleCardAssignedTo(event) {
    this.setState({ editedCard: Object.assign({}, this.state.editedCard, {assigned_to: event.target.value})})
  }
  
  submitHandler(event) {
    event.preventDefault();
    this.props.makeCard(this.state.editedCard)
    this.setState({editedCard: Object.assign({}, this.state.editedCard, {title: '', priority: '', status: '', created_by: '', assigned_to: ''})})
  }

  render() {
      return (
        <div>
          <form onSubmit={this.submitHandler}>
    
            <br/>
            Edit Task:
            <br/>
            <input 
              type="text" 
              placeholder="title" 
              value={this.state.editedCard.title}
              onChange={this.handleCardTitle}/>
            <br/>
            <input type="text" placeholder="priority" value=""/>
            <br/>
            <input 
              type="text" 
              placeholder="status" 
              value={this.state.editedCard.status}
              onChange={this.handleCardStatus}/>
            <br/>
            <input type="text" placeholder="created by" value=""/>
            <br/>
            <input type="text" placeholder="assigned to" value=""/>
            <br/>
            <input type="submit"/>
          </form>
        </div>
      )
}// end render
}// end CardEdit


const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(CardEdit);