import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Characters from "./screens/characters/Characters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "", element: <Characters /> }],
  },
]);

export default router;
