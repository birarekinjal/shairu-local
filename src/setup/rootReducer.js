import { combineReducers } from "redux";
import authenticationReducer from "../modules/authentication/redux/authenticationReducer";
import languageReducer from "../reducers/languageReducer";
import dropdownReducer from "../reducers/dropdownReducer";
// import { LOGOUT, SET_USER_TOKEN } from '../actions/login';

const initialState = {
  language: 'en-US',
  // token: '',
  // loaderCount: 0,
  // sidebar: { isCollapsed: false, isVisible: false },
};

const appReducer = combineReducers({
  authenticationReducer,
  language: languageReducer,
  dropdownReducer,
});

const rootReducer = (state, action) => {
  let newState = state;
  // if (
  //   action.type === LOGOUT ||
  //   (action.type !== SET_USER_TOKEN && !localStorage.getItem('TOKEN'))
  // ) {
  newState = initialState;
  //   removeToken();
  // }
  return appReducer(newState, action);
};

export default rootReducer;
export { initialState };
