import { Input, Form, Checkbox, Select, DatePicker, Space } from "antd";
import CustomSelect from '../dataGrid/select';

const EditableCell = (props) => {

  const {
    record,
    children,
    editing,
    col,
    ...restProps
  } = props

  console.log(props, "props")
  // addRowDefaultValue: "Active"
  // addRowType: "select"
  // dataIndex: "is_active"
  // editable: true
  // editableProps:
  // editableType: "select"
  // selectInputProps:
  // editableDefaultValue: ""
  // editableOptions: (2) [{…}, {…}]
  // validation: []
  // [[Prototype]]: Object
  // [[Prototype]]: Object
  // formEditValue: false
  // key: "is_active"
  // renderValueModify: true
  // renderValueProps: {true: 'Active', false: 'InActive'}
  // title: "Status"
  // width:

  const componentMapping = {
    text: Input,
    password: Input.Password,
    checkbox: Checkbox,
    number: Input.Number,
    select: Select,
    datePicker: DatePicker
  };

  const { editableProps, title, dataIndex } = col || {};

  const { editableType, selectInputProps, } = editableProps || {};
  const { editableDefaultValue, validation, editableOptions } = selectInputProps || {};


  // editableType: 'select',
  // selectInputProps: {
  //   editableDefaultValue: '',
  //   validation: [],
  //   editableOptions: [
  //     { label: 'Active', value: true },
  //     { label: 'InActive', value: false }
  //   ]
  //}
  // const Component = componentMapping[editableType];

  const getContent = () => {
    if (editableType === 'text') {
      return <Input defaultValue={record[dataIndex]} />
    }

    if (editableType === 'select') {
      return (
        <CustomSelect
          defaultValue={record[dataIndex]}
          options={editableOptions}
        />
      )
    }

  }

  console.log(col, "colvv")
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {getContent()}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default EditableCell;