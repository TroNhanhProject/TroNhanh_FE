import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AppHeader from "../header/header";
import Sidebar from "../sidebar/sidebar";

import "./layout.css";

const { Content } = Layout;

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="admin-layout">
      <div style={{ marginBottom: '3px' }}>
        <AppHeader />
      </div>
      <Layout>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content className="dashboard-content-wrapper">
          <div className="dashboard-content">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>

  );
};

export default AdminLayout;