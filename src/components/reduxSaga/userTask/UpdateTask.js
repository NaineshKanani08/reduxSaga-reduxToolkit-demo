import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTaskDetail, updateTask } from "../../../redux/slices/userTaskSlice";
const UpdateTask = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { task } = useSelector((state) => state.tasks);
  const [addPost, setAddPost] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    id && dispatch(getTaskDetail(id))
  }, [id])

  useEffect(() => {
    if (task && Object.keys(task).length) {
      setAddPost({ ...task })
    }
  }, [task])
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
    dispatch(updateTask(task))
    navigate("/redux-saga-example/crud-app/all-task");
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
