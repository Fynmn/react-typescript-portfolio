import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/styles/index.css";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <App />
  </React.StrictMode>
);
