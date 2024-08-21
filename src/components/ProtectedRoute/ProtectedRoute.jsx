import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { userInfo } = useUser();

  // 2. If there is no authenticated user, redirect to the /signin page
  useEffect(() => {
    if (!userInfo) navigate("/signin", { replace: true });
  }, [userInfo, navigate]);

  // 3. If there is a user, render the app
  if (userInfo) return children;
}

export default ProtectedRoute;
