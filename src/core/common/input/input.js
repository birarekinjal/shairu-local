import { Form, Input, Tooltip } from "antd";
import "./input.less";

function CustomInput(props) {
  const {
    placeholder,
    prefix,
    size,
    suffix,
    tooltipTitle,
    disabled,
    maxLength,
    showCount,
    onChange,
    onBlur,
    status,
    inputType,
    rows,
    autoSize,
    value,
    defaultValue,
    type,
    label
  } = props;

  const inputProps = {
    placeholder,
    size: size || "large",
    prefix,
    suffix: <Tooltip title={tooltipTitle}>{suffix}</Tooltip>,
    type,
    disabled,
    maxLength,
    showCount,
    onChange,
    onBlur,
    status,
    defaultValue,
    value,
    rows
    // autoSize,
  };

  if (inputType === "input") {
    return (
      <Form>
        <label>{label}</label>
        <Input {...inputProps} />
      </Form>
    );
  }

  if (inputType === "password") {
    return (
      <Form>
        <label>{label}</label>
        <Input.Password {...inputProps} />
      </Form>
    );
  }

  if (inputType === "textArea") {
    return (
      <Form>
        <label>{label}</label>
        <Input.TextArea {...inputProps} />
      </Form>
    );
  }
}

export default CustomInput;
