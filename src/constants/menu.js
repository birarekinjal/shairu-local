import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Link } from "react-router-dom";

export const menuItems = [
  {
    key: '7',
    icon: <UserOutlined />,
    label: 'nav 1',
  },
  {
    key: '5',
    icon: <VideoCameraOutlined />,
    label: 'nav 2',
  },
  {
    key: 1,
    icon: <UserOutlined />,
    label: "Home",
    children: [{
      key: '2',
      icon: <UserOutlined />,
      label: <Link to="/data-grid"> Data-Grid</Link>,
      children: [{
        key: '2',
        icon: <UserOutlined />,
        label: <Link to="/data-grid"> sub Data-Grid</Link>,
      }],
    }],
  },
  {
    key: '3',
    icon: <UserOutlined />,
    label: 'nav 1',
  },
];
