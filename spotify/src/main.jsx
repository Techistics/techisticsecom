import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Global styles
import "../font-6/css/all.css"; // Font Awesome icons
import "../font-6/css/sharp-light.css"; // Custom font styles
import "../font-6/css/sharp-regular.css"; // Custom font styles
import "../font-6/css/sharp-solid.css"; // Custom font styles

import { RouterProvider } from "react-router-dom"; // Router Provider for routing
import { router } from "./Router.jsx"; // Your app's router configuration
import ErrorBoundary from "./ErrorBoundary.jsx"; // Error boundary for catching errors

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
