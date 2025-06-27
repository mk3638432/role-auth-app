import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const users = [
  { username: "employee1", password: "123456", role: "Employee" },
  { username: "manager1", password: "abcdef", role: "Manager" },
];

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (stored) setAuth(JSON.parse(stored));
  }, []);

  const login = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    console.log(user, 54343323);
    if (user) {
      const token = { token: "fake-token", user };
      localStorage.setItem("auth", JSON.stringify(token));
      setAuth(token);
      return { success: true };
    }
    return { success: false, message: "Invalid credentials" };
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
