import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Link } from "react-router-dom";
import CompanyLayout from '../core/layout/themeLayout/dataGridLayout/companyLayout';

export const menuItems = [
  {
    key: '7',
    icon: <CompanyLayout />,
    label: <Link to="/company">Company</Link>,
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
        key: '8',
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
