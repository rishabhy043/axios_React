import React from 'react';

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
  task: [],
}

const ReduxApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      }

    default:
      return state;
  }
};

export default ReduxApp;