import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContentAction from '../actions/ContentAction';

class ContainerContainer extends Component {
  render() {
    return (<div>ContainerContainer</div>);
  }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...ContentAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerContainer);
