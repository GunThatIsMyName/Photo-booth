import { photosActionType } from "../actions/PhotoActions";

const photosState = {
  products: [],
  page:1
};

export const photosReducer = (state = photosState, { type, payload }) => {
  switch (type) {
    case photosActionType.SET_PHOTO:
      return {...state,products:[...state.products,...payload]};
    case photosActionType.PAGE_UPDATE_PHOTO:
      return {...state,page:state.page+1}
    case photosActionType.RESET_PHOTO:
      return photosState
    default:
      return state;
  }
};
