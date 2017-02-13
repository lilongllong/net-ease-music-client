import react, { Component, PropTypes } from 'react';

export default class PlaylistComponent extends Component {
    constructor(props) {

    }

    static propTypes = {
      playlistData: PropTypes.array.isRequired,
      className: PropTypes.string,
    };

    static defaultProps = {
      playlistData: [],
      className: 'nem-playlist',
    };

    state = {
      selectedId: null;
    };

    componentWillReceiveProps(nextProps) {
      const mockData = [{
        id: '123',
        name: '123playlist',
        trasks: [{id: '123-1', name: '123-name', songer:'123-user'}]
      }];
    }

    render() {
      const mockData = [{
        id: '123',
        name: '123playlist',
        trasks: [{id: '123-1', name: '123-name', songer:'123-user'}]
      }];
      const items = mockData.map(itemData => {
        this._createItem(itemData);
      });
      return (<div className={this.props.className}>
        <ul>{items}</ul>
        </div>);
    }

    _createItem(itemData) {
      return (<li key={`key-${itemData.id}`}>{itemData.name}</li>);
    }
}
