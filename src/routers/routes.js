import React from 'react';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import DataGridLayout from '../core/layout/themeLayout/dataGridLayout/DataGridLayout';
import ThemeLayout from '../core/layout/themeLayout/themeLayout';
import UserList from '../modules/userProfile/userList';

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<ThemeLayout />} />
        <Route path="/data-grid" element={<DataGridLayout />} />
        <Route path="/users" exact element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
