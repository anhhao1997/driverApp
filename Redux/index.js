import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { ReducerDriver } from './Reducer/ReducerDriver';
const rootReducer = combineReducers({
    // state ứng dụng
    ReducerDriver: ReducerDriver,
});

// Cấu hình thunk
const middleWare = applyMiddleware(thunk);

const customCompose = compose(middleWare);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(rootReducer, customCompose);
