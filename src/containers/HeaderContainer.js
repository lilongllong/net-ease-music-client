import react, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import * as SearchActions from '../actions/SearchActions';

class HeaderContainer extends Component
{
    render()
    {
        return (<Header { ...this.props } />);
    }
}

function mapStateToProps(state)
{
    const { user, search } = state;
    return {
        userId: user.userId,
        searchValue: search.searchValue
    };
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({ ...SearchActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
