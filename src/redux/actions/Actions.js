export const gifsActionType = {
    SET_GIF:"SET_GIF",
    PAGE_UPDATE_GIF:"PAGE_UPDATE_GIF",
    PAGE_RESET_GIF:"PAGE_RESET_GIF",
    RESET_GIF:"RESET_GIF",
}
export const photosActionType = {
    SET_PHOTO:"SET_PHOTO",
    PAGE_UPDATE_PHOTO:"PAGE_UPDATE_PHOTO",
    PAGE_RESET_PHOTO:"PAGE_RESET_PHOTO",
    RESET_PHOTO:"RESET_PHOTO",
}

// GIFS ACTIONS
export const setGifs = (items)=>{
    return{
        type:"HELLO",
        payload:items
    };
}

// PHOTOS ACTIONS
export const setPhotos = (items)=>{
    return{
        type:photosActionType.SET_PHOTO,
        payload:items
    };
}