import React from 'react';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import CompanyLayout from '../core/layout/themeLayout/dataGridLayout/companyLayout';
import DataGridLayout from '../core/layout/themeLayout/dataGridLayout/DataGridLayout';
import ThemeLayout from '../core/layout/themeLayout/themeLayout';
import UserList from '../modules/userProfile/userList';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/company" element={<CompanyLayout />} />
        <Route path="/data-grid" element={<DataGridLayout />} />
        <Route path="/users" element={<UserList />} />
        <Route path="*" element={<h1> 404 page</h1>} />
        <Route path="/" exact element={<ThemeLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
