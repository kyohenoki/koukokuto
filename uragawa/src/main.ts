import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { requestId } from 'hono/request-id'
import { z } from 'zod'

const app = new Hono()

app.use('*', requestId(), cors())

app.get('/', (c) => {
	return c.text(c.get('requestId'))
})

const log = z.object({
	id: z.string(),
	session: z.uuidv4()
})

export type kotae = {
	request: string
	session: string
	id: string
	timestamp: number
	event: 'load' | 'mita' | 'click' | 'mada'
}

const logt = app.post('/log', zValidator('json', log), (c) => {
	const logg = c.req.valid('json')
	const dekita: kotae = {
		request: c.get('requestId'),
		session: logg.session,
		id: logg.id,
		timestamp: Date.now(),
		event: 'load'
	}
	return c.json(dekita)
})

export type Logt = typeof logt
export default app
