import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { Children } from "react";
export const RequiresAuth = ({ Children }) => {
    const location = useLocation();
    const sessionToken = localStorage.getItem("token");
    const { eToken } = useAuth();
    return sessionToken?Children:<Navigate to="/login" state={{from:location}} replace/>
}