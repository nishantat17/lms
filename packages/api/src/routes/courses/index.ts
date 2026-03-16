import { createRoute, z } from "@hono/zod-openapi";
import { CourseSchema } from "../../types/course";

const ParamsSchema = z.object({
  id: z.uuidv4(),
});

export const getCourse = createRoute({
  method: "get",
  path: "/courses/{id}",
  request: {
    params: ParamsSchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: CourseSchema,
        },
      },
      description: "Get a course by provided id.",
    },
  },
});
