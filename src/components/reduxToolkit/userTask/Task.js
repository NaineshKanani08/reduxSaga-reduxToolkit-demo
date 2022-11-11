import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteTaskMutation } from "../../../service/taskApi";
const Task = ({ id, title, description }) => {
  const [deleteTask] = useDeleteTaskMutation();
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/redux-toolkit-example/user-task/update-task/${id}`);
  };
  return (
    <div>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteTask(id)}>Delete</button>
      </div>
      <hr />
    </div>
  );
};

export default Task;
