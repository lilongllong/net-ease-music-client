import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HeaderContainer from '../containers/HeaderContainer';
import ContentContainer from '../containers/ContentContainer';
import PlayerContainer from '../containers/PlayerContainer';
import PlaylistContainer from '../containers/PlaylistContainer';
import SearchActions from '../actions/SearchActions';

class AppContainer extends Component
{
    render() {
        return (
            <div className="nem-main-page">
              <div className="nem-header">
                <HeaderContainer />
              </div>
              <main>
                <div className="nem-slider">
                  <PlaylistContainer />
                </div>
                <div className="nem-content">
                  <ContentContainer />
                </div>
              </main>
              <div className="nem-footer">
                <PlayerContainer />
              </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  const { user, search } = state;
  return {
    userId: user.userId,
    searchValue: search.value,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...SearchActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
