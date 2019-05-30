import { takeEvery, put, call, take } from 'redux-saga/effects';
import { IMAGES } from '../constants';

// worker saga
function* handleImagesLoad() {
    console.log('fetching images from unsplash');
}

// watcher saga
function* rootSaga() {
    takeEvery(IMAGES.LOAD, handleImagesLoad)
};


// watcher saga => actions => worker saga
export default rootSaga;
