import React from "react";
import { Button, Tooltip } from "antd";
import "./button.less";

const customButton = (props) => {
  const {
    type,
    buttonText,
    className,
    shape,
    icon,
    tooltip,
    href,
    size,
    disabled,
    ghost,
    danger,
    loading,
    onClick,
    block
  } = props;
  return (
    <Button
      type={type || "primary"}
      shape={shape}
      icon={icon}
      href={href}
      ghost={ghost}
      danger={danger}
      loading={loading || false}
      onClick={onClick}
      block={block}
      disabled={disabled}
      className={className}
    >
      {buttonText}
    </Button>
  );
};

export default customButton;
