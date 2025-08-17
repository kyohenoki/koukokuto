import { useEffect, useState } from 'react'
import { tsuku, type tsukukomoku } from './okuru'

export default function Koukoku({ className }: { className?: string }) {
	const [log, setLog] = useState<tsukukomoku>()
	useEffect(() => {
		;(async () => {
			const getlog = await tsuku()
			setLog(getlog)
		})()
	}, [])
	return (
		<div className={`cursor-pointer max-w-[430px] w-full aspect-[3/2] bg-stone-400/25 ${className}`}>
			<div className="select-none relative w-full h-full flex flex-col items-center justify-center">
				<h2 className="text-[1.15rem] text-stone-500">koukokuの出発点</h2>
				<Logt l={log} dasu={true} />
			</div>
		</div>
	)
}

function Logt({ l, dasu }: { l?: tsukukomoku; dasu: boolean }) {
	if (l && dasu) {
		if (l.success && l.log) {
			return (
				<div className="flex flex-col items-center mt-1 text-[0.75rem] text-stone-400">
					<Komoku text="request" youso={l.log.request} />
					<Komoku text="session" youso={l.log.session} />
					<Komoku text="id" youso={l.log.id} />
					<Komoku text="timestamp" youso={l.log.timestamp.toString()} />
					<Komoku text="event" youso={l.log.event} />
				</div>
			)
		} else if (l.message) {
			return <h3 className="text-[0.75rem] text-stone-400">{l.message}</h3>
		}
	}
}

function Komoku({ text, youso }: { text: string; youso: string }) {
	return (
		<h3>
			<span className="font-medium text-stone-500">{text}</span> ･ {youso}
		</h3>
	)
}
