# 网易云音乐文档
## 简介
```
// 获得实例
getInstance();
// 获得用户歌单
fetchPlaylists(userId, limit = 100, offset = 0)
// 获得single歌单详细信息
fetchPlaylistDetails(id)
// 获得multi歌单详细信息
fetchPlaylistsDetails(ids)
// 获得歌曲详细信息
fetchSongDetails(ids)
// 搜索
search(keyword, type = 'song', suggest = false)
// 获得MV的详细信息
fetchMVInfo(MVId)
// 获得歌手专辑信息
getArtistAlbum(artistId, limit = 3)
// 获得专辑信息
fetchAlbumInfo(albumId)
// 获得歌曲歌词
fetchSongLyric(songId)

```

## 文档
- getInstance()

- fetchPlaylists(userId, limit = 100, offset = 0)

- fetchPlaylistDetails(id)

- fetchPlaylistsDetails(ids)

- fetchSongDetails(ids)

- search(keyword, type = 'song', suggest = false)

- fetchMVInfo(MVId)

- getArtistAlbum(artistId, limit = 3)

- fetchAlbumInfo(albumId)

- fetchSongLyric(songId)
