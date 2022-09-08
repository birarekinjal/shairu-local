import React from "react";
import { Layout } from "antd";
import Sidebar from "../sidebar/sidebar";
import CustomHeader from "../header/header";
import useLayout from "../hooks/useLayout";

function WithAuthenticationLayout({ children }) {
  const { Content } = Layout;
  const [{ collapsed }, { handleChangeSidebar }] = useLayout();
  return (
    <Layout hasSider>
      <Sidebar collapsed={collapsed} />

      <Layout className="site-layout">
        <CustomHeader
          handleChangeSidebar={handleChangeSidebar}
          collapsed={collapsed}
        />
        <Content
          className="site-layout-background"
          style={{
            margin: "94px 30px 30px 30px",
            padding: "30px",
            overflow: "initial"
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default WithAuthenticationLayout;
