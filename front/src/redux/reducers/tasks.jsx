import * as Actions from '../actions/tasks'
import initialState from '../store/initialState';

export const TasksReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case Actions.ADD_TASKS:
      return {
        ...state,
        list: [...action.payload]
      }
    default:
      return state
  }
}