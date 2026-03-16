import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import { getCourse } from "./routes/courses";

const app = new OpenAPIHono();

app.get("/docs", Scalar({ url: "openapi.json" }));

app.openapi(getCourse, async (c) => {
  const { id } = c.req.valid("param");

  return c.json(
    {
      id: id,
      course_name: "Test Course",
    },
    200,
  );
});

app.doc("/openapi.json", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

export default {
  port: 8000,
  fetch: app.fetch,
};
