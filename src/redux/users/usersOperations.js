import axios from "axios";
import usersActions from "./usersActions";

axios.defaults.baseURL = "https://young-basin-06562.herokuapp.com";

const getUsers = (page= 1, paginate= 25) => dispatch => {
  dispatch(usersActions.getUsersRequest());
  dispatch(usersActions.visibleSpinner(true));
  axios
    .get(`/users?page=${page}&paginate=${paginate}`)
    .then(({data}) => dispatch(usersActions.getUsersSuccess(data)))
    .catch(error => dispatch(usersActions.getUsersError(error)))
    .finally(() => dispatch(usersActions.visibleSpinner(false)));
}

const getStatistics = (id) => dispatch => {
  dispatch(usersActions.getStatisticUserRequest());
  dispatch(usersActions.visibleSpinner(true));
  axios
    .get(`/statistics/${id}`)
    .then(({data}) => dispatch(usersActions.getStatisticUserSuccess(data)))
    .catch(error => dispatch(usersActions.getStatisticUserError(error)))
    .finally(() => dispatch(usersActions.visibleSpinner(false)));
}

export default {
  getUsers,
  getStatistics,
};