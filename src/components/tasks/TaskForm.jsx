import { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import Card from "../ui/Card";
import Input from "../ui/Input";

export default function TaskForm() {
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    addTask({
      title,
      dueDate,
      priority,
    });

    setTitle("");
    setDueDate("");
    setPriority("medium");
  };

  return (
    <Card className="space-y-3">
      <h2 className="font-bold">Create Task</h2>

      <Input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <select
        className="input"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>

      <button onClick={handleSubmit} className="btn-primary w-full">
        Add Task
      </button>
    </Card>
  );
}