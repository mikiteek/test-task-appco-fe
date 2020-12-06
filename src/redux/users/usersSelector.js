// import {createSelector} from "@reduxjs/toolkit";

const getUsers = state => state.users.items;
const getUserStatistic = state => state.users.statistic;
const getUserInfo = state => state.users.user;

export default {
  getUsers,
  getUserStatistic,
  getUserInfo,
};