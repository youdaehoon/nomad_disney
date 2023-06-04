import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { QueryClient,QueryClientProvider} from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient()


root.render(
  <React.StrictMode>
        <QueryClientProvider client={queryClient}>

    <ThemeProvider theme={{}}>
      <RouterProvider router={router} />
    </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
