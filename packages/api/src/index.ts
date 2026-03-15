import { Hono } from 'hono'
import { } from "bun";

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
