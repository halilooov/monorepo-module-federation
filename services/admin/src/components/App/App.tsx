import { Link, Outlet } from "react-router-dom";
import {UserCard} from "@packages/shared/src/components";

export const App = () => {

  return (
      <div>
        <h1>ADMIN MODULE</h1>
        <UserCard username='FROM ADMIN' />
        <Outlet />
      </div>
  );
};
