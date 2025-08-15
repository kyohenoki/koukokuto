import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { requestId } from 'hono/request-id'
import { z } from 'zod'

const log = z.object({
	id: z.string()
})

const app = new Hono()
	.use('*', requestId())
	.get('/', (c) => {
		return c.text(c.get('requestId'))
	})
	.post('/log', zValidator('json', log), (c) => {
		const logg = c.req.valid('json')
		return c.json({
			request: c.get('requestId'),
			id: logg.id
		})
	})

export type App = typeof app
export default app
