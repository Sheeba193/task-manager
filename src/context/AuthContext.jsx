import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
  return password.length >= 6;
};

  const login = (email, password) => {
  if (!isValidEmail(email)) {
    alert("Please enter a valid email");
    return false;
  }

  if (!isValidPassword(password)) {
    alert("Password must be at least 6 characters");
    return false;
  }

  const fakeUser = { email };
  localStorage.setItem("user", JSON.stringify(fakeUser));
  setUser(fakeUser);
  return true;
};

  const register = (email, password) => {
  if (!isValidEmail(email)) {
    alert("Invalid email format");
    return false;
  }

  if (!isValidPassword(password)) {
    alert("Password must be at least 6 characters");
    return false;
  }

  const newUser = { email };
  localStorage.setItem("user", JSON.stringify(newUser));
  setUser(newUser);
  return true;
};

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);