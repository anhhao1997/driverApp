import { baseService } from "./baseService";

export class DriverService extends baseService {
    constructor() {
        super();
    }

    login = (data) => {
        return this.post(`api/v1/auth/login`, data);
    }

    register = (data) => {
        return this.post(`api/v1/auth/driver/register`, data);
    }

    updateDriver = (data) => {
        return this.put(`/api/v1/driver/updatedetails`, data);
    }

    updatePassword = (data) => {
        return this.put(`api/v1/auth/updatepassword`, data);
    }

    getProfile = (token) => {
        return this.get(`api/v1/driver/getprofile`, token);
    }

    logout = () => {
        return this.post(`api/v1/auth/logout`);
    }
}

export const driverService = new DriverService();