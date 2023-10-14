import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import { PATH } from "./utils/pagePath";
import PageNotFound from "./components/PageNotFound";
import { lazy } from "react";
const LazyHome = lazy(() => import("./pages/home"));
const LazyAbout = lazy(() => import("./pages/about"));
const LazyEducation = lazy(() => import("./pages/education"));
const LazySkills = lazy(() => import("./pages/skills"));
const LazyProject = lazy(() => import("./pages/projects"));
const LazyContact=lazy(()=>import('./pages/contact'))

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: PATH.DEFAULT,
        element: <LazyHome />,
      },
      {
        path: PATH.ABOUT,
        element: <LazyAbout />,
      },
      {
        path: PATH.EDUCATION,
        element: <LazyEducation />,
      },
      {
        path: PATH.SKILLS,
        element: <LazySkills />,
      },
      {
        path: PATH.PROJECTS,
        element: <LazyProject />,
      },
      {
        path: PATH.CONTACT,
        element: <LazyContact/>,
      },
    ],
  },
  {
    element: <PageNotFound />,
    path: PATH.PAGE_NOT_FOUND,
  },
]);
