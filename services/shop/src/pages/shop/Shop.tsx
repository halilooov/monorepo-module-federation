import { Link } from "react-router-dom";
import { shopRoutes } from "@packages/shared/routes";

export default function Shop() {
  return (
    <div>
      <h1>SHOP PAGE</h1>
      <Link to={shopRoutes.second}>Second</Link>
    </div>
  );
}
