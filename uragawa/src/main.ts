import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { requestId } from 'hono/request-id'
import { z } from 'zod'

const log = z.object({
	id: z.string()
})

export type kotae = {
	request: string
	id: string
	timestamp: number
	event: 'load' | 'mita' | 'click' | 'mada'
}

const app = new Hono()

app.use('*', requestId(), cors())

app.get('/', (c) => {
	return c.text(c.get('requestId'))
})

const logt = app.post('/log', zValidator('json', log), (c) => {
	const logg = c.req.valid('json')
	return c.json<kotae>({
		request: c.get('requestId'),
		id: logg.id,
		timestamp: Date.now(),
		event: 'load'
	})
})

export type Logt = typeof logt
export default app
