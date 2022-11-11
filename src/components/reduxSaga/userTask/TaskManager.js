import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { getAllTasks } from "../../../redux/slices/userTaskSlice";

const TaskManager = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tasksList, deleteFlag } = useSelector((state) => state.tasks)

  useEffect(() => {
    dispatch(getAllTasks())
  }, [])

  useEffect(() => {
    if (deleteFlag) {
      dispatch(getAllTasks())
    }
  }, [deleteFlag])

  const handleClick = () => {
    navigate("/redux-saga-example/crud-app/add-task");
  };

  return (
    <div>
      <button onClick={handleClick}>Add Task</button>
      {tasksList &&
        tasksList.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
    </div>
  );
};

export default TaskManager;
