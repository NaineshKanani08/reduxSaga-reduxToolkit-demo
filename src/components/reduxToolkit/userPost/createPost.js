import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createpost,
  getPosts,
  getEdit,
  updatepost,
} from "../../../redux/slices/postSlice";
import { useNavigate } from "react-router-dom";
const AddPost = () => {
  const dispatch = useDispatch();
  const post = useSelector(getPosts);
  const edit = useSelector(getEdit);
  const [addPost, setAddPost] = useState({
    title: edit ? post[0].title : "",
    body: edit ? post[0].body : "",
  });
  const { title, body } = addPost;
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddPost({ ...addPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit && title && body) {
      dispatch(updatepost({ addPost, id: post[0].id }));
    }
    if (!edit && title && body) {
      dispatch(createpost({ addPost }));
    }
    navigate("/redux-toolkit-example");
  };
  return (
    <div>
      {!edit ? <h3>Create Post</h3> : <h3>Update Post</h3>}
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
            name="body"
            rows="10"
            cols="30"
            onChange={handleChange}
            value={body}
            placeholder="Add Description"
          />
        </div>
        {!edit ? (
          <button type="submit">ADD</button>
        ) : (
          <button type="submit">UPDATE</button>
        )}
      </form>
    </div>
  );
};

export default AddPost;
