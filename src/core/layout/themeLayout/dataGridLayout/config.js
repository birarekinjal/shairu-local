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
    valueDisplay: 'text',
  },

  {
    title: 'Status',
    dataIndex: 'is_active',
    key: 'is_active',
    width: 150,
    editable: true,
    renderValueModify: true,
    renderValueProps: {
      true: 'Active',
      false: 'InActive'
    },
  },
];
