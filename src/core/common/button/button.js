import React from "react";
import { Button } from "antd";

const customButton = (props) => {
  const { type, buttonText } = props;
  return <Button type={type}>{buttonText}</Button>;
};

export default customButton;
