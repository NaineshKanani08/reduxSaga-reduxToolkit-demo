import { createSlice } from "@reduxjs/toolkit";

const userTaskSlice = createSlice({
    name: "userTask",
    initialState: {
        tasksList: [],
        task: {},
        deleteFlag: false,
    },
    reducers: {
        getAllTasks(state) {
            return state
        },
        setAllTasks: (state, action) => {
            state.tasksList = action.payload
            state.deleteFlag = false
        },
        addTask(action) {
            return action.payload
        },
        setAddTask: (state, action) => {
            state.task = action.payload
        },
        deleteTask(id) {
            return id
        },
        deleteSuccess(state, id) {
            const newState = state.tasksList.filter(todo => todo.id !== id)
            state.tasksList = newState
            state.deleteFlag = true
        },
        getTaskDetail(id) {
            return id
        },
        setTaskDetail: (state, action) => {
            state.task = action.payload
        },
        updateTask(action) {
            return action.payload
        }
    }
})
export const { getAllTasks, setAllTasks, addTask, deleteTask, deleteSuccess, getTaskDetail, setTaskDetail, updateTask, setAddTask } = userTaskSlice.actions
export default userTaskSlice.reducer