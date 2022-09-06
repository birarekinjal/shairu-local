import { Select } from 'antd';
import React, { useEffect, useState } from 'react';

function CustomDataTableSelect(props) {
  const {
    defaultValue,
    style,
    className,
    status,
    onChange,
    onSearch,
    disabled,
    loading,
    options,
    allowClear,
    showSearch,
    placeholder,
    size,
    bordered,
    validation,
  } = props;


  // validation={validation}
  // editableDefaultValue={editableDefaultValue}
  // apiFunction={apiFunction}   // current
  const { Option } = Select;

  const [state, setState] = useState({
    options: []
  });
  const { } = state;

  const getFetchOptions = async () => axios.get('https://0187-203-88-147-114.in.ngrok.io/company/cabin/').then((resp) => resp.data);


  useEffect(() => {

    getFetchOptions.then((res) => {
      console.log(res, "res");
      if (res?.status === 200) {
        setState({
          options: res.payload
        })
      }
    })
  }, []);

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

export default CustomDataTableSelect;
