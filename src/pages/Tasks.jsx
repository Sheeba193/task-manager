import { useState } from "react";
import { useTasks } from "../context/TaskContext";

import Layout from "../components/layout/Layout";
import Badge from "../components/ui/Badge";

export default function Tasks() {
  const { tasks, addTask, toggleStatus, deleteTask } = useTasks();

  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");
  const [filter, setFilter] = useState("all");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title) return;

    addTask({ title, dueDate, priority });

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
        <div className="flex-spacing">
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

        {/* TABLE */}
        <div className="table-row">
          {/* HEADER */}
          <div className="flex-between">
            <div className="width-min">Title</div>
            <div className="width-min">Due Date</div>
            <div className="width-min">Priority</div>
            <div className="width-min">Status</div>
            <div className="text-right">Actions</div>
          </div>

          {/* ROWS */}
          {filteredTasks.length === 0 ? (
            <p className=" p-4 text-gray-500">No tasks found.</p>
          ) : (
            filteredTasks.map(task => {
              const isOverdue =
                new Date(task.dueDate) < new Date() &&
                task.status !== "completed";

              return (
                <div
                  key={task.id}
                  className={`flex-rows px-6 py-4 items-center border-b hover:bg-gray-50 ${
                    isOverdue ? "bg-red-50" : ""
                  }`}
                >

                  {/* TITLE */}
                  <div className="width-min font-medium truncate">
                    {task.title}
                  </div>

                  {/* DATE */}
                  <div className="width-min text-gray-500 text-sm">
                    {task.dueDate}
                  </div>

                  {/* PRIORITY */}
                  <div className="width-min">
                    <Badge type={task.priority}>
                      {task.priority}
                    </Badge>
                  </div>

                  {/* STATUS */}
                  <div className="width-min">
                    <Badge type={task.status}>
                      {task.status}
                    </Badge>
                  </div>

                  {/* ACTIONS */}
                  <div className=" button-spacing">
                    <button
                      onClick={() => toggleStatus(task.id)}
                      className="btn-medium bg-green-500 text-white px-3 py-1 rounded text-sm"
                    >
                      {task.status === "completed"
                        ? "Undo"
                        : "Complete"}
                    </button>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="btn-medium bg-red-500 text-white px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>

                </div>
              );
            })
          )}

        </div>

      </div>
    </Layout>
  );
}