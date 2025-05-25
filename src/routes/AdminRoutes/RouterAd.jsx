import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../../components/layout/AdminLayout";
import Dashboard from "../../pages/AdminPage/Dashboard/dashboard";
import Users from "../../pages/AdminPage/User/Users";
import Posts from "../../pages/AdminPage/Post/Posts";
import Transactions from "../../pages/AdminPage/Transaction/Transaction";
import Communication from "../../pages/AdminPage/Communication/Communication";


function RouterAd() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/posts" element={<Posts />} />
          <Route path="/admin/transactions" element={<Transactions />} />
          <Route path="/admin/communication" element={<Communication />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RouterAd;