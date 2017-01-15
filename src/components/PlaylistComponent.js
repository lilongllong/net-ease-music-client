import react, { Component, PropTypes } from "react";

export default class PlaylistComponent extends Component
{
    static PropTypes = {
        propsName: PropTypes.string,
    };

    static defaultProps = {
        propsName: "",
    };

    state = {

    };

    componentWillReceiveProps(nextProps)
    {

    }

    render()
    {
        return (<div></div>);
    }
}
