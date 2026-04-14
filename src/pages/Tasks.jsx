import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import Layout from "../components/layout/Layout";

export default function Tasks() {
  const { tasks, addTask, toggleStatus, deleteTask } = useTasks();

  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");
  const [filter, setFilter] = useState("all");

  const handleAdd = (e) => {
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

  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    return task.status === filter;
  });

  return (
    <Layout>
      <div className="space-y-6">

        <h1 className="text-2xl font-bold">Tasks</h1>

        {/* FILTERS */}
        <div className="flex gap-2">
          {["all", "pending", "completed"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`btn-secondary ${
                filter === f ? "opacity-100" : "opacity-60"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* FORM */}
        <form onSubmit={handleAdd} className="card space-y-3">

          <input
            className="input"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="input"
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

          <button className="btn-primary w-full">
            Add Task
          </button>

        </form>

        {/* TASK LIST */}
        <div className="space-y-3">

          {filteredTasks.length === 0 ? (
            <p className="text-muted">No tasks found.</p>
          ) : (
            filteredTasks.map(task => (
              <div
                key={task.id}
                className="card flex justify-between items-center"
              >

                <div>
                  <h3 className="font-semibold">{task.title}</h3>
                  <p className="text-sm text-muted">
                    {task.dueDate}
                  </p>

                  <div className="flex gap-2 mt-2">
                    <span className="badge">{task.priority}</span>
                    <span className="badge">{task.status}</span>
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

              </div>
            ))
          )}

        </div>

      </div>
    </Layout>
  );
}