import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../sidebar/sidebar';
import CustomHeader from '../header/header';
import useLayout from '../hooks/useLayout';

function WithAuthenticationLayout({ children }) {
  const { Content } = Layout;
  const [{ collapsed }, { handleChangeSidebar }] = useLayout();
  return (
    <Layout hasSider>
      <Sidebar collapsed={collapsed} />
      <Layout
        // style={{
        //   marginLeft: 200,
        // }}
        className="site-layout"
      >
        <CustomHeader handleChangeSidebar={handleChangeSidebar} collapsed={collapsed} />
        <Content
          className="site-layout-background"
        // style={{
        //   margin: '24px 16px 0',
        //   overflow: 'initial',
        // }}
        >
          {children}
        </Content>

      </Layout>
    </Layout>
  );
}

export default WithAuthenticationLayout;
