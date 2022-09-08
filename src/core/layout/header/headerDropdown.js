import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const HeaderDropdown = ({ logout, profile }) => {
  const { t } = useTranslation();

  //   const handleMenuClick = (e) => {
  //     message.info("Click on menu item.");
  //     console.log("click", e);
  //   };
  const menu = (
    <Menu
      onClick={logout}
      items={[
        {
          label: t("manageProfile.logoutLabel"),
          key: "1",
          icon: <UserOutlined />
        }
      ]}
    />
  );

  return (
    <>
      <Space wrap>
        Welcome,
        <Dropdown.Button
          overlay={menu}
          placement="bottom"
          icon={<UserOutlined />}
        >
          {"Username"}
          {profile}
        </Dropdown.Button>
      </Space>
    </>
  );
};

export default HeaderDropdown;
