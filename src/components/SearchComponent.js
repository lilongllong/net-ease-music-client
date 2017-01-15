import react, { Component, PropTypes } from "react";

export default class SearchComponent extends Component
{
    constructor(args)
    {
        super(args);
        this.timer = null;
    }

    static PropTypes = {
        placeholder: PropTypes.string,
        value: PropTypes.string.isRequired,
        onInputChange: PropTypes.string.isRequired
    };

    static defaultProps = {
        placeholder: "please input",
        value: ""
    };

    state = {
        value: ""
    };

    componentWillReceiveProps(nextProps)
    {
        this.setState({
            value: nextProps.value
        });
    }

    render()
    {
        return (<input type="search" placeholder={this.props.placeholder} value={this.state.value} onChange={this._onInptuChange.bind(this)}/>);
    }

    _onInptuChange(event)
    {
        const target = event.currentTarget;
        const value = target.value;

        if (this.timer)
        {
            clearTimeout(this.timer);
            this.timer = null;
        }
        if (value)
        {
            this.timer = setTimeout(() => {
                this.props.onInputChange(value);
            }, 300);
        }
    }
}
