import makeOptions, { authToken } from '../Facade/Fetch';
import Config from '../Config'

class UserFacade {


    async authLogin(user, pass) {
        let loginObject = { username: user, password: pass }
        let loggedObject = await fetch(Config.URL_auth, makeOptions("POST", loginObject))
            .then(header => header.json());
        let userInfo = await fetch(Config.URL_loggedIn, authToken("GET", loggedObject.token))
            .then(header => header.json())

        return userInfo;
    }    
}

//loggedObject["username"] = body.username;
//loggedObject["token"] = body.token;

export default new UserFacade();