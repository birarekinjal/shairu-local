import React from 'react';
import { Input } from 'antd';

const SearchInput = (props) => {
  const { placeholder, onSearch, addonBefore, enterButton, suffix, allowClear, style, className } = props;

  //This is the example of suffix
  // const suffix = (
  //   <AudioOutlined
  //     style={{
  //       fontSize: 16,
  //       color: '#1890ff',
  //     }}
  //   />
  // );

  return (
    <Input.Search
      placeholder={placeholder}
      onSearch={onSearch}
      style={{
        ...style, width: 130
      }}
      className={className}
      addonBefore={addonBefore}
      allowClear={allowClear}
      enterButton={enterButton}
      suffix={suffix}
    />
  );
};

export default SearchInput;