import { createBrowserRouter } from "react-router-dom"
import Root from "./root"
import W2Task1 from "../pages/weeks/week-2/task_1";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
        ]
    }
])