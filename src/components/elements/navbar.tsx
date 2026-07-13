'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { navbarLinks } from '@/config/navigation';

interface NavbarProps {
	scrolled?: boolean;
	isMobile?: boolean;
	setIsOpen?: (open: boolean) => void;
}

export const Navbar = ({ scrolled = false, isMobile = false, setIsOpen }: NavbarProps) => {
	const pathname = usePathname();
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

	const handleLinkClick = () => {
		if (isMobile && setIsOpen) {
			setIsOpen(false);
		}
	};

	const toggleDropdown = (label: string) => {
		if (!isMobile) return;
		setOpenDropdown(openDropdown === label ? null : label);
	};

	return (
		<nav className="w-full">
			<ul
				className={cn(
					'flex items-center gap-1 lg:gap-2',
					isMobile ? 'flex-col items-stretch gap-3' : 'flex-row',
				)}
			>
				{navbarLinks?.map((link) => {
					const isDropdownOpen = openDropdown === link.label;

					return (
						<li key={link.label} className={cn(isMobile && 'w-full')}>
							{!link.children && (
								<Link
									href={link.href}
									onClick={handleLinkClick}
									className={cn(
										'px-4 py-2 rounded-lg text-sm font-medium transition-all block',
										isMobile
											? 'text-gray-700 hover:bg-gray-50'
											: scrolled
												? 'text-gray-600 hover:text-kutakembaran-blue'
												: 'text-white/80 hover:text-white',
										pathname === link.href &&
											(isMobile
												? 'bg-kutakembaran-blue/10 text-kutakembaran-blue font-bold'
												: scrolled
													? 'text-kutakembaran-blue font-bold bg-slate-50'
													: 'text-white font-bold bg-white/10'),
									)}
								>
									{link.label}
								</Link>
							)}

							{link.children && (
								<div className={cn('relative group', isMobile ? 'w-full' : 'block')}>
									<div
										onClick={() => toggleDropdown(link.label)}
										className={cn(
											'px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-between lg:justify-start gap-1 cursor-pointer transition-colors',
											isMobile
												? 'text-gray-700 hover:bg-gray-50'
												: scrolled
													? 'text-gray-600 group-hover:text-kutakembaran-blue'
													: 'text-white/80 group-hover:text-white',
										)}
									>
										<span>{link.label}</span>
										<ChevronDown
											className={cn(
												'size-4 opacity-70 transition-transform duration-200',
												isMobile
													? isDropdownOpen
														? 'rotate-180'
														: 'rotate-0'
													: 'group-hover:rotate-180',
											)}
										/>
									</div>

									<div
										className={cn(
											'bg-white w-full lg:w-56 rounded-lg flex flex-col gap-0.5 z-50 overflow-hidden py-1.5 transition-all duration-200 p-2',
											isMobile
												? cn(
														'pl-4 border-l-2 border-gray-100 space-y-1 origin-top',
														isDropdownOpen
															? 'block opacity-100 h-auto mt-1 visible'
															: 'hidden opacity-0 h-0 overflow-hidden invisible',
													)
												: 'absolute top-full left-0 shadow-lg border border-gray-100 opacity-0 invisible translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto',
										)}
									>
										{link.children.map((subLink) => (
											<Link
												key={subLink.label}
												href={subLink.href}
												onClick={handleLinkClick}
												className={cn(
													'py-2 px-4 text-gray-600 text-sm hover:bg-gray-50 hover:text-kutakembaran-blue transition-colors block font-normal rounded-md',
													pathname === subLink.href &&
														'bg-kutakembaran-blue/10 text-kutakembaran-blue font-semibold',
												)}
											>
												{subLink.label}
											</Link>
										))}
									</div>
								</div>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
