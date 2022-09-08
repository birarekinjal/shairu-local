import React from "react";
import { Layout } from "antd";
import LanguageDropdown from "./languageDropdown";
import HeaderDropdown from "./headerDropdown";

const { Header } = Layout;

function CustomHeader({ handleChangeSidebar, collapsed }) {
  return (
    <div>
      <Header
        className="site-layout-background"
        // style={{
        //   position: 'fixed',
        //   zIndex: 1,
        //   width: '100%',
        // }}
      >
        <a className="trigger" onClick={() => handleChangeSidebar(!collapsed)}>
          collapse
        </a>
        <LanguageDropdown />
        <HeaderDropdown />
      </Header>
    </div>
  );
}
export default CustomHeader;
