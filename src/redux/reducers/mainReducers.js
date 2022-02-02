import { mainActionType } from "../actions/MainAction";


const mainState={
    search:"",
}

export const mainReducer=(state=mainState,{type,payload})=>{
    switch (type) {
        case mainActionType.SET_SEARCH:
            return {search:payload}
        default:
            return state;
    }
}