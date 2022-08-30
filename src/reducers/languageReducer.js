import { SET_LANGUAGE } from '../actions/internationalizationAction';

const languageReducer = (language = 'en-US', action) => {
    console.log('acc',action);
  switch (action.type) {
    case SET_LANGUAGE: {
      return action.payload;
    }
    default: {
      return language;
    }
  }
};

export default languageReducer;
