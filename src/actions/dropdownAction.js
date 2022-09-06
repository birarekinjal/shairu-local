import { showSuccess } from "../utility/other";

export const SET_DROPDOWN = 'SET_DROPDOWN';

export const getDropdownData = (key, value, apiFunction, body = {}) => {
  return dispatch => {
    console.log("GetUsers dispatch");

    axios.get(apiFunction)
      .then(res => {
        const persons = res.data;
        showSuccess("hii")
        dispatch({
          type: SET_DROPDOWN,
          key: key,
          payload: res.data
        });
      })
  };
};

