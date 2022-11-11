import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTask } from "../../../redux/slices/userTaskSlice";
const AddTask = () => {
  const [addPost, setAddPost] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    dispatch(addTask(task));
    navigate("/redux-saga-example/crud-app/all-task");
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
