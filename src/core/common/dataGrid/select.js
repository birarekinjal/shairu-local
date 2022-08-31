import { Select } from 'antd';
import React from 'react';

const CustomSelect = (props) => {
  const { defaultValue, editableDefaultValue, options } = props
  return (
    <div>
      <Select showSearch defaultValue={defaultValue} style={{ width: 120 }}>
        {options && options.length > 0 && options.map((item) => {
          return (
            <Option value={item.value}>{item.label}</Option>
          )
        })}
      </Select>
    </div>
  );
};

export default CustomSelect;