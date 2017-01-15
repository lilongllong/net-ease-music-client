import react, { Component, PropTypes } from 'react';

export default class SongComponent extends Component
{
    static PropTypes = {
        propsName: PropTypes.string,
    };

    static defaultProps = {
        propsName: '',
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
