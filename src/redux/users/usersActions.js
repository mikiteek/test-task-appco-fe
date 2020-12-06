import {createAction} from "@reduxjs/toolkit";

const getUsersRequest = createAction("users/getRequest");
const getUsersSuccess = createAction("users/getSuccess");
const getUsersError = createAction("users/getError");

const getStatisticUserRequest = createAction("statistic/getStatisticRequest");
const getStatisticUserSuccess = createAction("statistic/getStatisticSuccess");
const getStatisticUserError = createAction("statistic/getStatisticError");

const toggleUserInfo = createAction("user/toggleUserInfo");

const visibleSpinner = createAction("spinner/visible");

export default {
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
  getStatisticUserRequest,
  getStatisticUserSuccess,
  getStatisticUserError,
  toggleUserInfo,
  visibleSpinner,
};