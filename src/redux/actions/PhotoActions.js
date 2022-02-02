export const photosActionType = {
    SET_PHOTO:"SET_PHOTO",
    PAGE_UPDATE_PHOTO:"PAGE_UPDATE_PHOTO",
    PAGE_RESET_PHOTO:"PAGE_RESET_PHOTO",
    RESET_PHOTO:"RESET_PHOTO",
    LOADING_PHOTO:"LOADING_PHOTO",
    ERROR_PHOTO:"ERROR_PHOTO",
}

// PHOTOS ACTIONS
export const setPhotos = (items)=>{
    return{
        type:photosActionType.SET_PHOTO,
        payload:items
    };
}
export const updatePhotos = ()=>{
    return{
        type:photosActionType.PAGE_UPDATE_PHOTO,
    };
}
export const resetPhotos = ()=>{
    return{
        type:photosActionType.RESET_PHOTO,
    };
}
export const loadingPhotos = ()=>{
    return{
        type:photosActionType.LOADING_PHOTO,
    };
}
export const errorPhotos = ()=>{
    return{
        type:photosActionType.ERROR_PHOTO,
    };
}