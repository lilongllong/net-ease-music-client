import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PlaylistAction from '../actions/PlaylistAction';

class PlaylistContainer extends Component {
  render() {
    return (<div>PlaylistContainer</div>);
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...PlaylistAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer);
