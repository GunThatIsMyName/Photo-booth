import { photosActionType } from "../actions/PhotoActions";

const photosState = {
  products: [],
  page:1,
  loading:false,
  error:false,
};

export const photosReducer = (state = photosState, { type, payload }) => {
  switch (type) {
    case photosActionType.SET_PHOTO:
      return {...state,products:[...state.products,...payload],loading:false,error:false};
    case photosActionType.PAGE_UPDATE_PHOTO:
      return {...state,page:state.page+1}
    case photosActionType.RESET_PHOTO:
      return photosState
    case photosActionType.LOADING_PHOTO:
      return {...state,loading:true}
    case photosActionType.ERROR_PHOTO:
      return {...state,error:true}
    default:
      return state;
  }
};
