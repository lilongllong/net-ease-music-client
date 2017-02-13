import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RecommendationAction from '../actions/RecommendationAction';

class RecommendationContainer extends Component {
  render() {
    return (<div>RecommendationContainer</div>);
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...RecommendationAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendationContainer);
