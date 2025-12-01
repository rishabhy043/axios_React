import React from 'react';
import { createStore } from 'redux';

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
  task: [],
};

const ReduxApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK: {
      const updateTask = state.task.filter((CurTask, index) => index !== action.payload);
      return {
        ...state,
        task: updateTask,
      };
    }

    default:
      return state;
  }
};
export default ReduxApp;

// ✅ FIXED → use ReduxApp instead of undefined "reducer"
const store = createStore(ReduxApp);
console.log(store);

// Dispatching actions
store.dispatch({ type: ADD_TASK, payload: "Java Developer" });
console.log("Updated task:", store.getState());

store.dispatch({ type: ADD_TASK, payload: "FrontEnd Developer" });
console.log("Updated task:", store.getState());

store.dispatch({ type: DELETE_TASK, payload: 1 });
console.log("Updated task (after delete):", store.getState());
