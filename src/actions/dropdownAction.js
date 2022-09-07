import axios from "axios";
import { getCommissionDropdown } from "../core/layout/themeLayout/dataGridLayout/api";
import { showSuccess } from "../utility/other";

export const SET_DROPDOWN = 'SET_DROPDOWN';

console.log("hiiii");

export const getDropdownData = (key, apiFunction, body = {}) => (dispatch) => {
  axios.get(`https://47e7-203-88-147-114.in.ngrok.io${apiFunction}`, { params: body })
    .then((res) => {
      console.log(res, "ressssssssssss");
      // showSuccess("hii");
      dispatch({
        type: SET_DROPDOWN,
        key,
        payload: res?.data?.payload
      });
    });
};

export const getCommissionDropdownList = (body) => (dispatch) => getCommissionDropdown(body)
  .then((res) => {
    console.log(res, "res");
    if (res?.status === 200) {

      dispatch({
        type: SET_COMMISSION_DROPDOWN_LIST,
        payload: res?.data?.data,
      });
    }
    return res?.data;
  });
