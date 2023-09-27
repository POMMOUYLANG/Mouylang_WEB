import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <h2>User Page</h2>
      <Outlet />
    </div>
  );
};

export default UserLayout;
