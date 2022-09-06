import { Select } from 'antd';
import React from 'react';

function CustomSelect(props) {
  const {
    defaultValue, style, className, status, onChange, onSearch, disabled, loading, options, allowClear, showSearch, placeholder, size, bordered
  } = props;

  const { Option } = Select;

  return (
    <Select
      placeholder={placeholder}
      status={status} // error || warning
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      showSearch={showSearch}
      defaultValue={defaultValue}
      style={{ ...style, width: 200 }}
      bordered={bordered || true}
      className={className}
      size={size}
      filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
      disabled={disabled}
      loading={loading}
      allowClear={allowClear}
    >
      {options && options?.length > 0 && options?.map((item) => (
        <Option value={item?.value} disabled={item.disabled || false}>{item.label}</Option>
      ))}
    </Select>
  );
}

export default CustomSelect;
