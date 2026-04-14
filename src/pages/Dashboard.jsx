import { useTasks } from "../context/TaskContext";
import Layout from "../components/layout/Layout";

export default function Dashboard() {
  const { tasks } = useTasks();

  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "completed").length;
  const pending = tasks.filter(t => t.status !== "completed").length;

  const overdue = tasks.filter(t => {
    if (!t?.dueDate) return false;
    return new Date(t.dueDate) < new Date() && t.status !== "completed";
  }).length;

  const completionRate =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  const dueSoon = tasks.filter(t => {
    if (!t?.dueDate) return false;
    const diff = new Date(t.dueDate) - new Date();
    return diff > 0 && diff < 1000 * 60 * 60 * 24;
  });

  return (
    <Layout>
      <div className="space-y-6 ">

        {/* HEADER */}
        <div>
          <h1 className="text-6xl font-bold text-white">
            Dashboard
          </h1>
          <p className="text-muted">
            Your productivity overview
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="card border border-white/5">
            <p className="text-muted text-sm">Total</p>
            <h2 className="text-2xl font-bold text-white">{total}</h2>
          </div>

          <div className="card border border-green-500/20">
            <p className="text-muted text-sm">Completed</p>
            <h2 className="text-2xl font-bold text-green-400">
              {completed}
            </h2>
          </div>

          <div className="card border border-yellow-500/20">
            <p className="text-muted text-sm">Pending</p>
            <h2 className="text-2xl font-bold text-yellow-400">
              {pending}
            </h2>
          </div>

          <div className="card border border-red-500/20">
            <p className="text-muted text-sm">Overdue</p>
            <h2 className="text-2xl font-bold text-red-400">
              {overdue}
            </h2>
          </div>

        </div>

        {/* PROGRESS */}
        <div className="card border border-blue-500/20">
          <p className="text-sm text-muted mb-2">
            Completion Progress
          </p>

          <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-3 bg-blue-500"
              style={{ width: `${completionRate}%` }}
            />
          </div>

          <p className="text-sm text-muted mt-2">
            {completionRate}% completed
          </p>
        </div>

        {/* INSIGHTS */}
        <div className="grid md:grid-cols-2 gap-4">

          <div className="card border border-yellow-500/20">
            <h3 className="font-semibold text-yellow-400 mb-3">
              ⏳ Due Soon
            </h3>

            {dueSoon.length === 0 ? (
              <p className="text-muted">No urgent tasks 🎉</p>
            ) : (
              dueSoon.map(task => (
                <div key={task.id} className="py-2 border-b border-white/5">
                  <p className="text-white">{task.title}</p>
                  <p className="text-xs text-muted">{task.dueDate}</p>
                </div>
              ))
            )}
          </div>

          <div className="card border border-red-500/20">
            <h3 className="font-semibold text-red-400 mb-3">
              ⚠️ Overdue
            </h3>

            {overdue === 0 ? (
              <p className="text-muted">All caught up 🎉</p>
            ) : (
              tasks
                .filter(t => {
                  if (!t?.dueDate) return false;
                  return (
                    new Date(t.dueDate) < new Date() &&
                    t.status !== "completed"
                  );
                })
                .map(task => (
                  <div key={task.id} className="py-2 border-b border-white/5">
                    <p className="text-white">{task.title}</p>
                    <p className="text-xs text-red-400">
                      {task.dueDate}
                    </p>
                  </div>
                ))
            )}
          </div>

        </div>

      </div>
    </Layout>
  );
}