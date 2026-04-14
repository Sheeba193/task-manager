import { useTasks } from "../context/TaskContext";
import Layout from "../components/layout/Layout";

export default function Dashboard() {
  const { tasks } = useTasks();

  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "completed").length; // completed if status is "completed"
  const pending = tasks.filter(t => t.status !== "completed").length; // pending if status is not "completed"

  const overdue = tasks.filter(t => {
    if (!t?.dueDate) return false;
    return new Date(t.dueDate) < new Date() && t.status !== "completed"; // overdue if past due date and not completed
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
      <div className="space-y-6 dashboard-header">

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
        <div className="stats-grid">

          <div className="stats-card">
            <p className="stats-title">Total Tasks</p>
            <h2 className="stats-value">{total}</h2>
          </div>

          <div className="stats-card green">
            <p className="stats-title">Completed Tasks</p>
            <h2 className="stats-value text-green-400">{completed}</h2>
          </div>

          <div className="stats-card yellow">
            <p className="stats-title">Pending Tasks</p>
            <h2 className="stats-value text-yellow-400">{pending}</h2>
          </div>

          <div className="stats-card red">
            <p className="stats-title">Overdue Tasks</p>
            <h2 className="stats-value text-red-400">{overdue}</h2>
          </div>

        </div>

        
        {/* PROGRESS */}
        <div className="card border border-blue-500/20">
          <p className="progress mb-2">
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
        <div className="stats-insights">

          <div className="card border border-yellow-500/20">
            <h3 className=" font-semibold text-yellow-400 mb-3">
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
            <h3 className=" font-semibold text-red-400 mb-3">
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