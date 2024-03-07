import {App} from "@/components/App/App";
import {Shop} from "@/pages/shop";
import { createBrowserRouter } from "react-router-dom";
import {UserCard} from "@packages/shared/src/components";

const routes = [
    {
        path: "/shop",
        element: <App />,
        children: [
            {
                path: "/shop/main",
                element: <Shop />,
            },
            {
                path: "/shop/second",
                element: (
                    <div style={{ color: 'red' }}>
                        <h1>Second PAGE</h1>
                        <UserCard username='Name' />
                    </div>
                )
            }
        ],
    }
]

export const router = createBrowserRouter(routes);

export default routes