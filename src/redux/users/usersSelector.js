// import {createSelector} from "@reduxjs/toolkit";

const getUsers = state => state.users.items;
const getUserStatistic = state => state.users.statistic;
const getUserInfo = state => state.users.user;
const getSpinner = state => state.users.spinner;

export default {
  getUsers,
  getUserStatistic,
  getUserInfo,
  getSpinner,
};