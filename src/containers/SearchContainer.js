import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchActions from '../actions/SearchActions';

class SearchContainer extends Component {
  render() {
    return (<div>SearchContainer</div>);
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...SearchActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
