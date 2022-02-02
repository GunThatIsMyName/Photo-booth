import {combineReducers} from "redux";

// Reducers
import { gifsReducer } from "./gifsReducers";
import { photosReducer } from "./photosReducers";

const reducers = combineReducers({
    gifs:gifsReducer,
    photos:photosReducer
})

export default reducers