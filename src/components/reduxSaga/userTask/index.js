import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserTask = () => {
  return (
    <div>
      <nav style={{ margin: 0, padding: 0 }}>
        <ul>
          <Link to="all-task">All tasks</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default UserTask;
