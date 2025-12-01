import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/projects/:slug", "routes/project-detail.tsx"),
  route("/writeups/:slug", "routes/writeup-detail.tsx"),
  route("/writeups/", "routes/all-writeups.tsx"),
] satisfies RouteConfig;
