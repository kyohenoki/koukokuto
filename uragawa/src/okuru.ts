import { hc } from 'hono/client'
import type { App } from './main'

const client = hc<App>('http://localhost:8787')

console.log(await tsuku())

export async function tsuku() {
	try {
		const res = await client.log.$post({
			json: {
				id: 'ichiban'
			}
		})
		if (res.ok) {
			const result = await res.json()
			return {
				success: true,
				log: {
					request: result.request,
					id: result.id,
					timestamp: result.timestamp,
					event: result.event
				}
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
