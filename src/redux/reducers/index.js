import {combineReducers} from "redux";
import { gifsReducer, photosReducer } from "./mainReducers";

const reducers = combineReducers({
    gifs:gifsReducer,
    photos:photosReducer
})

export default reducers