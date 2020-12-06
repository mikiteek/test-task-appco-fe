import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./users/usersReducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    // statistic: usersReducer,
    // userInfo: usersReducer,
  }
});

export default store;