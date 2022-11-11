import { call, fork, put, takeLatest } from "redux-saga/effects"
import { getAllTasks, setAllTasks, addTask, deleteTask, deleteSuccess, setTaskDetail, getTaskDetail, updateTask, setAddTask } from "../slices/userTaskSlice"
import { taskApi } from "../../service/API"

// ############### getAllTask List ############### 
function* getTasksListAsync() {
    try {
        const fetchData = async () => {
            const res = await taskApi.get('/tasks')
            return res
        }
        const result = yield call(fetchData)
        if (result?.data /* && Object.keys(result.data).length */) {

            yield put(setAllTasks(result?.data))
        }
    } catch (err) {
        console.log('err', err)
    }
}

function* getTasksList() {
    yield takeLatest(getAllTasks.type, getTasksListAsync)
}

// ############### getTask by ID ############### 
function* getTaskAsync({ payload }) {
    try {
        const fetchData = async (payload) => {
            const res = await taskApi.get(`/tasks/${payload}`)
            return res
        }
        const result = yield call(fetchData, payload)
        if (result?.data) {
            yield put(setTaskDetail(result?.data))
        }

    } catch (err) {
        console.log('err', err)
    }
}
function* getTaskData() {
    yield takeLatest(getTaskDetail.type, getTaskAsync)
}

// ############### addTask into list############### 
function* addTasksListAsync({ payload }) {
    try {
        const fetchData = async (payload) => {
            const res = await taskApi.post('/tasks', payload)
            return res
        }
        const result = yield call(fetchData, payload)
        if (result?.data) {
            yield put(setAddTask(result.data))
        }
    } catch (err) {
        console.log('err', err)
    }
}

function* addTaskList() {
    yield takeLatest(addTask.type, addTasksListAsync)
}

// ############### deleteTask by ID ############### 
function* deleteTaskAsync({ payload }) {
    const id = payload
    try {
        const fetchData = async (id) => {
            const res = await taskApi.delete(`/tasks/${id}`)
            return res
        }
        const result = yield call(fetchData, id)
        if (result?.status === 200) {
            yield put(deleteSuccess(id))
        }
    } catch (err) {
        console.log('err', err)
    }
}

function* deleteTaskList() {
    yield takeLatest(deleteTask.type, deleteTaskAsync)
}

// ############### updateTask by ID ############### 
function* updateTaskAsync({ payload }) {
    const { id, ...rest } = payload
    try {
        const fetchData = async (id) => {
            const res = await taskApi.put(`/tasks/${id}`, { ...rest })
            return res
        }
        /* const result =  */yield call(fetchData, id)
        // if (result?.status === 200 /* && Object.keys(result.data).length */) {
        //     yield call(fetchData, payload)
        // }
    } catch (err) {
        console.log('err', err)
    }
}

function* updateTaskList() {
    yield takeLatest(updateTask.type, updateTaskAsync)
}

export const userTaskSagas = [fork(getTasksList), fork(addTaskList), fork(deleteTaskList), fork(getTaskData), fork(updateTaskList)]