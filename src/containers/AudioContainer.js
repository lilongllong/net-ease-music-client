import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AudioAction from '../actions/AudioAction';

class AudioContainer extends Component {
  render() {
    return (<div>AudioContainer</div>);
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...AudioAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioContainer);
