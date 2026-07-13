'use client';

import { useEffect, useState } from 'react';

export const useScrolled = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const target = document.getElementById('hero-trigger');
		if (!target) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setScrolled(!entry.isIntersecting);
			},

			{
				threshold: 0,
			},
		);

		observer.observe(target);

		return () => observer.disconnect();
	}, []);

	return scrolled;
};
