import { Suspense, lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
// *** Suspense fallback
import SuspenseFallback from "../components/representational/global/SuspenseFallback";
// *** Pages
const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const ExtraNotes = lazy(() => import("../pages/ExtraNotes"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/extra-notes",
        element: <ExtraNotes />,
      },
    ],
  },
]);

export default router;
