import { mockTasks } from "../data/mockTasks";

export const initMockData = () => {
  const existingTasks = localStorage.getItem("tasks");

  if (!existingTasks) {
    localStorage.setItem("tasks", JSON.stringify(mockTasks));
  }
};