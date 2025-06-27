import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { auth, logout } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {auth.user.username}!
      </h1>
      <p>Role: {auth.user.role}</p>
      <button
        onClick={logout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
