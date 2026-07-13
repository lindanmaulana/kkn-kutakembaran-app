import { FloatingAction } from '@/components/elements/floating-action';
import { Footer } from '@/components/elements/footer';
import { Header } from '@/components/elements/header';
import { TooltipProvider } from '@/components/ui/tooltip';
import { urbanist } from '@/config/fonts';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
	title: {
		default: 'KKN Kolaboratif Kuta Kembaran 2026',
		template: '%s | KKN Kolaboratif Kuta Kembaran',
	},
	icons: {
		icon: '/icon.png',
		shortcut: '/icon.png',
		apple: '/icon.png',
	},
	description:
		'Portal resmi KKN Kolaboratif 2026 di Desa Kuta Kembaran, Kabupaten Kuningan. Wadah aspirasi, digitalisasi layanan desa, publikasi program kerja, dan sinergi nyata mahasiswa lintas perguruan tinggi bersama masyarakat.',
	keywords: [
		'KKN Kolaboratif 2026',
		'Desa Kuta Kembaran',
		'KKN Kuningan',
		'Digitalisasi Desa Kuta Kembaran',
		'Garawangi Kuningan',
		'Pengabdian Masyarakat Mahasiswa',
		'Portal Aspirasi Desa',
		'Kuningan Jawa Barat',
	],
	authors: [{ name: 'Tim KKN Kolaboratif Kuta Kembaran' }],
	creator: 'Tim Teknis KKN Kolaboratif',
	openGraph: {
		title: 'KKN Kolaboratif Kuta Kembaran 2026',
		description:
			'Aksi nyata kolaborasi mahasiswa lintas perguruan tinggi dalam mengoptimalkan potensi daerah dan digitalisasi layanan Desa Kuta Kembaran, Kuningan.',
		url: 'https://kkn-kutakembaran.vercel.app/',
		siteName: 'KKN Kolaboratif Kuta Kembaran',
		images: [
			{
				url: '/assets/images/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Banner KKN Kolaboratif Kuta Kembaran 2026',
			},
		],
		locale: 'id_ID',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'KKN Kolaboratif Kuta Kembaran 2026',
		description:
			'Portal resmi publikasi program kerja dan digitalisasi layanan Desa Kuta Kembaran, Kabupaten Kuningan.',
		images: ['/assets/images/og-image.png'],
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn('h-full scroll-smooth', 'antialiased', 'font-sans', figtree.variable, urbanist.variable)}
			data-scroll-behavior="smooth"
		>
			<body className="min-h-full flex flex-col">
				<Header />
				<FloatingAction />
				<TooltipProvider>{children}</TooltipProvider>
				<Footer />
			</body>
		</html>
	);
}
