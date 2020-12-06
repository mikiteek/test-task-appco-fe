import {createAction} from "@reduxjs/toolkit";

const getUsersRequest = createAction("users/getRequest");
const getUsersSuccess = createAction("users/getSuccess");
const getUsersError = createAction("users/getError");

export default {
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
};