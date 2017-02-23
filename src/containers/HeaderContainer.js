import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import HeaderComponent from '../components/HeaderComponent';
import searchActionsCreator from '../actions/SearchActionsCreator';

@connect(
  state => ({ userId: state.user.userId, searchValue: state.search.searchValue }),
  (dispatch, props) => ({actions: bindActionCreators(searchActionsCreator, dispatch)}),
)

export default class HeaderContainer extends Component
{
  static propTypes = {
    userId: PropTypes.string,
    searchValue: PropTypes.string,
  };

  render() {
    const newProps = { className: 'nem-header'};
    return (<HeaderComponent {...this.props} {...newProps} />);
  }
}
