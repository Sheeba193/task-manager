import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar p-4 space-y-2">

      <Link
        to="/dashboard"
        className={`block p-3 rounded transition ${
          isActive("/dashboard")
            ? "bg-blue-600 text-white"
            : "text-white hover:bg-slate-800"
        }`}
      >
        📊 Dashboard
      </Link>

      <Link
        to="/tasks"
        className={`block p-3 rounded transition ${
          isActive("/tasks")
            ? "bg-blue-600 text-white"
            : "text-white hover:bg-slate-800"
        }`}
      >
        ✅ Tasks
      </Link>

    </div>
  );
}