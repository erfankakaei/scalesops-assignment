import { createBrowserRouter } from "react-router-dom";
// *** Pages
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ExtraNotes from "../pages/ExtraNotes";

const router = createBrowserRouter([
  {
    path: "/",
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
]);

export default router;
