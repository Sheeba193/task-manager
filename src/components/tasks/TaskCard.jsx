import { useTasks } from "../../context/TaskContext";
import Badge from "../ui/Badge";

export default function TaskCard({ task }) {
  const { toggleStatus, deleteTask } = useTasks();

  return (
    <div className="task-row">

      <div className="task-col-title">
        {task.title}
      </div>

      <div className="task-col-date">
        {task.dueDate}
      </div>

      <div>
        <Badge type={task.priority}>{task.priority}</Badge>
      </div>

      <div>
        <Badge type={task.status}>{task.status}</Badge>
      </div>

      <div className="task-col-actions">
        <button
          onClick={() => toggleStatus(task.id)}
          className="btn-primary"
        >
          {task.status === "completed" ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="btn-danger"
        >
          Delete
        </button>
      </div>

    </div>
  );
}