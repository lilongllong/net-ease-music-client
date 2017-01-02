import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";


import configStore from "./store/store";
import PlaylistContainer from "./containers/PlaylistContainer";
import PlayerContainer from "./containers/PlayerContainer";
import TracklistContainer from "./containers/TracklistContainer";

ReactDOM.render((
    <Provider store={configStore}>
        <header>

        </header>
        <main>
            <div className="silder">
                <PlaylistContainer />
            </div>
            <div className="content">
                <TracklistContainer />
            </div>
        </main>
        <footer>
            <PlayerContainer />
        </footer>
    </Provider>
), document.getElementById("root"));
