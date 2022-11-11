import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { deleteTask } from "../../../redux/slices/userTaskSlice";
const Task = ({ id, title, description }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEdit = () => {
    navigate(`/redux-saga-example/crud-app/update-task/${id}`);
  };
  return (
    <div>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => dispatch(deleteTask(id))}>Delete</button>
      </div>
      <hr />
    </div>
  );
};

export default Task;
