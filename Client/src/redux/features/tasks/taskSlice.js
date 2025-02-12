import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [{
    id: 1,
    status: "pending",
    title: "Remove Button",
    description:
      "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
    date: "2023-08-28",
    assignedTo: "Abu Saiyed Joy",
    priority: "high",
  }],
  usersTask: []
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.task.length === 0) {
        state.task.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.task.at(-1);
        state.task.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    taskRemove: (state, { payload }) => {
      state.task = state.task.filter((item) => item.id !== payload);
    },
    updateTask: (state, { payload }) => {
      const result = state.task.find((item) => item.id === payload.id);
      result.status = payload.status;
    },
    userTask: (state, { payload }) => {
      state.usersTask = state.task.filter((item) => item.assignedTo === payload);
    },
  },
});

export const { addTask, taskRemove, updateTask, userTask } = taskSlice.actions;

export default taskSlice.reducer;
