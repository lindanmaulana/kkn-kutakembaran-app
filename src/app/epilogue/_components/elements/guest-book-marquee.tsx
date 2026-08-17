'use client';

import { GuestBookMarqueeError } from '@/app/epilogue/_components/elements/guest-book-marquee-error';
import { GuestBookMarqueeSkeleton } from '@/app/epilogue/_components/elements/guest-book-marquee-skeleton';
import { Marquee } from '@/components/ui/marquee';
import { guestBooksQuery } from '@/lib/queries/guest-books.query';
import { useQuery } from '@tanstack/react-query';
import { GuestBooks } from '@/app/epilogue/_types/guest-books.type';
import { GuestBookEmpty } from '@/app/epilogue/_components/elements/guest-book-empty';

export const GuestBookMarquee = () => {
	const { data, isLoading, isError } = useQuery(guestBooksQuery.getAll);

	if (isLoading) return <GuestBookMarqueeSkeleton />;
	if (isError) return <GuestBookMarqueeError />;
	if (data.data.length === 0) return <GuestBookEmpty />;

	const formatRole = (role: string) => role.replace(/_/g, ' ');

	return (
		<>
			<div className="hidden lg:flex w-80 shrink-0 relative h-90 xl:h-100 flex-col items-center justify-center overflow-hidden">
				<Marquee reverse pauseOnHover vertical className="[--duration:35s] gap-3.5 w-full">
					{data.data.map((guestBook: GuestBooks) => (
						<div
							key={guestBook.id}
							className="w-full rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10"
						>
							<p className="text-xs italic text-slate-200 leading-relaxed wrap-break-words">
								&ldquo;{guestBook.message}&rdquo;
							</p>
							<div className="mt-3 flex items-center justify-between gap-2 border-t border-white/10 pt-2 min-w-0">
								<span
									className="text-xs font-semibold text-white truncate max-w-42.5"
									title={guestBook.name}
								>
									{guestBook.name}
								</span>
								<span className="text-[10px] text-slate-300 font-medium capitalize shrink-0 bg-white/10 px-2 py-0.5 rounded-md border border-white/5">
									{formatRole(guestBook.role)}
								</span>
							</div>
						</div>
					))}
				</Marquee>

				<div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-linear-to-b from-black to-transparent z-10" />
				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-linear-to-t from-black to-transparent z-10" />
			</div>

			<div className="flex lg:hidden w-full relative h-44 items-center justify-center overflow-hidden mt-4">
				<Marquee pauseOnHover className="[--duration:35s] gap-3">
					{data.data.map((guestBook: GuestBooks) => (
						<div
							key={guestBook.id}
							className="w-72 shrink-0 rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm"
						>
							<p className="line-clamp-3 text-xs italic text-slate-200 leading-relaxed wrap-break-words">
								&ldquo;{guestBook.message}&rdquo;
							</p>
							<div className="mt-2.5 flex items-center justify-between gap-2 border-t border-white/10 pt-2 min-w-0">
								<span
									className="text-xs font-semibold text-white truncate max-w-35"
									title={guestBook.name}
								>
									{guestBook.name}
								</span>
								<span className="text-[10px] text-slate-300 font-medium capitalize shrink-0 bg-white/10 px-2 py-0.5 rounded-md border border-white/5">
									{formatRole(guestBook.role)}
								</span>
							</div>
						</div>
					))}
				</Marquee>

				<div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-black to-transparent z-10" />
				<div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-black to-transparent z-10" />
			</div>
		</>
	);
};
