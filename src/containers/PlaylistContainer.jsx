import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import PlaylistComponent from '../components/PlaylistComponent';
import PlaylistActionCreator from '../actions/PlaylistActionsCreator';
import EntityActionCreator from '../actions/EntityActionsCreator';

@connect(
  state => ({ userId: state.user.userId, playlistData: state.entity.playlists[state.user.userId] }),
  dispatch => ({
    playlistActions: bindActionCreators(PlaylistActionCreator, dispatch),
    enityActions: bindActionCreators(EntityActionCreator, dispatch)
  })
)

export default class PlaylistContainer extends Component {

  static propTypes = {
    userId: PropTypes.string.isRequired,
    playlistData: PropTypes.array,
    playlistActions: PropTypes.shape({
      setData: PropTypes.func.isRequired,
    }).isRequired,
    enityActions: PropTypes.shape({
      getEntity: PropTypes.func.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    userId: null,
    playlistData: null,
    playlistActions: null,
    enityActions: null,
  }

  render() {
    return (<PlaylistComponent { ...this.props } />);
  }
}
