import { useTasks } from "../../context/TaskContext";
import Badge from "../ui/Badge";
import Card from "../ui/Card";

export default function TaskCard({ task }) {
  const { toggleStatus, deleteTask } = useTasks();

  return (
    <div className={`task-card ${task.status === "completed" ? "completed" : ""}`}>

      {/* LEFT SIDE */}
      <div className="task-info">
        <h3>{task.title}</h3>
        <p>{task.dueDate}</p>

        <div className="task-badges">
          <Badge type={task.priority}>{task.priority}</Badge>
          <Badge type={task.status}>{task.status}</Badge>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="task-actions">

        <button onClick={() => toggleStatus(task.id)}>
          {task.status === "completed" ? "Undo" : "Complete"}
        </button>

        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>

      </div>

    </div>
  );
}