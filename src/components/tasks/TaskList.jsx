import { useTasks } from "../../context/TaskContext";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const { tasks } = useTasks();

  if (!tasks.length) {
    return <p className="text-muted">No tasks yet.</p>;
  }

  return (
    <div className="space-y-3">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}