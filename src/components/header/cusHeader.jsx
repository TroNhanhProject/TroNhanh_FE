import React from "react";
import { Menu, Avatar, Dropdown, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const items = [
  { label: "Home", key: "home" },
  { label: "Landlords", key: "landlords" },
  { label: "Blog", key: "blog" },
  { label: "Contacts", key: "contacts" },
];

const profileMenu = (
  <Menu
    items={[
      { label: "Profile", key: "profile" },
      { label: "Account Settings", key: "settings" },
      { label: "Logout", key: "logout" },
    ]}
  />
);

const CusHeader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 50px",
      background: "#fff",
      borderBottom: "1px solid #f0f0f0",
    }}
  >
    <div style={{ fontSize: "20px", fontWeight: "bold" }}>TroNhanh</div>
    <Space>
      <Menu mode="horizontal" style={{ borderBottom: "none" }} items={items} />
      <Dropdown overlay={profileMenu} trigger={["click"]}>
        <Avatar
          style={{ cursor: "pointer" }}
          size="large"
          src="https://i.pravatar.cc/300" // Example avatar image URL
          icon={<UserOutlined />}
        />
      </Dropdown>
    </Space>
  </div>
);

export default CusHeader;
