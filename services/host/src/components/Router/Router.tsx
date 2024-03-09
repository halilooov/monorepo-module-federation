import {App} from "@/components/App/App";
import { createBrowserRouter } from "react-router-dom";
import shopRoutes from "shop/Router";
import adminRoutes from "prayerTime/Router";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            ...shopRoutes,
            ...adminRoutes
        ],
    },
]

export const router = createBrowserRouter(routes);
