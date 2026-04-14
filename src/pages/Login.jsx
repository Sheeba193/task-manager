import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const success = login(email, password);
    if (success) navigate("/dashboard");
    else alert("Invalid login");
  };

  return (
    <div className="relative flex-center w-80% m-10 min-h-screen bg-slate-950 px-4">

      {/* CENTER WRAPPER */}
      <div className="w-full relative flex justify-center items-center">

        <form
          onSubmit={handleLogin}
          className=" card w-full max-w-md space-y-5 shadow-xl border border-blue-500/20"
        >

          {/* HEADER */}
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-bold text-white">
              Welcome back
            </h1>
            <p className="text-sm text-muted">
              Login to continue managing your tasks
            </p>
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
          <button className="btn-primary w-full">
            Login
          </button>

          {/* FOOTER LINK */}
          <p
            className="text-sm text-center text-muted cursor-pointer hover:text-blue-400"
            onClick={() => navigate("/register")}
          >
            Don’t have an account?{" "}
            <span className="text-blue-400 font-medium">
              Create one
            </span>
          </p>

        </form>

      </div>
    </div>
  );
}