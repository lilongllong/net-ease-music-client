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

    getPlaylists(userId, limit = 100, offset: 0)
    {
        return new Promise( (resolve, reject) => {
            fetch(`/api/user/playlist`, {
                data: {
                    uid: userId,
                    offset: 0,
                    limit: 1000
                }
            })
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
            })
            .catch(e => {
                reject(e);
            });
        });
    }


    getPlaylistDetails(ids)
    {
        // http://music.163.com/api/playlist/detail
        // data {"id": id} 或者 {"ids": [id1, id2, ...]}
        // result
        //
        const data = null;
        if (!Array.isArray(ids))
        {
            data.id = ids;
        }
        else
        {
            data.ids = ids;
        }

        const params = {
            data,

        }
        return new Promise((resolve, reject) => {
            fetch(this._basePath + "/api/playlist/detail", params)
            .then(response => {
                if (response.ok)
                {

                }
                else
                {

                }
            })
            .catch(e => {
                console.log("Service network is bad!");
                reject(e);
            });
        });
    }

    getSongDetails(ids)
    {
        // data {"ids": [id1, id2, ...]}

    }
}
