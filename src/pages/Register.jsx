import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    register(email, password);
    navigate("/dashboard");
  };

  return (
    <div className="flex-center w-full m-10 min-h-screen bg-slate-950 px-4">

      <form
        onSubmit={handleRegister}
        className="card w-full max-w-md space-y-5 shadow-xl border border-blue-500/20"
      >

        {/* HEADER */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-white">Create account</h1>
          <p className="text-sm text-muted">Start organizing your tasks</p>
        </div>

        {/* INPUTS */}
        <div className="space-y-3">
          <input
            className="input"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* BUTTON */}
        <button className="btn-primary w-full bg-blue-600 hover:bg-blue-700">
          Register
        </button>

        {/* LINK */}
        <p
          className="text-sm text-center text-muted cursor-pointer hover:text-blue-400"
          onClick={() => navigate("/")}
        >
          Already have an account? <span className="text-blue-400">Login</span>
        </p>

      </form>
    </div>
  );
}