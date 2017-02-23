import react, { Component, PropTypes } from 'react';

export default class PlaylistComponent extends Component {
    constructor(props) {
      super(props);
    }

    static propTypes = {
      playlistId: PropTypes.string.isRequired,
      data: PropTypes.object,
      selectedType: PropTypes.oneOf(['audio', 'recommendation', 'play']),
      className: PropTypes.string,
    };

    static defaultProps = {
      playlistId: null,
      data: null,
      selectedType: null,
      className: '',
    };

    state = {
      selectedId: null
    };

    componentWillReceiveProps(nextProps) {

    }

    render() {
      const mockData = [{
        id: '123',
        name: '123playlist',
        trasks: [{id: '123-1', name: '123-name', songer:'123-user'}]
      }];
      const items = mockData.map(itemData => {
        return this._createItem(itemData);
      });
      return (<div className={this.props.className}>
        <ul>{items}</ul>
        </div>);
    }

    _createItem(itemData) {
      return (<li key={`key-${itemData.id}`}>{itemData.name}</li>);
    }
}
