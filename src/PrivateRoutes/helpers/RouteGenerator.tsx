import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";


const roleBasedRedirect = (adminRoute: string, userRoute: string) => {
  const userRole = useAppSelector((state: any) => state.auth.role);

  if (userRole === "admin") {
    return <Navigate to={adminRoute} />;
  } else if (userRole === "user") {
    return <Navigate to={userRoute} />;
  } else {
    return <Navigate to="/login" />; // Redirect to login if no valid role
  }
}

export default roleBasedRedirect;
