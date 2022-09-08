import React from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";

import "./customSidebar.scss";
import { Menu, Layout } from "antd";
import { menuItems } from "../../../constants/menu";
import logo from "../../../assets/Logo/setu-vector-sample4.png";

function Sidebar({ collapsed }) {
  const { Sider } = Layout;
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: "0",
        top: "0"
      }}
    >
      <div className="logo">
        <a href="#" className="aside-drawer-header-logo">
          <img alt="Shetu." title="shetu" className="logo" src={logo} />
        </a>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={menuItems}
      />
    </Sider>
  );
}

export default Sidebar;
