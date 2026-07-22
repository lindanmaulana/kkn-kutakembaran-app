// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
// 	await prisma.user.upsert({
// 		where: { id: 'd098e582-7f7e-4b68-98e9-d4fb77873a21' },
// 		update: {},
// 		create: {
// 			name: 'Admin Desa Kita',
// 			role: 'admin',
// 			position: 'Ketua Koordinasi KKN',
// 		},
// 	});

// 	await prisma.category.createMany({
// 		data: [
// 			{ name: 'Kegiatan Desa', slug: 'kegiatan-desa' },
// 			{ name: 'Pengumuman', slug: 'pengumuman' },
// 		],
// 	});

// 	console.log('Seeding berhasil!');
// }

// main().catch((e) => {
// 	console.error(e);
// 	process.exit(1);
// });
