import localFont from 'next/font/local';

export const urbanist = localFont({
	variable: '--font-urbanist',
	display: 'swap',
	src: [
		{
			path: '../assets/fonts/urbanist/Urbanist-Thin.woff2',
			weight: '100',
			style: 'normal',
		},
		{
			path: '../assets/fonts/urbanist/Urbanist-ExtraLight.woff2',
			weight: '200',
			style: 'normal',
		},
		{
			path: '../assets/fonts/urbanist/Urbanist-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../assets/fonts/urbanist/Urbanist-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/urbanist/Urbanist-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../assets/fonts/urbanist/Urbanist-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../assets/fonts/urbanist/Urbanist-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../assets/fonts/urbanist/Urbanist-ExtraBold.woff2',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../assets/fonts/urbanist/Urbanist-Black.woff2',
			weight: '900',
			style: 'normal',
		},

		// Italic
		{
			path: '../assets/fonts/urbanist/Urbanist-Italic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../assets/fonts/urbanist/Urbanist-MediumItalic.woff2',
			weight: '500',
			style: 'italic',
		},
		{
			path: '../assets/fonts/urbanist/Urbanist-SemiBoldItalic.woff2',
			weight: '600',
			style: 'italic',
		},
		{
			path: '../assets/fonts/urbanist/Urbanist-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: '../assets/fonts/urbanist/Urbanist-BlackItalic.woff2',
			weight: '900',
			style: 'italic',
		},
	],
});
