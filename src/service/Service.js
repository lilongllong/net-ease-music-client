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
        console.log("28377211 %5B28377211%5D", urlencode(JSON.stringify([28377211])));
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

    async search(keyword, suggest = false)
    {
        let res = null;

        try
        {
            res = await $.ajax({
                    "url": suggest ? `api/search/suggest/web` : `api/search/get/`,
                    method: "post",
                    data: {
                        s: keyword,
                        type: 1,
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

        if (res)
        {
            res = JSON.parse(res);
        }

        if (res.code === 200)
        {
            if (res.result.songs)
            {
                return res.result.songs;
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

    // 获取歌手专辑列表拍
    getSingerAlbum(id)
    {
        // GET http://music.163.com/api/artist/albums/[artist_id]/
        // example  "http://music.163.com/api/artist/albums/10557?offset=0&limit=3"
        if (!id)
        {
            return false;
        }
        return new Promise((resolve, reject) => {
            fetch(`api/artist/albums/${id}?offset=0&limit=5`, {}).then(response => {
                if (response.ok)
                {
                    response.json().then();
                }
                else
                {
                    reject("network is bad");
                }
            });
        });
    }
}
