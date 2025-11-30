import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/projects/:id", "routes/project-detail.tsx"),
  route("/writeups/:slug", "routes/writeup-detail.tsx"),
] satisfies RouteConfig;
