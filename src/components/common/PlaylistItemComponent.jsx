import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

export default class PlaylistItemComponent extends Component {
  static propTypes = {
    className: PropTypes.oneOf(['private', 'collection', 'suggestion']),
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      list: PropTypes.array.isRequired,
      selectedId: PropTypes.string,
    }),
    clickHandler: PropTypes.func
  }

  static defaultProps = {
    className: null,
    data: null,
    clickHandler: null,
  }

  createItem(data, selectedId) {
    const $lis = data.map((item)=> {
      return (<li className='item' key={item.id}>
        <span className={cn('selected-bar', { 'selected': item.id === selectedId })}/>
        <span className='item-content'>{item.name}</span>
      </li>)
    });
    return $lis;
  }

  render() {
    if (this.props.data) {
      return (<div className={cn("playlist-item-block", this.props.className)}>
        <div className='title'>{this.props.data.title}</div>
        <ul className='playlist'>{this.createItem(this.props.data.list, this.props.data.selectedId)}</ul>
      </div>);
    }
    return (<div />);
  }

}
