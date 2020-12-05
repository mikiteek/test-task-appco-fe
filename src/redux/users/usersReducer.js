import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import usersActions from "./usersActions";

const items = createReducer([], {
  [usersActions.getUsersSuccess]: (state, action) => action.payload,
});

export default combineReducers({
  items
});