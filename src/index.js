import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Spinner from "./components/Spinner";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Suspense fallback={<Spinner />}>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </Suspense>
  </>
);
