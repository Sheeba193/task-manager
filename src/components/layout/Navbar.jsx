import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex-between h-16 flex items-center justify-between px-6 border-b border-default bg-slate-950">

      <h1 className="text-lg font-bold text-white">
        Task Manager
      </h1>

      <button
        className="btn-secondary"
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </button>

    </div>
  );
}