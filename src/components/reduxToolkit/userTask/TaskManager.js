import React from "react";
import { useNavigate } from "react-router-dom";
import { useTasksQuery } from "../../../service/taskApi";
import Task from "./Task";
const TaskManager = () => {
  const { isLoading, error, data, isSuccess } = useTasksQuery();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/redux-toolkit-example/user-task/add-task");
  };
  return (
    <div>
      <button onClick={handleClick}>Add Task</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {isSuccess &&
        data.map((task) => (
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
