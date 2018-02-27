import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
//ACTIONS
import { loadCards } from '../../actions';
//COMPONENTS
import CreateCard from '../CreateCard'
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
        <CardsList status={"queue"} cards={this.props.cards} filter={"queue"}/>
        <CardsList status={"inProgress"} cards={this.props.cards} filter={"inProgress"}/>
        <CardsList status={"done"} cards={this.props.cards} filter={"done"}/>

      </div>
    );
  }
}


const mapStateToProps = state => {
  //console.log('MAP STATE TO PROPS STATE',state.cards.cards)
  return {
    cards: state.cards.cards,
    newCard: state.cards.cards
  }
}


const mapDispatchToProps = dispatch => {
  return {
    loadCards: () => {
      dispatch(loadCards());
    },
    // setCard: card => {
    //   dispatch(setCard(card));
    // }
  }
}







export default connect(mapStateToProps, mapDispatchToProps)(App);
