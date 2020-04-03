import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const configureStore = () => {
  const middlewares = [thunk];
  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  return store;
};

const store = configureStore();
export default store;
