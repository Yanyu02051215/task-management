import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import {connectRouter, routerMiddleware} from 'connected-react-router'

// Import reducers
import {TasksReducer} from '../reducers/tasks';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      tasks: TasksReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  );
}
