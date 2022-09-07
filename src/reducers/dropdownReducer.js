import { SET_DROPDOWN } from "../actions/dropdownAction";

export const INITIAL_STATE = {};

const dropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DROPDOWN: {
      return { [action.key]: action.payload }
    }
    default: {
      return state;
    }
  }
};

export default dropdownReducer;
