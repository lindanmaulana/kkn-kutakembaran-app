'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Navbar } from './navbar';
import { useScrolled } from '@/app/(home)/_hooks/useScrolled';
import { cn } from '@/lib/utils';

export const Header = () => {
	const scrolled = useScrolled();
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const isHome = pathname === '/';

	return (
		<header
			className={cn(
				' top-0 z-50 w-full py-4 px-4 sm:px-6 transition-all duration-300',
				!isHome || scrolled
					? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100/50'
					: 'bg-transparent',
				isHome ? 'fixed' : 'sticky',
			)}
		>
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="relative w-10 h-10 md:w-12 md:h-12">
							<Image
								src={'/assets/images/logo/logo-kkn.png'}
								fill
								alt="Logo KKN Kolaboratif"
								className="object-contain"
								unoptimized
							/>
						</div>
						<div
							className={cn(
								'flex flex-col font-bold transition-colors duration-300',
								!isHome || scrolled ? 'text-kutakembaran-blue' : 'text-white',
							)}
						>
							<span className="text-sm md:text-base leading-none">KKN Kolaboratif</span>
							<span className="text-[10px] md:text-xs tracking-wide font-medium mt-0.5 opacity-90">
								Desa Kuta Kembaran
							</span>
						</div>
					</div>

					<div className="hidden lg:block">
						<Navbar scrolled={!isHome ? true : scrolled} />
					</div>

					<button
						onClick={() => setIsOpen(!isOpen)}
						className={cn(
							'lg:hidden p-2 rounded-lg transition-colors',
							!isHome || scrolled ? 'text-gray-950 hover:bg-gray-100' : 'text-white hover:bg-white/10',
						)}
						aria-label="Toggle Menu"
					>
						{isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
					</button>
				</div>
			</div>

			<div
				className={cn(
					'absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 p-6 lg:hidden transition-all duration-300 ease-in-out origin-top',
					isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible pointer-events-none',
				)}
			>
				<Navbar isMobile setIsOpen={setIsOpen} scrolled={true} />
			</div>
		</header>
	);
};
