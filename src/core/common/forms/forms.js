import { Input, Form, Checkbox } from "antd";
// mapping of our components
const componentMapping = {
  input: Input,
  password: Input.Password,
  checkbox: Checkbox,
  number: Input.Number,
};
function FormElement({
  component, label, required, name
}) {
  // dinamically select a component from componentMapping object
  const Component = componentMapping[component];
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required, message: "Field is required!" }]}
    >
      <Component />
    </Form.Item>
  );
}
export default FormElement;
