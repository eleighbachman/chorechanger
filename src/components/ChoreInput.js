import React, { Component } from 'react';
import { addChore } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChoreInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newChore: ''
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.newChore !== '') {
    this.setState({
      newChore: ''
    })
    this.props.addChore(this.state.newChore);
  }
  }

  handleChange = (e) => {
    this.setState({
      newChore: e.target.value
    })

  }


  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.newChore} type="text" className="choreInput"/><br/>

          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addChore : addChore }, dispatch);
}

export default connect(null, mapDispatchToProps)(ChoreInput);
