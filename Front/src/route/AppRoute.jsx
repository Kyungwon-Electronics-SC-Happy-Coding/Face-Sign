import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "page/Main";
import UserList from "page/UserList";
import AddUser from "page/AddUser";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
        </Route>
        <Route path="/user-list" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
