import { SET_LANGUAGE } from '../actions/internationalizationAction';

export const INITIAL_STATE = {};

const dropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return { [action.key]: action.payload }
    }
    default: {
      return state;
    }
  }
};

export default dropdownReducer;
