// src/components/Dashboard.js
import React from 'react';
import AdminManagement from './AdminManagement';
import CategoryManagement from './CategoryManagement';
import LogoutButton from './LogoutButton';

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <LogoutButton />
      <AdminManagement />
      <CategoryManagement />
    </div>
  );
};

export default Dashboard;
