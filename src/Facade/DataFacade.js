import makeOptions from './Fetch';
import Config from '.././Config'
const URI = ""; //add URI here

class DataFacade {
    constructor() {
        this._data = []
    }

    get data() {
        return this._data;
    }

    setData = (data) => {
        this._data = data;
    }    

    //recommended: ComponenDidMount();
    getData = async () => {
        await fetch(Config.URL_anyObject)
            .then((header) => header.json())
            .then(body => { this._data = body });
    }

    addData = (body) => {
        return fetch(Config.URL_anyObject, makeOptions("POST", body));
    }

    editData = (body) => {
        return fetch(URL + URI, makeOptions("PUT", body));
    }

    deleteData = () => {
        return fetch(URL + URI, makeOptions("DELETE"));
    }
}




export default new DataFacade();