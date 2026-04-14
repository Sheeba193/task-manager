import { useTasks } from "../../context/TaskContext";
import Badge from "../ui/Badge";
import Card from "../ui/Card";

export default function TaskCard({ task }) {
  const { toggleStatus, deleteTask } = useTasks();

  return (
    <Card className="flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-muted text-sm">{task.dueDate}</p>

        <div className="mt-2 flex gap-2">
          <Badge type={task.priority}>{task.priority}</Badge>
          <Badge type={task.status}>{task.status}</Badge>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          className="btn-secondary"
          onClick={() => toggleStatus(task.id)}
        >
          Toggle
        </button>

        <button
          className="btn-secondary"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </Card>
  );
}