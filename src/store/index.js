import todoReducer from "./reducers/todoSlice";

import { configureStore } from "@reduxjs/toolkit";

//store

const store = configureStore({
  reducer: {
    todoReducer,
  },
});

export default store;
