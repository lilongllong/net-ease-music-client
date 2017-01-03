import react, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../containers/HeaderContainer";
import SearchActions from "../actions/SearchActions";

class MainContainer extends Component
{
    render()
    {
        return (
            <div className="nem-main-page">
                <Header />
            </div>
        );
    }
}

function mapStateToProps(state)
{
    const { user, search } = state;
    return {
        userId: user.userId,
        searchValue: search.value
    };
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({ ...SearchActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
