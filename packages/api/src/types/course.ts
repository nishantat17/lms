import { z } from "@hono/zod-openapi";

export const CourseSchema = z.object({
  id: z.uuidv4(),
  course_name: z.string(),
});

export type Course = z.infer<typeof CourseSchema>;
