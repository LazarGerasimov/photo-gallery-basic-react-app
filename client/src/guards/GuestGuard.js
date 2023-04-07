import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom";


export const GuestGuard = () => {
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate to={'/auth/login'} />
    }
    return <Outlet />
}