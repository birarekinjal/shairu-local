import { Tag } from "antd";

export const CabinColumns = [
  {
    title: 'Cabin Name',
    dataIndex: 'cabin_name',
    key: 'cabin_name',
    width: 150,
    editable: true,
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    key: 'is_active',
    width: 150,
    editable: true,
    formEditValue: '',
    render: (tags) => (
      <Tag>{tags ? 'Active' : 'InActive'}</Tag>
    ),
    valueOptions: ['Active', 'In Active'],
  },
];

export const nameColumns = [
  {
    title: 'Cabin Name',
    dataIndex: 'cabin_name',
    key: 'cabin_name',
    width: 150,
    editable: true,
    valueDisplay: 'tag',
    formEditValue: '',
    tagProps: {

      color: 'red',
    },
    renderValueModify: false,
    addRowDefaultValue: 'Kinjal',
    addRowType: 'text',
    apiFunction: '',
    editableProps: {
      editableType: 'text',
      selectInputProps: {
        editableDefaultValue: '',
        validation: [],
      }
    }
    // editableProps: {
    //   editableType: 'input',
    //   input: {
    //     editableDefaultValue: '',
    //     validation: [],
    //   }
    // }
  },

  {
    title: 'Status',
    dataIndex: 'is_active',
    key: 'is_active',
    width: 150,
    editable: true,
    renderValueModify: true,
    formEditValue: false,
    addRowType: 'select',
    addRowDefaultValue: 'Active',
    renderValueProps: {
      true: 'Active',
      false: 'InActive'
    },
    editableProps: {
      editableType: 'select',
      selectInputProps: {
        editableDefaultValue: '',
        validation: [],
        editableOptions: [
          { label: 'Active', value: true },
          { label: 'InActive', value: false }
        ]
      }
    }
  },

];

// export const cabinComponents = [
//   {
//     component: "input",
//     label: "Cabin Name",
//     required: true,
//   },
//   {
//     component: "input",
//     label: "Status",
//     required: true,
//   },
//   {
//     component: "input",
//     label: "Email",
//     required: true,
//   },
//   {
//     component: "password",
//     label: "Password",
//     required: true,
//   },
//   {
//     component: "checkbox",
//     label: "Stay signed in",
//     required: false,
//   },
// ];
