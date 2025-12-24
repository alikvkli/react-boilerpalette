import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks";

export default function PublicLayout() {
    const { login } = useAppSelector(state => state.app);

    if (login) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}