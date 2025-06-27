import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-xl">
        <Link to="/">RoleAuthApp</Link>
      </div>
      <div className="space-x-4">
        <Link to="/help" className="hover:underline">
          Help
        </Link>

        {auth && (
          <>
            <Link to="/home" className="hover:underline">
              Home
            </Link>

            {auth.user.role === "Manager" && (
              <Link to="/manager" className="hover:underline">
                Manager
              </Link>
            )}
            {auth.user.role === "Employee" && (
              <Link to="/employee" className="hover:underline">
                Employee
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}

        {!auth && (
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
