import React from "react";
import { Button, Tooltip } from "antd";

const customButton = (props) => {
  const { type, buttonText, shape, icon, tooltip, href, size, disabled, ghost, danger, loading, onClick, block } = props;
  return (
    <Tooltip title={tooltip}>
      <Button
        type={type || "primary"}
        shape={shape}
        icon={icon}
        href={href}
        size={size || "large"}
        disabled={disabled}
        ghost={ghost}
        danger={danger}
        loading={loading || false}
        onClick={onClick}
        block={block}
      >
        {buttonText}
      </Button>
    </Tooltip>
  )
    ;
};

export default customButton;
