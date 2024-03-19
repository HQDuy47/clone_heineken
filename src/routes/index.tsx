import React from "react";
import LandingPage from "../pages/LandingPage/LandingPage";
import StoryPage from "../pages/StoryPage/StoryPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { HeaderOnly } from "../layout";

interface Route {
  path: string;
  component: React.ComponentType<any>;
  layout?: any;
}

// Public routes
const publicRoutes: Route[] = [
  { path: "/", component: LandingPage },
  { path: "/story", component: StoryPage },
  { path: "/product", component: ProductPage },
  { path: "/*", component: NotFoundPage, layout: null },
  { path: "/admin", component: AdminPage, layout: HeaderOnly },
];

// Private routes
const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
