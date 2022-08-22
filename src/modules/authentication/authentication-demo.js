import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { simpleAction } from './redux/authenticationAction';


const AuthenticationDemo = () => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log(state, " +++")

  const handleClick = () => {
    dispatch(simpleAction())
  }


  return (
    <div>
      <button onClick={handleClick}> Check the Redux </button>
    </div>
  );
};

export default AuthenticationDemo