import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = sessionStorage.getItem("token"); // Admin uchun token

  return token ? <Outlet /> : <Navigate to="/admin/auth/login" replace />;
};

export default ProtectedRoute;
