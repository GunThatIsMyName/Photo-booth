import { gifsActionType } from "../actions/GifsActions";

const gifsState = {
  products: [],
  limit:0
};

export const gifsReducer = (state = gifsState, { type, payload }) => {
  switch (type) {
    case gifsActionType.SET_GIF:
      return {...state,products:[...state.products,...payload]};
    case gifsActionType.PAGE_UPDATE_GIF:
      return {...state,limit:state.limit+20};
    case gifsActionType.RESET_GIF:
        return gifsState
    default:
      return state;
  }
};
