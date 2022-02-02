import { gifsActionType, photosActionType } from "../actions/Actions";

const gifsState = {
  products: [],
};

export const gifsReducer = (state = gifsState, { type, payload }) => {

    const {products}=state;

  switch (type) {
    case "HELLO":
      return {...state,products:[...payload]};
    default:
      return state;
  }
};

const photosState = {
  products: [],
};

export const photosReducer = (state = photosState, { type, payload }) => {
  switch (type) {
    case photosActionType.SET_PHOTO:
      console.log(type, payload, "2");
      return state;
    default:
      return state;
  }
};
