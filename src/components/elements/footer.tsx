import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram, BsTiktok, BsTwitterX } from 'react-icons/bs';

export const Footer = () => {
	return (
		<footer className="w-full bg-white border-t border-gray-100 pt-16 pb-8 px-4 sm:px-6">
			<div className="max-w-7xl mx-auto space-y-12">
				<div className="flex items-center gap-3">
					<div className="relative size-28">
						<Image
							src="/assets/images/logo/logo-kkn.png"
							fill
							alt="Logo KKN Kolaboratif"
							className="object-contain"
							unoptimized
						/>
					</div>
					<div className="text-kutakembaran-blue flex flex-col font-bold">
						<span className="text-2xl leading-none">KKN Kolaboratif</span>
						<span className="text-sm tracking-wider font-semibold mt-1.5 uppercase opacity-90">
							Desa Kuta Kembaran
						</span>
					</div>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
					<div className="flex flex-col gap-4">
						<h3 className="text-sm font-bold text-gray-900 tracking-wider">Navigasi</h3>
						<ul className="flex flex-col gap-2.5 text-sm text-gray-600">
							<li>
								<Link href="/" className="hover:text-kutakembaran-blue transition-colors">
									Beranda
								</Link>
							</li>
							<li>
								<Link href="/news" className="hover:text-kutakembaran-blue transition-colors">
									Berita
								</Link>
							</li>
							<li>
								<Link href="/juknis" className="hover:text-kutakembaran-blue transition-colors">
									Juknis
								</Link>
							</li>
							<li>
								<Link href="/infographic" className="hover:text-kutakembaran-blue transition-colors">
									Infografis
								</Link>
							</li>
						</ul>
					</div>

					<div className="flex flex-col gap-4">
						<h3 className="text-sm font-bold text-gray-900 tracking-wider">Tentang KKN</h3>
						<ul className="flex flex-col gap-2.5 text-sm text-gray-600">
							<li>
								<Link href="/team" className="hover:text-kutakembaran-blue transition-colors">
									Profil Kelompok
								</Link>
							</li>
							<li>
								<Link href="/vision-mission" className="hover:text-kutakembaran-blue transition-colors">
									Visi Misi
								</Link>
							</li>
							<li>
								<Link href="/" className="hover:text-kutakembaran-blue transition-colors">
									Program Kerja
								</Link>
							</li>
						</ul>
					</div>

					<div className="flex flex-col gap-4">
						<h3 className="text-sm font-bold text-gray-900 tracking-wider">Kemitraan</h3>
						<ul className="flex flex-col gap-2.5 text-sm text-gray-600">
							<li>
								<Link href="/" className="hover:text-kutakembaran-blue transition-colors">
									Gabung Jadi Mitra
								</Link>
							</li>
							<li>
								<Link href="/" className="hover:text-kutakembaran-blue transition-colors">
									Info Perguruan Tinggi
								</Link>
							</li>
						</ul>
					</div>

					<div className="flex flex-col gap-4">
						<h3 className="text-sm font-bold text-gray-900 tracking-wider">Hubungi Kami</h3>
						<ul className="flex flex-col gap-2.5 text-sm text-gray-600">
							<li>
								<Link href="/" className="hover:text-kutakembaran-blue transition-colors">
									Bantuan
								</Link>
							</li>
							<li>
								<Link href="/faq" className="hover:text-kutakembaran-blue transition-colors">
									FAQ
								</Link>
							</li>
							<li>
								<Link href="/" className="hover:text-kutakembaran-blue transition-colors">
									Ajukan Pengaduan
								</Link>
							</li>
						</ul>
					</div>

					<div className="col-span-2 md:col-span-1 flex flex-col gap-5">
						<div className="flex flex-col gap-3">
							<h3 className="text-sm font-bold text-gray-900 tracking-wider">Media Sosial</h3>
							<div className="flex items-center gap-4 text-gray-700">
								<a
									href="https://www.instagram.com/kkn26.kutakembaran"
									className="hover:text-kutakembaran-blue transition-colors"
								>
									<BsInstagram className="size-5" />
								</a>
								<a
									href="https://www.tiktok.com/@kkn26.kutakembaran"
									className="hover:text-kutakembaran-blue transition-colors"
								>
									<BsTiktok className="size-5" />
								</a>
								<a href="#" className="hover:text-kutakembaran-blue transition-colors">
									<BsTwitterX className="size-5" />
								</a>
							</div>
						</div>

						<div className="flex flex-col gap-3 pt-2">
							<h3 className="text-sm font-bold text-gray-900 tracking-wider">Kontak Posko</h3>
							<ul className="flex flex-col gap-3 text-xs md:text-sm text-gray-600 min-w-0">
								<li className="flex items-start gap-2">
									<MapPin className="size-5 text-gray-400 shrink-0 mt-0.5" />
									<span className="leading-relaxed">
										Jl. Raya Kuta Kembaran No.1, Kec. Garawangi, Kabupaten Kuningan, Jawa Barat
										45571
									</span>
								</li>
								<li className="flex items-center gap-2">
									<Mail className="size-4 text-gray-400 shrink-0" />
									<span className="truncate">kknkutakembaran@gmail.com</span>
								</li>
								<li className="flex items-center gap-2">
									<Phone className="size-4 text-gray-400 shrink-0" />
									<span>0812-3456-7890</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-gray-500">
					<p>© 2026 KKN Kolaboratif Kuta Kembaran. All Rights Reserved.</p>

					<a
						href="https://wa.me/6283823026580"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center size-10 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all shadow-md"
						aria-label="Hubungi via WhatsApp"
					>
						<MessageCircle className="size-5 fill-white" />
					</a>
				</div>
			</div>
		</footer>
	);
};
