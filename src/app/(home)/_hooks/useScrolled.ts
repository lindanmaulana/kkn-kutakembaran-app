// 'use client';

// import { useEffect, useState } from 'react';

// export const useScrolled = () => {
// 	const [scrolled, setScrolled] = useState(false);

// 	useEffect(() => {
// 		const target = document.getElementById('hero-trigger');
// 		if (!target) return;

// 		const observer = new IntersectionObserver(
// 			([entry]) => {
// 				setScrolled(!entry.isIntersecting);
// 			},

// 			{
// 				threshold: 0,
// 			},
// 		);

// 		observer.observe(target);

// 		return () => observer.disconnect();
// 	}, []);

// 	return scrolled;
// };




// 'use client';

// import { useEffect, useState } from 'react';

// export const useScrolled = () => {
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const target = document.getElementById('hero-trigger');
//         if (!target) return;

//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setScrolled(!entry.isIntersecting);
//             },
//             { threshold: 0 }
//         );

//         observer.observe(target);

//         return () => {
//             observer.disconnect();
//         };
//     }, []);

//     return scrolled;
// };




'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const useScrolled = (threshold = 20) => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > threshold);
                    ticking = false;
                });
                ticking = true;
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname, threshold]);

    return scrolled;
};