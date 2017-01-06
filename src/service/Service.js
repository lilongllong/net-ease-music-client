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
                console.log(response);
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

    getSongDetails(ids)
    {
        // data {"ids": [id1, id2, ...]}

    }
}
