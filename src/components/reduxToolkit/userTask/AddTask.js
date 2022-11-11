import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddTaskMutation } from "../../../service/taskApi";
const AddTask = () => {
  const [addPost, setAddPost] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const [addTask] = useAddTaskMutation();
  const { title, description } = addPost;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddPost({ ...addPost, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = {
      title,
      description,
      id: Math.ceil((Math.random() * 1000) / 10),
    };
    await addTask(task);
    navigate("/redux-toolkit-example/user-task/all-task");
  };
  return (
    <div>
      <h3>Add Task</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Add Title:</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
            placeholder="Add Todo"
          />
        </div>
        <div>
          <label htmlFor="body">Add Description:</label>
          <textarea
            name="description"
            rows="10"
            cols="30"
            onChange={handleChange}
            value={description}
            placeholder="Add Description"
          />
        </div>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddTask;
