export default function Koukoku({ className }: { className?: string }) {
	return (
		<div className={`cursor-pointer max-w-[430px] w-full aspect-[3/2] bg-stone-400/25 ${className}`}>
			<div className="select-none relative w-full h-full flex flex-col items-center justify-center">
				<h2 className="text-[1.15rem] text-stone-500">koukokuの出発点</h2>
			</div>
		</div>
	)
}
