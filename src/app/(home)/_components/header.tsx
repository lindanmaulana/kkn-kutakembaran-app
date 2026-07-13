'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Navbar } from './navbar';
import { useScrolled } from '@/app/(home)/_hooks/useScrolled';

export const Header = () => {
	const scrolled = useScrolled();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header
			className={`fixed top-0 z-50 w-full py-4 transition-all duration-300 px-4 sm:px-6 ${
				scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100/50' : 'bg-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="relative w-10 h-10 md:w-12 md:h-12">
							<Image
								src={'/assets/images/logo/logo-kkn.png'}
								fill
								alt="KKN Kolaboratif"
								className="object-contain"
								unoptimized
							/>
						</div>
						<div
							className={`flex flex-col font-bold transition-colors duration-300 ${
								scrolled ? 'text-kutakembaran-blue' : 'text-white'
							}`}
						>
							<span className="text-sm md:text-base leading-none">KKN</span>
							<span className="text-xs md:text-sm tracking-wide mt-0.5">Kolaboratif</span>
						</div>
					</div>

					<div className="hidden lg:block">
						<Navbar scrolled={scrolled} />
					</div>

					<button
						onClick={() => setIsOpen(!isOpen)}
						className={`lg:hidden p-2 rounded-lg transition-colors ${
							scrolled ? 'text-gray-950 hover:bg-gray-100' : 'text-white hover:bg-white/10'
						}`}
						aria-label="Toggle Menu"
					>
						{isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
					</button>
				</div>
			</div>

			<div
				className={`
                    absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 p-6 lg:hidden transition-all duration-300 ease-in-out origin-top
                    ${isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible pointer-events-none'}
                `}
			>
				<Navbar isMobile setIsOpen={setIsOpen} scrolled={scrolled} />
			</div>
		</header>
	);
};
