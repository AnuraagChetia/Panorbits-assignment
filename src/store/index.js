import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import pageReducer from "./pageReducer";

const store = configureStore({
  reducer: { user: userReducer, page: pageReducer },
});
export default store;
