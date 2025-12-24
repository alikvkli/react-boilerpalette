import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks";

export default function PrivateLayout() {
    const { login } = useAppSelector(state => state.app);

    if (!login) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}