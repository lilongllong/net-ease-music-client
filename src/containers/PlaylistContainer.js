import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PlaylistAction from '../actions/PlaylistAction';
import PlaylistComponent from '../components/PlaylistComponent';

class PlaylistContainer extends Component {
  render() {
    return (<PlaylistComponent {...this.props} />);
  }
}

function mapStateToProps(state) {
  const viewstate = state.common.viewState;
  const playlist = state.playlist;
  return {
    selectedType: viewstate.mainContentShow,
    playlistId: playlist.playlistId,
    data: playlist.entity,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...PlaylistAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer);
