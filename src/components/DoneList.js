import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetChores, undoChore } from '../actions';

class DoneList extends Component {

  renderList() {
    return this.props.completedChores.map((chore, index) => {
      return (
        <li onClick={() => this.props.undoChore(chore)} key={index}>{chore}</li>
      )
    });
  }

  render() {
    return (
      <div className="list done">
        <h2>Completed Chores</h2>
        <ul>
         {this.renderList()}
        </ul>
        {this.props.completedChores.length > 0 ? <button className="btn" onClick={() => this.props.resetChores(this.props.completedChores)}>Reset</button> : "Complete some chores!"}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    completedChores: state.completedChores
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetChores : resetChores, undoChore: undoChore }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DoneList);
