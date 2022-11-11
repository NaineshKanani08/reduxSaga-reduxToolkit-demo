import { combineReducers } from "redux";
import postSlice from "./slices/postSlice";
import counterSlice from "./slices/counterSlice";
import { taskApi } from "../service/taskApi";
import movieSlice from "./slices/movieSlice";
import userTaskSlice from "./slices/userTaskSlice";
const reducers = combineReducers({
  posts: postSlice,
  count: counterSlice,
  movies: movieSlice,
  tasks: userTaskSlice,
  [taskApi.reducerPath]: taskApi.reducer,
});
export default reducers;
