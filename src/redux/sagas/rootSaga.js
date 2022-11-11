import { all } from 'redux-saga/effects'
import { movieSagas } from './movieSagas'
import { userTaskSagas } from './userTaskSagas'

export default function* rootSaga() {
    yield all([...movieSagas, ...userTaskSagas])
}