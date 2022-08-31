import { Input, Tooltip } from 'antd';

const CustomInput = (props) => {

  const { placeholder,
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
    type,
    rows,
    autoSize,
    value,
    defaultValue,
  } = props;


  const inputProps = {
    placeholder: placeholder,
    size: size || "large",
    prefix: prefix,
    suffix: <Tooltip title={tooltipTitle} >
      {suffix}
    </Tooltip >,
    type: type,
    disabled: disabled,
    maxLength: maxLength,
    showCount: showCount,
    onChange: onChange,
    onBlur: onBlur,
    status: status,
    defaultValue: defaultValue,
    value: value,
    rows: rows,
    autoSize: autoSize,
  };

  if (type === "input") {
    return (
      <Input  {...inputProps} />
    )
  }

  if (type === "password") {
    return <Input.Password  {...inputProps} />
  }

  if (type === "textArea") {
    return <Input.TextArea  {...inputProps} />
  }
};

export default CustomInput;