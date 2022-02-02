export const mainActionType = {
    SET_SEARCH:"SET_SEARCH",
    RESET_SEARCH:"RESET_SEARCH",
}

export const setSearchKeyword = (keyword)=>{
    return {
        type:mainActionType.SET_SEARCH,
        payload:keyword
    }
}
export const resetSearch = ()=>{
    return {
        type:mainActionType.RESET_SEARCH,
    }
}