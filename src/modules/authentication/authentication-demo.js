import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { simpleAction } from "./redux/authenticationAction";

function AuthenticationDemo() {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);

  // console.log(state, " +++");

  const handleClick = () => {
    dispatch(simpleAction());
  };

  return (
    <div>
      <Button onClick={handleClick}> Check the Redux </Button>
    </div>
  );
}

export default AuthenticationDemo;
