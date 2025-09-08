import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    markComplete: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.completed = true;
    },
    // deleteTask: (state, action) => {
    //   state.tasks = state.tasks.filter(t => t.id !== action.payload);
    // },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, markComplete, deleteTask, setTasks } = todoSlice.actions;
export default todoSlice.reducer;

