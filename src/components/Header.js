import react, { Component, PropTypes } from "react";

import SearchView from "./SearchView";
import Service from "../service/Service";

export default class Header extends Component
{
    static PropTypes = {
        className: PropTypes.string,
        userId: PropTypes.string.isRequired,
        searchValue: PropTypes.string.isRequired,
        searchSong: PropTypes.func.isRequired
    };

    static defaultProps = {
        className: "nem-header",
        userId: null,
        searchValue: ""
    };

    state = {
        value: null
    };

    componentWillReceiveProps(nextProps)
    {
        if (nextProps)
        {
            this.setState({
                searchValue: nextProps.searchValue
            });
        }
    }

    render()
    {
        // Service.getInstance().getPlaylists(40652589).then(data => {
        //     console.log("data", data);
        // });
        // const playlistIds = [104029648, 34176019];
        // Service.getInstance().getPlaylistDetails(104029648).then(data => {
        //     console.log("data", data);
        // });
        // Service.getInstance().getPlaylistsDetails(playlistIds).then(data => {
        //     console.log("data", data);
        // });

        const songIds = [1234653, 1234667];
        // Service.getInstance().search("一次就好").then(data => {
        //     console.log("data", data);
        // });

        Service.getInstance().getSongDetails(songIds).then(data => {
            console.log(data, "songdata");
        });


        return (<div className={this.props.className}>
                <div className="nem-logal"></div>
                <SearchView placeholder="请输入歌曲名" value={this.state.searchValue ? this.state.searchValue : ""} onInputChange={this.props.searchSong.bind(this)}/>
                <div className="nem-user">{this.props.userId}</div>
            </div>);
    }
}
