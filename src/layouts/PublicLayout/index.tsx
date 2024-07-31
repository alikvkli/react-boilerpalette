import { useEffect } from "react";
import { useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();
    const { login } = useAppSelector(state => state.app);

    useEffect(() => {
        if (login) {
            navigate("/");
        }
    }, [login])

    return <>{children}</>

}