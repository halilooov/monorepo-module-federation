import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";

import { router } from "@/components/Router/Router";

const root = document.getElementById("root");

if (!root) throw new Error("DOM element root not found");

const container = createRoot(root);

container.render(
  <StrictMode>
    <Suspense fallback={"loading..."}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
