import React from 'react';
import { Select } from 'antd';

const MultiSelect = (props) => {
  const { defaultValue, className, style, status, onChange, onSearch, disabled, loading, options, mode, showSearch, placeholder, size, maxTagCount, bordered } = props;

  const { Option } = Select;

  return (
    <Select
      mode={mode || "multiple"}             // Mode should be  tags and multiple
      allowClear
      placeholder={placeholder}
      status={status}            // error || warning
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      showSearch={showSearch}
      defaultValue={defaultValue}
      style={{ ...style, width: 120 }
      }
      bordered={bordered || true}
      className={className}
      size={size}
      maxTagCount={maxTagCount}   // value - responsive
      filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
      disabled={disabled}
      loading={loading}
    >
      {options && options?.length > 0 && options?.map((item) => {
        return (
          <Option value={item?.value} disabled={item.disabled || false}>{item.label}</Option>
        )
      })}
    </Select >
  );
};

export default MultiSelect;