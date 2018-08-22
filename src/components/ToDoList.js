import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearChores, completeChore, setActive, archiveActive } from '../actions';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class ToDoList extends Component {
  renderList() {
    return this.props.chores.map((chore, index) => {
      return (
        <li onClick={() => this.props.completeChore(chore)} key={index}>{chore}</li>
      )
    });
  }

  setChore = () => {
    let random = _.random(this.props.chores.length - 1);
    let randomChore = this.props.chores[random];
    if(this.props.activeChore !== '') {
      this.props.archiveActive(this.props.activeChore);
    }
    this.props.setActive(randomChore);

  }

  render() {
    return (
      <div className="list chores">
        <h2>Chores To Do</h2>
        <ul>
          {this.renderList()}
        </ul>

        { this.props.chores.length > 0 ? <button className='btn' onClick={this.setChore}>Start</button> : "Add more chores!"}
        { this.props.chores.length > 0 ? <button className="btn" onClick={() => this.props.clearChores()}>Clear</button> : ""}

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearChores : clearChores, completeChore: completeChore, setActive: setActive, archiveActive: archiveActive }, dispatch);
}

function mapStateToProps(state) {
  return {
    chores: state.chores,
    completedChores: state.completedChores,
    activeChore: state.activeChore,
    running: state.running
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
