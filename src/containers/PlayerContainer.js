import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PlayerAction from '../actions/PlayerAction';

class PlayerContainer extends Component {
  render() {
    return (<div>PlayerContainer</div>);
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...PlayerAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
