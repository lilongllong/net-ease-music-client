import react, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import DelayAnimationComponent from './DelayAnimationComponent';
import PlaylistItemComponent from './common/PlaylistItemComponent';

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
    console.log(data, 'data');
    if (data) {
      // later 处理 加载
      const suggestionListData = {
        title: '推荐',
        list: [{id: 'discover music', name: '发现音乐'}, { id: 'private FM', name: '私人FM'}],
        selectedId: 'discover music',
      };

      const privateListData = {
        title: '创建的歌单',
        list: data.filter(item => parseInt(item.userId) === parseInt(this.props.userId)),
        selectedId: null
      };

      const collectionListData = {
        title: '收藏的歌单',
        list: data.filter(item => parseInt(item.userId) !== parseInt(this.props.userId)),
        selectedId: null,
      };

      return (<div className={classnames('nem-playlist')}>
        <PlaylistItemComponent className='suggestion' data={suggestionListData} />
        <PlaylistItemComponent className='private' data={privateListData} />
        <PlaylistItemComponent className='collection' data={collectionListData} />
      </div>);
    }
    // lack of data and render DelayAnimationComponent
    return (<div className={this.props.className}>
      <DelayAnimationComponent />
      </div>);
  }

  createItem(itemData) {
    return (<li key={`key-${itemData.id}`}>{itemData.name}</li>);
  }
}
