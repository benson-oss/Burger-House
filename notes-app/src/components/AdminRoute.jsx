import { Navigate } from "react-router-dom";

export default function AdminRoute({
  user,
  children,
}) {

  // =========================
  // NOT LOGGED IN
  // =========================

  if (!user) {
    return (
      <Navigate
        to="/auth"
        replace
      />
    );
  }

  // =========================
  // NOT ADMIN
  // =========================

  if (user.role !== "admin") {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  // =========================
  // ADMIN
  // =========================

  return children;
}