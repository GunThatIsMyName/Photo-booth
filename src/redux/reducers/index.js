import {combineReducers} from "redux";

// Reducers
import { gifsReducer } from "./gifsReducers";
import { mainReducer } from "./mainReducers";
import { photosReducer } from "./photosReducers";

const reducers = combineReducers({
    gifs:gifsReducer,
    photos:photosReducer,
    main:mainReducer,
})

export default reducers