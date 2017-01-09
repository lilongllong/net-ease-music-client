import urlencode from "urlencode";

export default class Service
{
    _constructor()
    {
        this._basePath = "/api";
        this._uid = "77680183";
    }

    static _instance = null;
    static getInstance()
    {
        if (!Service._instance)
        {
            Service._instance = new Service();
        }
        return Service._instance;
    }

    getPlaylists(userId, limit = 100, offset = 0)
    {
        return new Promise( (resolve, reject) => {
            // const params = {
            //     headers: null
            // };
            // const dataHeader = new Headers();
            // dataHeader.append("data", JSON.stringify({
            //     uid: userId,
            //     limit,
            //     offset
            // }));
            //
            // params.headers = dataHeader;
            fetch(`/api/user/playlist?uid=${userId}&limit=${limit}&offset=${offset}`, { })
            .then(response => {
                if (response.ok)
                {
                    response.json().then(data => {
                        if (data.code === 200)
                        {
                            resolve(data.playlist);
                        }
                        else
                        {
                            reject("data failed:" + data.code);
                        }
                    });
                }
                else
                {
                    reject("network is bad!");
                }
            })
            .catch(e => {
                reject(e);
            });
        });
    }


    getPlaylistDetails(id)
    {
        // http://music.163.com/api/playlist/detail
        // data {"id": id} 或者 {"ids": [id1, id2, ...]}
        // result
        //

        return new Promise((resolve, reject) => {
            fetch(`/api/playlist/detail?id=${id}`, {})
            .then(response => {
                console.log(response);
                if (response.ok)
                {
                    response.json().then(data => {
                        if (data.code === 200)
                        {
                            resolve(data.result);
                        }
                        else
                        {
                            reject("data failed:" + data.code);
                        }
                    });
                }
                else
                {
                    reject("network is bad!");
                }
            })
            .catch(e => {
                console.log("Service network is bad!");
                reject(e);
            });
        });
    }

    async getPlaylistsDetails(ids)
    {
        if (Array.isArray(ids))
        {
            const result = Promise.all(ids.map(async (id) => {
                return await this.getPlaylistDetails(id);
            }));
            return result;
        }
        else
        {
            return false;
        }
    }

    async getSongDetails(ids)
    {
        // http://music.163.com/api/song/detail
        // data {"ids": [id1, id2, ...]}
        let params = ids;
        if (!Array.isArray(ids))
        {
            params = [ids];
        }
        return new Promise((resolve, reject) => {
            fetch(`/api/song/detail?ids=${urlencode(JSON.stringify([28377211]))}`).then(response => {
                if (response.ok)
                {
                    response.json().then(data => {
                        if (data.code === 200)
                        {
                            resolve(data.songs);
                        }
                        else
                        {
                            reject("未请求到数据");
                        }
                    });
                }
                else
                {
                    reject("request is failed");
                }

            }).catch(e => {
                reject("network is bad!" + JSON.stringify(e));
            });
        });

    }

    async searchWeb(keyword, type = "song", suggest = false)
    {
        const typeMap = {
            "songs": 1,
            "albums": 10,
            "playlists": 1000,
            "userprofiles": 1002,
            "mvs": 1004,
            "lyrics": 1006,
            "radios": 1009
        };
        if (typeMap[type] > 1004)
        {
            // 过于复杂暂不处理
            return false;
        }
        if (!keyword || !typeMap[type])
        {
            return false;
        }
        let res = null;

        try
        {
            res = await $.ajax({
                    "url": suggest ? `api/search/suggest/web` : `api/search/get/`,
                    method: "post",
                    data: {
                        s: keyword,
                        type: typeMap[type],
                        offset: 0,
                        limit: 100,
                        sub: false
                    }
                });
        }
        catch (e)
        {
            console.error("请求失败");
        }
        // console.log("res", res);
        if (res)
        {
            res = JSON.parse(res);
        }

        if (res.code === 200)
        {
            if (res.result[type])
            {
                return res.result[type];
            }
            else
            {
                return false;
            }

        }
        else
        {
            throw new Error("Response with error code:" + res.code);
        }

    }

    searchPC(word, offset = 0, limit = 100, type = "song")
    {
        // http://music.163.com/api/search/pc
        // data : {s：搜索的内容, offset：偏移量（分页用）, limit：获取的数量, type：搜索的类型 }
        // type; song 1 专辑 10 歌手 100 歌单 1000 用户 1002 mv 1004 歌词 1006 主播电台 1009
        const typeMap = {
            "song": 1,
            "album": 10,
            "playlist": 1000,
            "user": 1002,
            "mv": 1004,
            "lyric": 1006,
            "radio": 1009
        };
        return new Promise((resolve, reject) => {
            fetch(`/api/search/pc?s=${word}&offset=${offset}&limit=${limit}&type=${typeMap[type]}`).then(response => {
                if (response.ok)
                {
                    response.json().then(data => {
                        if (data.code === 200)
                        {
                            resolve(data);
                        }
                        else
                        {
                            reject("未请求到数据");
                        }
                    });
                }
                else
                {
                    reject("request is failed");
                }
            });
        });
    }
    // get mv more info
    getMVInfo(MVId)
    {
        // "http://music.163.com/api/mv/detail?id=319104&type=mp4"
        return new Promise((resolve, reject) => {
            fetch(`/api/mv/detail?id=${MVId}&type='mp4'`).then(response => {
                if (response.ok)
                {
                    response.json().then(data => {
                        if (data.code === 200)
                        {
                            resolve(data.data);
                        }
                        else
                        {
                            reject("未请求到数据");
                        }
                    });
                }
                else
                {
                    reject("request is failed");
                }
            });
        });
    }
    // 获取歌手的topn专辑
    getArtistAlbum(artistId, limit = 3)
    {
        // "http://music.163.com/api/artist/albums/" . $artist_id . "?limit=" . $limit;
        return new Promise((resolve, reject) => {
            fetch(`/api/artist/albums/${artistId}?limit=${limit}`).then(response => {
                if (response.ok)
                {
                    response.json().then(data => {
                        if (data.code === 200)
                        {
                            resolve(data.hotAlbums);
                        }
                        else
                        {
                            reject("未请求到数据");
                        }
                    });
                }
                else
                {
                    reject("request is failed");
                }
            });
        });
    }
    // 获取专辑信息
    getAlbumInfo(albumId)
    {
        // "http://music.163.com/api/album/" . $album_id;
        return new Promise((resolve, reject) => {
            fetch(`/api/album/${albumId}`).then(response => {
                if (response.ok)
                {
                    response.json().then(data => {
                        if (data.code === 200)
                        {
                            resolve(data.album);
                        }
                        else
                        {
                            reject("未请求到数据");
                        }
                    });
                }
                else
                {
                    reject("request is failed");
                }
            });
        });
    }

    getSongLyric(songId)
    {
        // "http://music.163.com/api/song/lyric?os=pc&id=" . $music_id . "&lv=-1&kv=-1&tv=-1"
        return new Promise((resolve, reject) => {
            fetch(`/api/song/lyric?os=pc&id=${songId}&lv=-1&kv=-1`).then(response => {
                if (response.ok)
                {
                    response.json().then(data => {
                        if (data.code === 200)
                        {
                            resolve(data.lrc);
                        }
                        else
                        {
                            reject("未请求到数据");
                        }
                    });
                }
                else
                {
                    reject("request is failed");
                }
            });
        });
    }
}
