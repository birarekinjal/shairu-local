import { Input, Tooltip } from 'antd';

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
  } = props;

  const inputProps = {
    placeholder,
    size: size || "large",
    prefix,
    suffix: <Tooltip title={tooltipTitle}>
      {suffix}
    </Tooltip>,
    type,
    disabled,
    maxLength,
    showCount,
    onChange,
    onBlur,
    status,
    defaultValue,
    value,
    rows,
    autoSize,
  };

  if (inputType === "input") {
    return (
      <Input {...inputProps} />
    );
  }

  if (inputType === "password") {
    return <Input.Password {...inputProps} />;
  }

  if (inputType === "textArea") {
    return <Input.TextArea {...inputProps} />;
  }
}

export default CustomInput;
