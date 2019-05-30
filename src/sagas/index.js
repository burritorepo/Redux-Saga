import { takeEvery, put, call, take } from 'redux-saga/effects';

// worker saga
function* workerSaga() {
    console.log('Hello from workerSaga');
    console.log(put({type:'ACTION_FROM_WORKER'}));
    yield put({type:'ACTION_FROM_WORKER'});
}

function* byebyeSaga() {
    console.log('bye bye');
}

// watcher saga
function* rootSaga() {
    yield take('LOGIN');
    yield call(workerSaga);
/*     yield take('ADD_TO_CART');
    yield take('BUY'); */
    yield take('LOGOUT');
    yield call(byebyeSaga);
};


// watcher saga => actions => worker saga

export default rootSaga;
