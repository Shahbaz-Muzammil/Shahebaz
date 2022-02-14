import { createStore, combineReducers } from "redux";
// import { sampleReducer } from "./Reducers/sampleReducer";
// import { navReducer } from "./Reducers/navReducer";
// import { bodyReducer } from "./Reducers/bodyReducer";
// import { carouselReducer } from "./Reducers/carouselReducer";
// import {NewsReducer} from "./Reducers/NewsReducer";
import {cartBody} from "./Reducers/cartBody";

export const configStore = () => {
  const store = createStore(
    combineReducers({
      // sampleReducer,
      // navReducer,
      // bodyReducer,
      // carouselReducer,
      // NewsReducer
      cartBody

      
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
