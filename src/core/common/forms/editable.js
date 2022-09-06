import { Form } from "antd";
import DataGridAsyncSelect from "../asyncSelect/dataGridAsyncSelect";
import {
  Input, Select, AsyncSelect, Checkbox, Radio, DatePicker
} from "../index";
import CustomDataTableSelect from "../select/dataGridSelect";

function EditableCell(props) {

  const {
    record,
    children,
    editing,
    col,
    ...restProps
  } = props;

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

  // const componentMapping = {
  //   text: Input,
  //   password: Input.Password,
  //   checkbox: Checkbox,
  //   number: Input.Number,
  //   select: Select,
  //   datePicker: DatePicker
  // };

  const {
    editableType, title, dataIndex, editableProps
  } = col || {};

  // const { editableType, selectInputProps, } = editableProps || {};
  // const { editableDefaultValue, validation, editableOptions } = selectInputProps || {};

  // editableType: 'select',
  // selectInputProps: {
  //   editableDefaultValue: '',
  //   validation: [],
  //   editableOptions: [
  //     { label: 'Active', value: true },
  //     { label: 'InActive', value: false }
  //   ]
  // }
  // const Component = componentMapping[editableType];

  const getContent = () => {

    if (editableType === 'text' || editableType === 'number') {

      const { inputProps } = editableProps || {};
      const { editableDefaultValue, validation } = inputProps || {};
      // let { } = text || {};
      return <Input defaultValue={record[dataIndex] || editableDefaultValue} type={editableType} inputType="input" validation={validation} />;
    }

    if (editableType === 'textArea') {

      const { inputProps } = editableProps || {};
      const { editableDefaultValue, validation } = inputProps || {};
      // let { } = text || {};
      return <Input defaultValue={record[dataIndex] || editableDefaultValue} type={editableType} inputType="textArea" validation={validation} />;

    }

    if (editableType === 'select') {
      const { inputProps } = editableProps || {};
      const {
        editableDefaultValue, validation, staticOptionsValue, apiFunction
      } = inputProps || {};
      return (
        <CustomDataTableSelect
          defaultValue={record[dataIndex]}
          options={staticOptionsValue}
          validation={validation}
          editableDefaultValue={editableDefaultValue}
          apiFunction={apiFunction} // currently string
        />
      );
    }

    if (editableType === 'checkbox') {
      return (
        <Checkbox
          defaultValue={record[dataIndex]}
          text="MY checked"
        />
      );
    }

    if (editableType === "Radio") {
      return (
        <Radio
          defaultValue={record[dataIndex]}
          text="MY checked"
        />
      );
    }

    if (editableType === "AsyncSelect") {
      const { inputProps } = editableProps || {};
      const {
        editableDefaultValue, validation, staticOptionsValue, apiFunction
      } = inputProps || {};
      return (
        <DataGridAsyncSelect
          defaultValue={record[dataIndex]}
          options={staticOptionsValue}
          validation={validation}
          editableDefaultValue={editableDefaultValue}
          apiFunction={apiFunction}
        />
      );
    }

    if (editableType === "datePicker") {
      return (
        <DatePicker defaultValue="defaultValue" />
      );
    }

  };

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
}

export default EditableCell;
