import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom";


export const UserGuard = () => {
    const { user } = useContext(AuthContext);
    if (user) {
        return <Navigate to={'/'} />
    }
    return <Outlet />
}