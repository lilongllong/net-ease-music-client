import React from 'react';

import HeaderContainer from '../containers/HeaderContainer';
import ContentContainer from '../containers/ContentContainer';
import PlayerContainer from '../containers/PlayerContainer';
import PlaylistContainer from '../containers/PlaylistContainer';

export default function AppContainer() {
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
