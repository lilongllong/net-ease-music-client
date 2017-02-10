import md5 from 'md5';

export default class UserModel {
    constructor(props) {
        if (props && props.type === 'phone' && props.phone && props.password) {
            this.type = props.type;
            this.phone = props.phone;
            this.password = props.password;
            this.loginUrl = '/weapi/login/cellphone/';
        } else if (props && props.type === 'username' && props.username && props.password) {
            this.type = props.type;
            this.username = props.username;
            this.password = props.password;
            this.loginUrl = '/weapi/login/';
        } else {
            this._initDefaultUser();
        }
    }

    _initDefaultUser() {
        this.type = 'phone';
        this.phone = '15950580528';
        this.password = '580528';
        this.loginUrl = '/weapi/login/cellphone/';
    }

    serializeData() {
        const textObj = {
            phone: this.phone,
            password: md5(this.password),
            rememberLogin: true,
            csrf_token: '3f053fd8a3aa37f56dd0ec02405e5e99',
        };

        const setOpt = {
            Text: JSON.stringify(textObj),
            pubKey: '010001',
            nonce: '0CoJUm6Qyw8W8jud',
            modulus: '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7',
        };
        const passObj = aesRsaEncrypt(setOpt.Text, setOpt.pubKey, setOpt.modulus, setOpt.nonce);

        if (this.type === 'phone') {
            return {
                params: passObj.encText,
                encSecKey: passObj.encSecKey,
            };
        }

        return {
            params: passObj.encText,
            encSecKey: passObj.encSecKey,
        };
    }

    login() {

    }
}
