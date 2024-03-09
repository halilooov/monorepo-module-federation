import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { Layout, Loading } from "@packages/shared/components";

import { router } from "@/components/Router/Router";

const root = document.getElementById("root");

if (!root) throw new Error("DOM element root not found");

const container = createRoot(root);

container.render(
  <StrictMode>
    <Layout>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </Layout>
  </StrictMode>,
);
