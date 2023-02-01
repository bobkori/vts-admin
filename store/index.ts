import development from "@/utils/dev";
import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./slices/sidebar";

const store = configureStore({
  reducer: {
    [sidebar.name]: sidebar.reducer,
  },
  devTools: development,
});

export default store;
