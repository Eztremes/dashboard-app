import { configureStore } from "@reduxjs/toolkit";
import widgetsReducer from "./widgetsSlice";

const store = configureStore({
  reducer: {
    dashboard: widgetsReducer,
  },
});

export default store;
