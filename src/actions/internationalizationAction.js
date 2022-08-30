const SET_LANGUAGE = 'SET_LANGUAGE';
const changeLanguageAction = (language) => {
  console.log('langu',language);
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};

export { changeLanguageAction, SET_LANGUAGE };
