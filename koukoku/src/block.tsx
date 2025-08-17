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
				<div className='text-[0.75rem] text-stone-400'>
					<Logt l={log} dasu={true} />
				</div>
			</div>
		</div>
	)
}

function Logt({ l, dasu }: { l?: tsukukomoku, dasu: boolean }) {
	if (l && dasu) {
		if (l.success && l.log) {
			return (
				<div className='flex flex-col items-center mt-1'>
					<h3><strong className='pr-1'>request</strong>{l.log.request}</h3>
					<h3><strong className='pr-1'>id</strong>{l.log.id}</h3>
					<h3><strong className='pr-1'>timestamp</strong>{l.log.timestamp}</h3>
					<h3><strong className='pr-1'>event</strong>{l.log.event}</h3>
				</div>
			)
		} else if (l.message) {
			return <h3>{l.message}</h3>
		}
	}
}
