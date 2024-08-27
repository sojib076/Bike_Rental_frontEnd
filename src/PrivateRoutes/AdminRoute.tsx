/* eslint-disable @typescript-eslint/no-explicit-any */

import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";


const AdminRoute = ({children}:any) => {
  const userRole = useAppSelector((state) => state.userAuth.role);

  if (userRole !== "admin") {
    // Redirect user if not admin
    return <Navigate to="/login" />;
  }

  return children ; // Render the protected component
};

export default AdminRoute;
