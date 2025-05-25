import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  FileTextOutlined,
  ShoppingOutlined,
  TeamOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import "./sidebar.css";

const { Sider } = Layout;

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      onClick: () => navigate("/admin/dashboard")
    },
    {
      key: "users",
      icon: <UserOutlined />,
      label: "Users",
      onClick: () => navigate("/admin/users")
    },
    {
      key: "posts",
      icon: <FileTextOutlined />,
      label: "Posts",
      onClick: () => navigate("/admin/posts")
    },
    {
      key: "transactions",
      icon: <ShoppingOutlined />,
      label: "Transactions",
      onClick: () => navigate("/admin/transactions")
    },
    {
      key: "communication",
      icon: <TeamOutlined />,
      label: "Communication",
      onClick: () => navigate("/admin/communication")
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      className: "logout-item",
      onClick: () => console.log("Logout clicked")
    },
  ];

  // Extract the current path to set the active menu item
  const currentPath = location.pathname.split("/")[1] || "dashboard";

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className="admin-sider"
      theme="light"
      width={220}
    >
      <div className="logo-container">
        {!collapsed && <h1 className="logo">Admin Panel</h1>}
      </div>
      <Menu
        defaultSelectedKeys={[currentPath]}
        mode="inline"
        items={menuItems}
        className="admin-menu"
      />
    </Sider>
  );
};

export default Sidebar;