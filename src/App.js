import React, { Component } from 'react';
import ChoreInput from './components/ChoreInput';
import ToDoList from './components/ToDoList';
import DoneList from './components/DoneList';
import CurrentChore from './components/CurrentChore';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import './App.css';

const store = createStore(reducers, {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Chore Changer</h1>
          </header>
          <p className="instruction">
            Enter in your chores to the list below, then click START to randomly select one.
          </p>
          <p className="subtext">
            Completed chores will move to the completed list. Click RESET to start over.
          </p>
          <div className="project">
            <ChoreInput />
            <CurrentChore />
            <div className="lists">
              <ToDoList />
              <DoneList />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
