import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

function ProtectedAuth({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { userInfo } = useUser();

  // 2. If there is authenticated user, redirect to the app
  useEffect(() => {
    if (userInfo) navigate("/", { replace: true });
  }, [userInfo, navigate]);

  // 3. If there is not a user, render Auth
  if (!userInfo) return children;
}

export default ProtectedAuth;
