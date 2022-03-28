import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./posts";
import SideBar from "./sidebar";
import Users from "./users";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Routes>
        <Route path="users" element={<Users />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
