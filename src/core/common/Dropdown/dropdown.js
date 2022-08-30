import { Select } from "antd";

import React from "react";
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Dropdown = (props) => {
  const { defaultValue, style, disabled, value, options } = props;
  return (
    <>
      <Select
        defaultValue={defaultValue}
        style={style}
        onChange={handleChange}
        disabled={disabled}
        options={options} 
      >
        {options.map((value,index)=>{
          return(
            <Option key={index} value={value}>{value}</Option>
          )
        })}
      </Select>
    </>
  );
};

export default Dropdown;
