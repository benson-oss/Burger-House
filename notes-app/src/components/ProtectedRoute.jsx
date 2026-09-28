import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  user,
  children,
}) {

  // User is not logged in
  if (!user) {
    return (
      <Navigate
        to="/auth"
        replace
      />
    );
  }

  // User is logged in
  return children;
}