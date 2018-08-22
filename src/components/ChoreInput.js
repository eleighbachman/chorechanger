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

  handleSubmit = () => {
    this.setState({
      newChore: ''
    })
    this.props.addChore(this.state.newChore);
  }

  handleChange = (e) => {
    this.setState({
      newChore: e.target.value
    })
  }
  
  render() {
    return(
      <div>
        <input onChange={this.handleChange} value={this.state.newChore} type="text" className="choreInput"/><br/>
        <button onClick={this.handleSubmit} className="btn" type="submit">Submit</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addChore : addChore }, dispatch);
}

export default connect(null, mapDispatchToProps)(ChoreInput);
