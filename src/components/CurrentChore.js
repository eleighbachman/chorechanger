import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { setActive, archiveActive } from '../actions';
import { bindActionCreators } from 'redux';


class CurrentChore extends Component {

  handleSet = () => {
    if(this.props.chores.length > 0) {
      this.setChore()
    } else if (this.props.chores.length === 0){
      this.props.archiveActive(this.props.activeChore);
      this.props.setActive('');
    }
  }
  setChore = () => {
    let random = _.random(this.props.chores.length - 1);
    let randomChore = this.props.chores[random];
    if(this.props.activeChore !== '') {
      console.log(this.props.activeChore);
      this.props.archiveActive(this.props.activeChore);
    }

    this.props.setActive(randomChore);

  }

  renderBlock = () => {
    if(this.props.activeChore !== '') {
      return(
        <div onClick={this.handleSet} className="currentChore">
          {this.props.activeChore ? this.props.activeChore : "Click Start"}
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        {this.renderBlock()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    chores: state.chores,
    activeChore: state.activeChore
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActive: setActive, archiveActive: archiveActive }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentChore);
