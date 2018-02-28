import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
//ACTIONS
import { loadCards } from '../../actions';
//SMART COMPONENTS
import CreateCard from '../CreateCard';
import CardEdit from '../CardEdit';
//COMPONENTS
import CardsList from '../../components/CardsList';


class App extends Component {

  constructor(props) {
    super(props)
  }

componentDidMount() {
  this.props.loadCards();
}




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CreateCard/>
        <CardEdit/>
        <CardsList status={"queue"} cards={this.props.cards} filter={"queue"} clickHandler={this.clickHandler}/>
        <CardsList status={"inProgress"} cards={this.props.cards} filter={"inProgress"}/>
        <CardsList status={"done"} cards={this.props.cards} filter={"done"}/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    cards: state.cards.cards,
    newCard: state.cards.cards,
    editCard: state.cards.cards
  }
}


const mapDispatchToProps = dispatch => {
  return {
    loadCards: () => {
      dispatch(loadCards());
    }
  }
}







export default connect(mapStateToProps, mapDispatchToProps)(App);