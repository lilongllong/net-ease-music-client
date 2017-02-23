import react, { Component, PropTypes } from 'react';

import SearchView from './SearchComponent';

export default class HeaderComponent extends Component {
  static PropTypes = {
    className: PropTypes.string,
    userId: PropTypes.string.isRequired,
    searchValue: PropTypes.string.isRequired,
    search: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: 'nem-header',
    userId: null,
    searchValue: ''
  };

  state = {
    value: null
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        searchValue: nextProps.searchValue
      });
    }
  }

  render() {
    console.log(this.props);
    return (<div className={this.props.className}>
            <div className='nem-logal'></div>
            <SearchView placeholder='请输入歌曲名' value={this.state.searchValue ? this.state.searchValue : ''} onInputChange={this.props.actions.search}/>
            <div className='nem-user'>{this.props.userId}</div>
        </div>);
  }
}
