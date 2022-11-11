import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FetchPost from "./components/reduxToolkit/userPost/index";
import AddPost from "./components/reduxToolkit/userPost/createPost";
import Counter from "./components/reduxToolkit/Counter";
import TaskManager from "./components/reduxToolkit/userTask/TaskManager";
import AddTask from "./components/reduxToolkit/userTask/AddTask";
import UserTask from "./components/reduxToolkit/userTask";
import UpdateTask from "./components/reduxToolkit/userTask/UpdateTask";
import Home from "./components/Home";
import HomeSaga from "./components/reduxSaga/Home";
import MovieList from "./components/reduxSaga/MovieList";
import Movie from "./components/reduxSaga/Movie";
import UserTaskSaga from './components/reduxSaga/userTask'
import TaskManagerSaga from './components/reduxSaga/userTask/TaskManager'
import AddTaskSaga from './components/reduxSaga/userTask/AddTask'
import UpdateTaskSaga from './components/reduxSaga/userTask/UpdateTask'
// import ReduxToolkit from "./components/reduxToolkit/ReduxToolkit";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redux-saga-example/" element={<HomeSaga />} >
          <Route path='movie-app' element={<MovieList />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='crud-app/' element={<UserTaskSaga />} >
            <Route path='all-task' element={<TaskManagerSaga />} />
            <Route path='add-task' element={<AddTaskSaga />} />
            <Route path='update-task/:id' element={<UpdateTaskSaga />} />
          </Route>
        </Route>

        <Route path="/redux-toolkit-example/" /* element={<ReduxToolkit />} */ >
          <Route index={true} element={<FetchPost />} />
          <Route path="create" element={<AddPost />} />
          <Route path="update" element={<AddPost />} />
          <Route path="counter" element={<Counter />} />
          <Route path="user-task/" element={<UserTask />}>
            <Route path="all-task" element={<TaskManager />} />
            <Route path="add-task" element={<AddTask />} />
            <Route path="update-task/:id" element={<UpdateTask />} />
          </Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
