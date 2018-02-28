import React, {Component} from 'react';
import CardsListItem from './CardsListItem';
import {connect} from 'react-redux';


class CardList extends Component {
  constructor(props) {
    super(props)
    let cards = props.cards;
    let filter = props.filter;
    let status = props.status;
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
            title={element.title}
            priority={element.priority}
            status={element.status}
            created_by={element.created_by}
            asssigned_to={element.asssigned_to}
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