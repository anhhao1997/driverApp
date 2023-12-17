const stateDefault = {
    infoLogin: {},
    driver: {},
};
export const ReducerDriver = (state = stateDefault, action) => {

    switch (action.type) {
        case "login": {
            const infoLogin = action.data;
            console.log("infoLogin: ", infoLogin);
            return { ...state, infoLogin: infoLogin };
        }

        case "get": {
            const driver = action.data;
            return { ...state, driver: driver };
        }

        case "register": {
            
            return { ...state };
        }

        case "updateDriver": {

            return { ...state };
        }
        case "updatePassword": {

            return { ...state };
        }

        default:
            return { ...state };
    }
};