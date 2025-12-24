import { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./root";
import { PATHS } from "./paths";

// Lazy loading pages
const HomePage = lazy(() => import("@/pages/home"));
const PrivateLayout = lazy(() => import("@/layouts/PrivateLayout"));
const PublicLayout = lazy(() => import("@/layouts/PublicLayout"));

import PageLoader from "@/components/PageLoader";

export const router = createBrowserRouter([
    {
        path: PATHS.ROOT,
        element: (
            <Suspense fallback={<PageLoader />}>
                <Root />
            </Suspense>
        ),
        children: [
            {
                element: <PrivateLayout />,
                children: [
                    // {
                    //     path: PATHS.HOME,
                    //     element: <HomePage />
                    // }
                ]
            },
            {
                element: <PublicLayout />,
                children: [
                    {
                        path: PATHS.LOGIN,
                        element: <div className="p-8 text-center">Login Page (Placeholder)</div>
                    },
                    {
                        path: PATHS.HOME,
                        element: <HomePage />
                    }
                ]
            },
            {
                path: PATHS.NOT_FOUND,
                element: <Navigate to={PATHS.ROOT} replace />
            }
        ]
    }
]);