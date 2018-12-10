import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ContactReducer from './Reducers/ContactReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(ContactReducer,
  composeEnhancers(applyMiddleware(thunk)),
  );
export default store;
