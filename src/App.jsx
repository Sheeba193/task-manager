import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import Tasks from "@/pages/Tasks";

import { AuthProvider, useAuth } from "@/context/AuthContext";
import { TaskProvider } from "@/context/TaskContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth(); // ✅ use context instead of localStorage

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <Routes>

            {/* AUTH */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* PROTECTED */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/tasks"
              element={
                <ProtectedRoute>
                  <Tasks />
                </ProtectedRoute>
              }
            />

            {/* fallback */}
            <Route path="*" element={<Navigate to="/" />} />

          </Routes>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}