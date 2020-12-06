import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import usersActions from "./usersActions";

const items = createReducer({}, {
  [usersActions.getUsersSuccess]: (state, action) => action.payload,
});

const statistic = createReducer([], {
  [usersActions.getStatisticUserSuccess]: (state, action) => action.payload,
});

const user = createReducer({}, {
  [usersActions.toggleUserInfo]: (state, action) => action.payload,
});

const spinner = createReducer(false, {
  [usersActions.visibleSpinner]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  statistic,
  user,
  spinner,
});