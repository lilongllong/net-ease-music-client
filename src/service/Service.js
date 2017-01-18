import urlencode from 'urlencode';

export default class Service {
    _constructor() {
        this._basePath = '/api';
        this._uid = '77680183';
    }

    static _instance = null;
    static getInstance() {
        if (!Service._instance) {
            Service._instance = new Service();
        }
        return Service._instance;
    }

    fetchPlaylists(userId, limit = 100, offset = 0) {
        return new Promise( (resolve, reject) => {
            fetch(`/api/user/playlist?uid=${userId}&limit=${limit}&offset=${offset}`, { })
            .then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        if (data.code === 200) {
                            resolve(data.playlist);
                        }
                        else {
                            reject('data failed:' + data.code);
                        }
                    });
                }
                else {
                    reject('network is bad!');
                }
            })
            .catch(e => {
                reject(e);
            });
        });
    }

    fetchPlaylistDetails(id) {
        // http://music.163.com/api/playlist/detail
        // data {'id': id} 或者 {'ids': [id1, id2, ...]}

        return new Promise((resolve, reject) => {
            fetch(`/api/playlist/detail?id=${id}`, {})
            .then(response => {
                console.log(response);
                if (response.ok) {
                    response.json().then(data => {
                        if (data.code === 200) {
                            resolve(data.result);
                        }
                        else {
                            reject('data failed:' + data.code);
                        }
                    });
                }
                else {
                    reject('network is bad!');
                }
            })
            .catch(e => {
                console.log('Service network is bad!');
                reject(e);
            });
        });
    }

    async fetchPlaylistsDetails(ids) {
        if (Array.isArray(ids)) {
            const result = Promise.all(ids.map(async (id) => {
                return await this.fetchPlaylistDetails(id);
            }));
            return result;
        }
        else {
            return false;
        }
    }

    async fetchSongDetails(ids) {
        // http://music.163.com/api/song/detail
        // data {'ids': [id1, id2, ...]}
        let params = ids;
        if (!Array.isArray(ids)) {
            params = [ids];
        }
        return new Promise((resolve, reject) => {
            fetch(`/api/song/detail?ids=${urlencode(JSON.stringify(params))}`).then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        if (data.code === 200) {
                            resolve(data.songs);
                        }
                        else {
                            reject('未请求到数据');
                        }
                    });
                }
                else {
                    reject('request is failed');
                }
            }).catch(e => {
                reject('network is bad!' + JSON.stringify(e));
            });
        });

    }

    async search(keyword, type = 'song', suggest = false) {
        const typeMap = {
            'songs': 1,
            'albums': 10,
            'playlists': 1000,
            'userprofiles': 1002,
            'mvs': 1004,
            'lyrics': 1006,
            'radios': 1009
        };
        if (typeMap[type] > 1004) {
            // 过于复杂暂不处理
            return false;
        }
        if (!keyword || !typeMap[type]) {
            return false;
        }
        let res = null;

        try
        {
            res = await $.ajax({
                    'url': suggest ? `api/search/suggest/web` : `api/search/get/`,
                    method: 'post',
                    data: {
                        s: keyword,
                        type: typeMap[type],
                        offset: 0,
                        limit: 100,
                        sub: false
                    }
                });
        }
        catch (e) {
            console.error('请求失败');
        }
        // console.log('res', res);
        if (res) {
            res = JSON.parse(res);
        }

        if (res.code === 200) {
            if (res.result[type]) {
                return res.result[type];
            }
            else {
                return false;
            }

        }
        else {
            throw new Error('Response with error code:' + res.code);
        }

    }
    // get mv more info
    fetchMVInfo(MVId) {
        // 'http://music.163.com/api/mv/detail?id=319104&type=mp4'
        return new Promise((resolve, reject) => {
            fetch(`/api/mv/detail?id=${MVId}&type='mp4'`).then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        if (data.code === 200) {
                            resolve(data.data);
                        }
                        else {
                            reject('未请求到数据');
                        }
                    });
                }
                else {
                    reject('request is failed');
                }
            });
        });
    }
    // 获取歌手的topn专辑
    getArtistAlbum(artistId, limit = 3) {
        // 'http://music.163.com/api/artist/albums/' . $artist_id . '?limit=' . $limit;
        return new Promise((resolve, reject) => {
            fetch(`/api/artist/albums/${artistId}?limit=${limit}`).then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        if (data.code === 200) {
                            resolve(data.hotAlbums);
                        }
                        else {
                            reject('未请求到数据');
                        }
                    });
                }
                else {
                    reject('request is failed');
                }
            });
        });
    }
    // 获取专辑信息
    fetchAlbumInfo(albumId) {
        // 'http://music.163.com/api/album/' . $album_id;
        return new Promise((resolve, reject) => {
            fetch(`/api/album/${albumId}`).then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        if (data.code === 200) {
                            resolve(data.album);
                        }
                        else {
                            reject('未请求到数据');
                        }
                    });
                }
                else {
                    reject('request is failed');
                }
            });
        });
    }

    fetchSongLyric(songId) {
        // 'http://music.163.com/api/song/lyric?os=pc&id=' . $music_id . '&lv=-1&kv=-1&tv=-1'
        return new Promise((resolve, reject) => {
            fetch(`/api/song/lyric?os=pc&id=${songId}&lv=-1&kv=-1`).then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        if (data.code === 200) {
                            resolve(data.lrc);
                        }
                        else {
                            reject('未请求到数据');
                        }
                    });
                }
                else {
                    reject('request is failed');
                }
            });
        });
    }
}
