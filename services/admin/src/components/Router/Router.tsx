import {App} from "@/components/App/App";
import {About} from "@/pages/about";
import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                path: '/admin/about',
                element: <About />,
            }
        ],
    },
]

export const router = createBrowserRouter(routes);

export default routes