import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const res = login(loginData.username, loginData.password);
    if (res.success) {
      navigate("/home");
    } else {
      setError(res.message);
    }
  };

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>

        <input
          className="border border-gray-300 p-2 w-full"
          type="text"
          name="username"
          placeholder="Username"
          value={loginData.username}
          onChange={handleChange}
        />
        <input
          className="border border-gray-300 p-2 w-full"
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
