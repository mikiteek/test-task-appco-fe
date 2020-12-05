import axios from "axios";
import usersActions from "./usersActions";

axios.defaults.baseURL = "https://young-basin-06562.herokuapp.com";

const getUsers = (page= 1, paginate= 25) => dispatch => {
  dispatch(usersActions.getUsersRequest());

  axios
    .get(`/users?page=${page}&paginate=${paginate}`)
    .then(({data}) => dispatch(usersActions.getUsersSuccess(data)))
    .catch(error => dispatch(usersActions.getUsersError(error)));
}

export default {
  getUsers,
};