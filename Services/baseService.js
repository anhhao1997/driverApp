import Axios from "axios";
import { DOMAIN, token } from "../setting/config";
export class baseService {
    //put json về phía backend
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data : model,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            } //JWT
        })
    }

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data : model,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            } //JWT
        })
    }


    get = (url, tokenNew) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + tokenNew,
                'Content-Type': 'application/json'
            } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
}