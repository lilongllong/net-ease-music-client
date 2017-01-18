import react, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../containers/HeaderContainer';
import SearchActions from '../actions/SearchActions';

class MainContainer extends Component
{
    render() {
        return (
            <div className="nem-main-page">
                <Header />
                  <main>
                    <div className="nem-slider">
                    </div>
                    <div className="nem-content">
                    </div>
                  </main>
                <div className="nem-footer"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
