import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers';
import rootSaga from '../sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const store = createStore(rootReducer,
        compose(applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()),
    );
    // then run the saga
    sagaMiddleware.run(rootSaga)

    store.dispatch({type:'LOGIN'});
    store.dispatch({type:'LOGOUT'});
    return store;
};

export default configureStore;