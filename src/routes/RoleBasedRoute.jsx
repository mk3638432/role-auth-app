import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function RoleBasedRoute({ children, role }) {
  const { auth } = useAuth();
  if (!auth) return <Navigate to="/login" />;
  return auth.user.role === role ? children : <Navigate to="/unauthorized" />;
}
