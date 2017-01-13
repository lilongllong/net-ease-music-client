# net-ease-music support service api
## fetchPlaylists(userId, limit, offset)
获取歌手的歌单列表
## fetchPlaylistDetails(id)
获取single歌单的详细内容：歌单 + info
## fetchPlaylistsDetails(ids)
获取multi歌单的详细内容：歌单 + info
## fetchSongDetails(ids)
获取歌multi歌曲信息，返回数组
## search(keyword, type, suggest)
根据search keyword 返回选定类型的歌曲，专辑， 歌单，mv，歌词，电台，用户
## fetchMVInfo(MVId)
获取MV的详细信息
## fetchArtistAlbum(artist, limit)
获取歌手的专辑列表
## fetchAlbumInfo(albumId)
获取专辑详细信息
## fetchSongLyric(songId)
获取歌曲歌词
