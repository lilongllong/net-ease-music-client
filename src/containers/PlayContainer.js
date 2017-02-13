import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PlayAction from '../actions/PlayAction';

class PlayContainer extends Component {
  render() {
    return (<div></div>);
  }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...PlayAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayContainer);
