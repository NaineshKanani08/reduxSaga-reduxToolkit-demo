import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../service/API";

export const fetchposts = createAsyncThunk(
  "posts/fetchposts",
  async ({ postId }) => {
    const response = await API.get(`/posts/${postId}`);
    return response.data;
  }
);
export const deletepost = createAsyncThunk(
  "posts/deletepost",
  async ({ postId }) => {
    const response = await API.delete(`/posts/${postId}`);
    return response.data;
  }
);

export const createpost = createAsyncThunk(
  "posts/createpost",
  async ({ addPost }) => {
    const response = await API.post(`/posts`, {
      ...addPost,
      userId: 101,
    });
    return response.data;
  }
);

export const updatepost = createAsyncThunk(
  "posts/updatepost",
  async ({ addPost, id }) => {
    const response = await API.put(`/posts/${id}`, {
      ...addPost,
    });
    return response.data;
  }
);
const postSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    posts: [],
    error: "",
    edit: false,
  },
  reducers: {
    setEdit: (state, action) => {
      state.edit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchposts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchposts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [action.payload];
      state.error = "";
    });
    builder.addCase(fetchposts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });

    builder.addCase(deletepost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletepost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(deletepost.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });

    builder.addCase(createpost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createpost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [action.payload];
      state.error = "";
    });
    builder.addCase(createpost.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });

    builder.addCase(updatepost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updatepost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [action.payload];
      state.error = "";
    });
    builder.addCase(updatepost.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});
export const getLoading = (state) => state.posts.loading;
export const getPosts = (state) => state.posts.posts;
export const getError = (state) => state.posts.error;
export const getEdit = (state) => state.posts.edit;

export const { setEdit } = postSlice.actions;

export default postSlice.reducer;
