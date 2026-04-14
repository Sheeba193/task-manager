import { useState } from "react";

export default function TaskFilters({ setFilter }) {
  const [status, setStatus] = useState("all");

  const handleChange = (value) => {
    setStatus(value);
    setFilter(value);
  };

  return (
    <div className="flex gap-2 mb-4">
      {["all", "pending", "completed"].map(option => (
        <button
          key={option}
          onClick={() => handleChange(option)}
          className={`btn-secondary ${
            status === option ? "opacity-100" : "opacity-60"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}