// GIFS ACTIONS

export const gifsActionType = {
    SET_GIF:"SET_GIF",
    PAGE_UPDATE_GIF:"PAGE_UPDATE_GIF",
    PAGE_RESET_GIF:"PAGE_RESET_GIF",
    RESET_GIF:"RESET_GIF",
    LOADING_GIF:"LOADING_GIF",
    ERROR_GIF:"ERROR_GIF"
}

export const setGifs = (items)=>{
    return{
        type:gifsActionType.SET_GIF,
        payload:items
    };
}
export const updateGifs = ()=>{
    return{
        type:gifsActionType.PAGE_UPDATE_GIF,
    };
}
export const resetGifs = ()=>{
    return{
        type:gifsActionType.RESET_GIF,
    };
}
export const loadingGifs = ()=>{
    return{
        type:gifsActionType.LOADING_GIF,
    };
}
export const errorGifs = ()=>{
    return{
        type:gifsActionType.ERROR_GIF,
    };
}
