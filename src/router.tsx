import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Characters from "./screens/characters/Characters";
import Character from "./screens/characters/character/Character";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "", element: <Characters /> ,children:[{ path:`feed/:characterId`,element:<Character/>},]}],
  },
]);

export default router;
