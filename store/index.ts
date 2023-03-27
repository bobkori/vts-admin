import development from "@/utils/dev";
import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./slices/sidebar";
import user from "./slices/user";

const store = configureStore({
  reducer: {
    [sidebar.name]: sidebar.reducer,
    [user.name]: user.reducer,
  },
  devTools: development,
});

export default store;
