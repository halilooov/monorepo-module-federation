import { Link, Outlet } from "react-router-dom";

import {adminRoutes, shopRoutes} from "@packages/shared/src/routes";

export const App = () => {

  return (
      <div>
        <h1>PAGE</h1>
        <Link to={adminRoutes.about}>About</Link>
        <br/>
        <Link to={shopRoutes.main}>Shop</Link>
        <Outlet />
      </div>
  );
};
