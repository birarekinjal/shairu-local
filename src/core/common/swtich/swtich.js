import React from 'react';
import { Switch } from 'antd';

function CustomSwitch(props) {
  const {
    defaultChecked, onChange, disabled, loading, size, onClick
  } = props;
  return (
    <Switch
      defaultChecked={defaultChecked}
      onChange={onChange}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
      size={size || 'default'} // default |  small

    />

  );
}

export default CustomSwitch;
