import { createBrowserRouter } from "react-router-dom"
import Root from "./root"
import HomePage from "@/pages/home"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <HomePage />
            }
        ]
    }
])