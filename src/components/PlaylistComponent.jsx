import react, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import DelayAnimationComponent from './DelayAnimationComponent';

export default class PlaylistComponent extends Component {
  static propTypes = {
    userId: PropTypes.string.isRequired,
    playlistData: PropTypes.array,
    playlistActions: PropTypes.shape({
      setData: PropTypes.func.isRequired,
    }).isRequired,
    enityActions: PropTypes.shape({
      getEntity: PropTypes.func.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    userId: null,
    playlistData: null,
    playlistActions: null,
    enityActions: null,
  }

  state = {
    selectedId: null
  };

  componentDidMount() {
    if (!this.props.playlistData) {
      const payload = {
        data: this.props.playlistData,
        type: {
          name: 'playlists',
          id: this.props.userId,
        },
      };
      this.props.enityActions.getEntity(payload);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.playlistData) {
      const payload = {
        data: this.props.playlistData,
        type: {
          name: 'playlists',
          id: this.props.userId,
        },
      };
      this.props.enityActions.getEntity(payload);
    }
  }

  render() {
    const data = this.props.playlistData;
    if (data) {
      const items = data.map(this.createItem);
      return (<div className={classnames('nem-playlist')}>
        <ul>{items}</ul>
        </div>);
    }
    return (<div className={this.props.className}>
      <DelayAnimationComponent />
      </div>);
  }

  createItem(itemData) {
    return (<li key={`key-${itemData.id}`}>{itemData.name}</li>);
  }
}
