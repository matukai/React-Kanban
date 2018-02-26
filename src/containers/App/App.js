import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
//ACTIONS
import { loadCards, setCard} from '../../actions';
//COMPONENTS
import CreateCard from '../../components/CreateCard';
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
        <CreateCard userInput={this.props.userInput}/>
        <CardsList cards={this.props.cards}/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    cards: state.cards.cards
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
