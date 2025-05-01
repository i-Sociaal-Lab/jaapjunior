import { Hono } from "hono";
import { api } from "./api.js";

const app = new Hono().route("/api/v1", api);

export type AppType = typeof app;
export default app;
