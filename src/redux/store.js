import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './Features/Todo/todoSlice';

export default configureStore({
  reducer: {
    todos: todoSlice,
  },
});
