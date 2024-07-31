import { ReactNode, useEffect } from "react";
import { useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";

export default function PrivateLayout({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const { login } = useAppSelector(state => state.app);

    useEffect(() => {
        if (!login) {
            navigate("/login");
        }
    }, [login])

    return children

}