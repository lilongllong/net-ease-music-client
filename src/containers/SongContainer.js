import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SonglistAction from '../actions/SonglistAction';

class SonglistContainer extends Component {
  render() {
    return (<div>SonglistContainer</div>);
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...SonglistAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SonglistContainer);
