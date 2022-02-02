import { gifsActionType } from "../actions/GifsActions";

const gifsState = {
  products: [],
  limit:0,
  loading:false,
  error:false,
};

export const gifsReducer = (state = gifsState, { type, payload }) => {
  switch (type) {
    case gifsActionType.SET_GIF:
      return {...state,products:[...state.products,...payload],error:false,loading:false};
    case gifsActionType.PAGE_UPDATE_GIF:
      return {...state,limit:state.limit+12};
    case gifsActionType.RESET_GIF:
        return gifsState
    case gifsActionType.LOADING_GIF:
      return {...state,loading:true}
    case gifsActionType.ERROR_GIF:
      return {...state,loading:false,error:true}
    default:
      return state;
  }
};
