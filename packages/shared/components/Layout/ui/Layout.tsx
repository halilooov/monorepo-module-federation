import { PropsWithChildren } from "@packages/shared/types";

import classes from "./Layout.module.scss";

export function Layout({ children }: PropsWithChildren) {
  return <div className={classes.layout}>{children}</div>;
}
