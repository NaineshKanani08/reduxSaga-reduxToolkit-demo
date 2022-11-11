import React, { useState } from "react";
import {
  fetchposts,
  getPosts,
  getLoading,
  deletepost,
  setEdit,
} from "../../../redux/slices/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const FetchPost = () => {
  const dispatch = useDispatch();
  const postData = useSelector(getPosts);
  const loading = useSelector(getLoading);
  const [postId, setPostId] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPostId(e.target.value);
  };
  const handleSubmit = () => {
    postId && dispatch(fetchposts({ postId }));
  };
  const handleEdit = ({ postId }) => {
    dispatch(setEdit(true));
    fetchposts({ postId });
    navigate("/redux-toolkit-example/update");
  };
  const handleCreatePost = () => {
    dispatch(setEdit(false));
    navigate("/redux-toolkit-example/create");
  };
  return (
    <div>
      <h2>Redux-Toolkit Example</h2>
      <Link to="/redux-toolkit-example/counter">Counter</Link>
      <br />
      <Link to="/redux-toolkit-example/user-task">UserTask</Link>
      <h3>Fetch Post</h3>
      <input
        type="number"
        name="postId"
        value={postId}
        onChange={handleChange}
        placeholder="Enter postID"
      />
      <button onClick={handleSubmit}>Fetch Post</button>
      <button onClick={handleCreatePost}>Create Post</button>
      {loading && <h4>Loading...</h4>}
      {postData &&
        postData.length > 0 &&
        postData.map((post) => (
          <div
            key={post.id}
            style={{
              margin: "10px",
              padding: "10px",
              backgroundColor: "lightGray",
              color: "black",
              width: "400px",
            }}
          >
            <h4>
              {post.id}. {post.title}
            </h4>
            <p>{post.body}</p>
            <button onClick={() => handleEdit({ postId: post.id })}>
              Edit
            </button>
            <button onClick={() => dispatch(deletepost({ postId: post.id }))}>
              Delete
            </button>
            {/* <h4><input type="checkbox" name="active" onChange={handleChange}/>Status:Active</h4> */}
          </div>
        ))}
    </div>
  );
};

export default FetchPost;
