import { configureStore } from "@reduxjs/toolkit";
import { taskApi } from "../service/taskApi";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./reducers";
import rootSaga from '../redux/sagas/rootSaga'

let sagaMiddleware = createSagaMiddleware()
const middleware = [taskApi.middleware, sagaMiddleware]
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga)