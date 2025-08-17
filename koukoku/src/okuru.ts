import type { Logt } from '@uragawa/main'
import { hc } from 'hono/client'

const client = hc<Logt>('http://localhost:8787')

export type tsukukomoku = Awaited<ReturnType<typeof tsuku>>

export async function tsuku() {
	try {
		const uuid = crypto.randomUUID()
		const res = await client.log.$post({
			json: {
				id: 'ichiban',
				session: uuid
			}
		})
		if (res.ok) {
			const result = await res.json()
			return {
				success: true,
				log: result
			}
		} else {
			return {
				success: false
			}
		}
	} catch (error) {
		return {
			success: false,
			message: String(error)
		}
	}
}
