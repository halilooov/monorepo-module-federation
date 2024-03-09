import { Root } from "@/pages/Root";

import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
        path: "/prayer",
        element: <Root />,
    },
]

export const router = createBrowserRouter(routes);

export default routes