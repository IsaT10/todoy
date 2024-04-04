import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = JSON.parse(localStorage.getItem('todos')) || [];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // add id to todo
      const id = state.length > 0 ? state[state.length - 1].id + 1 : 1;

      state.push({ id, todo: action.payload, status: 'incomplete' });

      // insert todo list in local storage
      localStorage.setItem('todos', JSON.stringify(state));
    },

    toggleTodoStatus: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      console.log(todo);
      if (todo) {
        // change todo status conditionaly
        todo.status = todo.status === 'incomplete' ? 'complete' : 'incomplete';
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },

    deleteTodo: (state, action) => {
      // find delete item
      const removeItem = state.findIndex((todo) => todo.id === action.payload);

      if (removeItem !== -1) {
        // remove item fron initial state
        state.splice(removeItem, 1);

        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoStatus } = todoSlice.actions;

export default todoSlice.reducer;
