'use client'

import { useEffect, useState } from 'react'
import { tsuku } from './okuru'

export default function Koukoku({ className }: { className?: string }) {
	const [log, getLog] = useState<boolean>()
	useEffect(() => {
		;(async () => {
			const getlog = await tsuku()
			console.log(getlog.log)
			getLog(getlog.success)
		})()
	}, [])
	return (
		<div className={`cursor-pointer max-w-[430px] w-full aspect-[3/2] bg-stone-400/25 ${className}`}>
			<div className="select-none relative w-full h-full flex flex-col items-center justify-center">
				<h2 className="text-[1.15rem] text-stone-500">koukokuの出発点</h2>
				<h2 className="text-[1.15rem] text-stone-400">{log ? 'あ' : 'い'}</h2>
			</div>
		</div>
	)
}
