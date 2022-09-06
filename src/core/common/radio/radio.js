/* eslint-disable object-shorthand */
import React from 'react';
import {
  Radio, Col, Row, Space
} from 'antd';

function CustomRadio(props) {
  const {
    onChange, text, disabled, defaultChecked, checked, radioGroupValue, type, style, defaultValue, direction
  } = props;

  const customProps = {
    onChange: onChange,
    disabled: disabled,
    defaultChecked: defaultChecked,
    style: style,
    defaultValue: defaultValue
  };

  if (type == 'group') {
    return (
      <Radio.Group
        style={{
          width: '100%', ...style
        }}
        {...customProps}
      >
        <Space direction={direction}>
          {radioGroupValue && radioGroupValue?.length > 0 && radioGroupValue?.map((item, index) => (
            <Row key={index}>
              <Col span={8}>
                <Radio value={item.value}>{item.label}</Radio>
              </Col>
            </Row>
          ))}
        </Space>
      </Radio.Group>
    );
  }

  return (
    <Radio
      {...customProps}
    >
      {text}
    </Radio>
  );
}

export default CustomRadio;
