import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Manager from "./pages/Manager";
import Employee from "./pages/Employee";
import Help from "./pages/Help";
import Unauthorized from "./pages/Unauthorized";
import PrivateRoute from "./routes/PrivateRoute";
import RoleBasedRoute from "./routes/RoleBasedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/manager"
          element={
            <RoleBasedRoute role="Manager">
              <Manager />
            </RoleBasedRoute>
          }
        />
        <Route
          path="/employee"
          element={
            <RoleBasedRoute role="Employee">
              <Employee />
            </RoleBasedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
