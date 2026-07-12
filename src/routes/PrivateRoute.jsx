import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/common/Loader/Loader";

function PrivateRoute({ children }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Loader fullScreen text="Authenticating..." />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;