import { driverService } from "../../Services/DriverService";

export const loginAction = (data) => {
    return async (dispatch) => {
        try {

            const result = await driverService.login(data);
            if (result.data.status === "success") {
                const action = {
                    type: "login",
                    data: result.data,
                };
                dispatch(action);
            }
        } catch (error) {
            console.log("error", error.response);
        }
    };
};

export const getDriverAction = (token) => {
    return async (dispatch) => {
        try {
            const result = await driverService.getProfile(token);
            if (result.data.status == "success") {
                const action = {
                    type: "get",
                    data: result.data,
                };
                dispatch(action);
            }
        } catch (error) {
            console.log("error", error.response);
        }
    };
};

export const registerAction = (data) => {
    return async (dispatch) => {
        try {
            const result = await driverService.register(data);

            if (result.data.status === "success") {
                const action = {
                    type: "register",
                    data: result.data,
                };
                dispatch(action);
            }

            // console.log("result", result);
        } catch (error) {
            console.log("error", error.response);
        }
    };
};

export const updatePasswordAction = (data) => {
    return async (dispatch) => {
        try {
            const result = await driverService.updatePassword(data);

            if (result.data.status === "success") {
                const action = {
                    type: "updatePassword",
                    data: result.data,
                };
                dispatch(action);
            }

            // console.log("result", result);
        } catch (error) {
            console.log("error", error.response);
        }
    };
};

export const updateDriverAction = (data) => {
    return async (dispatch) => {
        try {
            const result = await driverService.updateDriver(data);

            if (result.data.status === "success") {
                const action = {
                    type: "updateDriver",
                    data: result.data,
                };
                dispatch(action);
            }

            // console.log("result", result);
        } catch (error) {
            console.log("error", error.response);
        }
    };
};

export const logoutAction = () => {
    return async () => {
        try {
            const result = await driverService.logout();

            // console.log("result", result);
        } catch (error) {
            console.log("error", error.response);
        }
    };
};
