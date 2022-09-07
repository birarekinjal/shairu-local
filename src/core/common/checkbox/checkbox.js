/* eslint-disable object-shorthand */
import React from "react";
import { Checkbox, Col, Row } from "antd";
import "./checkbox.less";

function CustomCheckbox(props) {
  const {
    onChange,
    text,
    disabled,
    defaultChecked,
    checked,
    checkBoxGroupValue,
    type,
    style,
    defaultValue
  } = props;

  const customProps = {
    onChange: onChange,
    disabled: disabled,
    defaultChecked: defaultChecked,
    style: style,
    defaultValue: defaultValue
  };

  if (type == "group") {
    return (
      <Checkbox.Group
        style={{
          width: "100%",
          ...style
        }}
        {...customProps}
      >
        {checkBoxGroupValue
          && checkBoxGroupValue?.length > 0
          && checkBoxGroupValue?.map((item, index) => (
            <Row key={index}>
              <Col>
                <Checkbox value={item.value}>{item.label}</Checkbox>
              </Col>
            </Row>
          ))}
      </Checkbox.Group>
    );
  }

  return <Checkbox {...customProps}>{text}</Checkbox>;
}

export default CustomCheckbox;
