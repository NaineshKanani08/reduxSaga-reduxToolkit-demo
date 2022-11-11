import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTaskQuery, useUpdateTaskMutation } from "../../../service/taskApi";
const UpdateTask = () => {
  const { id } = useParams();
  const { data, isLoading } = useTaskQuery(id);

  const navigate = useNavigate();
  const [updateTask] = useUpdateTaskMutation();
  const [addPost, setAddPost] = useState({
    title: "",
    description: "",
  });
  useEffect(() => {
    if (!isLoading) {
      setAddPost({ ...data });
    }
  }, [data]);
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
      id,
    };
    await updateTask(task);
    navigate("/redux-toolkit-example/user-task/all-task");
  };
  return (
    <div>
      <h3>Update Task</h3>
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
        <button type="submit">UPDATE</button>
      </form>
    </div>
  );
};

export default UpdateTask;
