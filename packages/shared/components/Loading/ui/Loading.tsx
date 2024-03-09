import Loader from "@packages/shared/assets/images/loader.svg";

import classes from "./Loading.module.scss";

export function Loading() {
  return (
    <div className={classes.root}>
      <Loader className={classes.loader} />
    </div>
  );
}
