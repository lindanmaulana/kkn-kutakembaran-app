export const MemberDefault = () => {
	return (
		<div className="grid md:grid-cols-12 gap-12 items-start">
			<div className="md:col-span-4 w-full">
				<div className="aspect-3/4 w-full rounded-2xl bg-gray-200 shadow-md border border-gray-100 flex items-center justify-center">
					<svg className="size-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.5}
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						/>
					</svg>
				</div>
			</div>

			<div className="md:col-span-8 space-y-6 w-full">
				<div className="space-y-3">
					<div className="h-10 md:h-12 w-2/3 bg-gray-200 rounded-xl" />
					<div className="h-6 w-1/3 bg-gray-100 rounded-lg" />
				</div>

				<div className="flex flex-wrap gap-3">
					<div className="h-7 w-36 bg-gray-100 rounded-full" />
					<div className="h-7 w-48 bg-gray-100 rounded-full" />
				</div>

				<div className="space-y-3 pt-2">
					<div className="h-5 w-full bg-gray-200 rounded-md" />
					<div className="h-5 w-full bg-gray-200 rounded-md" />
					<div className="h-5 w-4/5 bg-gray-200 rounded-md" />

					<div className="mt-8 p-6 bg-gray-50 rounded-xl border-l-4 border-gray-200 space-y-3">
						<div className="h-5 w-32 bg-gray-200 rounded-md" />
						<div className="h-4 w-1/2 bg-gray-100 rounded-md" />
					</div>
				</div>
			</div>
		</div>
	);
};
