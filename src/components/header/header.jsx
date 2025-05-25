import React from "react";
import { Layout, Menu, Avatar } from "antd";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"; 
import "./header.css"; 

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="app-header">
      <div className="logo-section">
        {/* <img src={logo} alt="Flex Living" className="header-logo" /> */}
        <h1> Logo</h1>
      </div>
      
      <Menu mode="horizontal" className="nav-menu">
        <Menu.Item key="home">
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item key="landlords">
          <a href="/landlords">Landlloards</a>
        </Menu.Item>
        <Menu.Item key="blog">
          <a href="/blog">Blog</a>
        </Menu.Item>
        <Menu.Item key="contacts">
          <a href="/contacts">Contacts</a>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <a href="/dashboard">Dashboard</a>
        </Menu.Item>
      </Menu>
      
      <div className="user-profile">
        <Avatar size={40} className="user-avatar" />
      </div>
    </Header>
  );
};

export default AppHeader;