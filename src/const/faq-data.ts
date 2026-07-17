interface FaqItem {
	id: string;
	question: string;
	answer: string;
}

export const FAQ_DATA: FaqItem[] = [
	{
		id: 'faq-1',
		question: 'Bagaimana mekanisme pelaksanaan program kerja KKN Kolaboratif di desa?',
		answer: 'Program kerja dilaksanakan berdasarkan pemetaan potensi dan masalah desa melalui observasi awal. Mahasiswa lintas kampus berkolaborasi membagi peran sesuai disiplin ilmu untuk mengeksekusi program di bidang pendidikan, kesehatan, ekonomi kreatif, dan digitalisasi desa.',
	},
	{
		id: 'faq-2',
		question:
			'Bagaimana mekanisme kehadiran mahasiswa di desa, apakah setiap hari menetap atau berkunjung secara berkala?',
		answer: 'Mahasiswa KKN Kolaboratif diwajibkan untuk menetap (live-in) di posko desa masing-masing selama periode KKN berlangsung. Hal ini bertujuan agar mahasiswa dapat membaur secara intensif dan mendampingi kegiatan masyarakat setiap harinya secara maksimal.',
	},
	{
		id: 'faq-3',
		question: 'Bagaimana pelaksanaan program kerja KKN ketika memasuki bulan Ramadan atau hari libur nasional?',
		answer: 'Program kerja akan diadaptasikan dengan aktivitas keagamaan masyarakat. Kegiatan fisik yang berat akan dikurangi dan dialihkan ke program yang bersifat edukasi interaktif pasca-tarawih, pesantren kilat untuk anak-anak, atau digitalisasi administrasi desa di posko.',
	},
	{
		id: 'faq-4',
		question: 'Mengapa tidak menerapkan sistem pendanaan penuh dari kampus untuk seluruh program kerja di desa?',
		answer: 'Konsep utama KKN adalah pemberdayaan, bukan pemberian hibah (charity). Dana stimulan dari kampus digunakan sebagai pemantik, sementara program kerja dirancang mandiri dengan memanfaatkan potensi lokal dan swadaya agar masyarakat tetap berdaya secara berkelanjutan setelah KKN selesai.',
	},
	{
		id: 'faq-5',
		question: 'Apakah Pemda Kabupaten Kuningan sudah memberikan Juklak dan Juknis resmi bagi para mahasiswa?',
		answer: 'Ya, Pemerintah Daerah Kabupaten Kuningan bersama Panitia Bersama LPTK telah menerbitkan Petunjuk Pelaksanaan (Juklak) dan Petunjuk Teknis (Juknis) yang mencakup fokus tema pembangunan daerah, sistem penilaian, serta koordinasi wilayah kerja.',
	},
	{
		id: 'faq-6',
		question: 'Siapa saja yang menjadi sasaran utama dari program kerja KKN Kolaboratif ini?',
		answer: 'Sasaran utama program kerja kami meliputi peserta didik (anak sekolah & santri), anak-anak di bawah 5 tahun (fokus pencegahan stunting), ibu hamil & menyusui, serta kelompok pelaku usaha mikro (UMKM) di desa bimbingan.',
	},
	{
		id: 'faq-7',
		question:
			'Bagaimana jika ditemukan masalah darurat di lapangan yang tidak tercantum dalam rencana program awal?',
		answer: 'Mahasiswa dapat melakukan mediasi bersama Dosen Pembimbing Lapangan (DPL) dan Kepala Desa untuk melakukan revisi rencana program kerja (RPK) agar intervensi yang diberikan tepat sasaran sesuai kebutuhan darurat masyarakat.',
	},
	{
		id: 'faq-8',
		question: 'Bagaimana cara masyarakat desa menyampaikan aspirasi atau keluhan terkait program kerja mahasiswa?',
		answer: 'Masyarakat dapat menyampaikan aspirasi secara langsung melalui koordinasi dengan perangkat RT/RW setempat, mendatangi posko utama KKN di desa, atau mengisi formulir umpan balik digital yang disediakan oleh tim humas kelompok.',
	},
	{
		id: 'faq-9',
		question: 'Apa output akhir yang wajib dikumpulkan oleh kelompok KKN setelah masa pengabdian selesai?',
		answer: 'Setiap kelompok wajib menyusun Laporan Akhir Pengabdian, video dokumenter profil desa dan luaran program kerja, jurnal ilmiah ber-ISSN/HAKI, serta penyerahan sistem/aplikasi digitalisasi kepada pihak pemerintah desa.',
	},
	{
		id: 'faq-10',
		question: 'Bagaimana keberlanjutan program kerja setelah mahasiswa ditarik kembali ke kampus masing-masing?',
		answer: 'Di akhir masa KKN, dilakukan serah terima aset dan program kepada kader desa, karang taruna, atau perangkat desa terkait. Seluruh sistem digitalisasi dan panduan operasional diserahkan agar dapat dikelola mandiri oleh masyarakat secara jangka panjang.',
	},
];

export const FAQ_MECHANISM_EXECUTION: FaqItem[] = [
    {
        id: 'faq-me-1',
        question: 'Apa tema besar dan dasar perancangan program KKN Kolaboratif 2026 ini?',
        answer: 'Tema utama KKN ini adalah "Meningkatkan literasi masyarakat pedesaan menuju desa yang sehat, unggul, sejahtera, mandiri dan berwawasan global melalui pemberdayaan masyarakat". Seluruh proker dirancang multipihak berbasis kolaborasi 6 perguruan tinggi di Kabupaten Kuningan.',
    },
    {
        id: 'faq-me-2',
        question: 'Bagaimana bentuk implementasi konkret di bidang Program Pendidikan dan Mengajar?',
        answer: 'Kami menginisiasi tiga pilar utama: Mengajar di PAUD untuk stimulasi tumbuh kembang usia dini, Mengajar di SD untuk pengembangan kemampuan dasar siswa, serta program Bimbingan Belajar terjadwal untuk penguatan akademik dan penguatan karakter disiplin mandiri anak.',
    },
    {
        id: 'faq-me-3',
        question: 'Bagaimana program keagamaan kelompok KKN berkontribusi pada karakter masyarakat desa?',
        answer: 'Kami menyelenggarakan program "Maghrib Mengaji" untuk memperkuat nilai keagamaan dan kemampuan membaca Al-Qur\'an anak-anak, serta bersinergi dengan Remaja Masjid/Tokoh Agama dalam Kegiatan Malam Jumat sebagai wadah pembinaan keagamaan warga.',
    },
];

export const FAQ_NUTRITION_FOOD_SECURITY: FaqItem[] = [
    {
        id: 'faq-nfs-1',
        question: 'Bagaimana mekanisme program Edukasi PHBS di Sekolah Dasar dijalankan?',
        answer: 'Program ini difokuskan kepada siswa SD, guru, dan orang tua. Kegiatannya meliputi penyuluhan interaktif, demonstrasi cuci tangan 6 langkah standar WHO, edukasi pilah sampah, serta simulasi role-play pencegahan tindakan bullying sejak dini.',
    },
    {
        id: 'faq-nfs-2',
        question: 'Apa output dan kegunaan dari pembuatan Buku Saku MPASI?',
        answer: 'Buku saku ini menjadi media literasi berkelanjutan bagi ibu balita, ibu hamil trimester akhir, dan kader Posyandu. Isinya memuat jadwal pemberian, menu sehat berbasis bahan lokal bergizi, serta tips higienitas untuk mendukung pencegahan stunting.',
    },
    {
        id: 'faq-nfs-3',
        question: 'Mengapa diadakan Edukasi Pranikah dan Konseling berkolaborasi dengan KUA?',
        answer: 'Program ini menyasar remaja dan calon pengantin untuk meningkatkan kesiapan mental, emosional, ekonomi, dan pemahaman kesehatan reproduksi pra-nikah, yang secara tidak langsung mendukung pencegahan stunting dari hulu keluarga.',
    },
    {
        id: 'faq-nfs-4',
        question: 'Bagaimana teknis proker Pengolahan Sampah Organik (Eco Enzyme & Lubang Biopori)?',
        answer: 'Mahasiswa KKN bersama PKK dan Karang Taruna mengadakan pelatihan pembuatan Eco Enzyme dari limbah kulit buah/sayur, demonstrasi pembuatan lubang biopori untuk resapan air dan kesuburan tanah, serta edukasi manajemen kebersihan lingkungan.',
    },
    {
        id: 'faq-nfs-5',
        question: 'Kapan dan di mana kegiatan Senam Sehat rutin warga dilaksanakan?',
        answer: 'Senam sehat dan jalan santai mingguan diadakan secara fleksibel setiap hari Minggu pagi untuk meningkatkan kebugaran jasmani warga. Khusus hari Sabtu Pahing, kegiatan senam sehat dilaksanakan secara gabungan di Dusun Pahing 1 dan Pahing 2 dipandu oleh mahasiswa UMK.',
    },
];

export const FAQ_LAW_DIGITAL_LITERACY: FaqItem[] = [
    {
        id: 'faq-ldl-1',
        question: 'Apa tujuan dibentuknya program Desa Sadar Administrasi Hukum?',
        answer: 'Untuk meningkatkan kesadaran pentingnya kelengkapan dokumen penting seperti KTP, Kartu Keluarga, Akta Kelahiran/Kematian, Sertifikat Tanah, dan Surat Nikah. Kegiatannya meliputi sosialisasi, konsultasi, dan pendampingan berkas warga bersama Pemdes dan KUA.',
    },
    {
        id: 'faq-ldl-2',
        question: 'Bagaimana langkah KKN memitigasi bahaya Pinjaman Online (Pinjol) dan Judi Online (Judol)?',
        answer: 'Kami mengadakan penyuluhan interaktif berkolaborasi dengan Kepolisian, OJK, dan Satgas PASTI untuk mengedukasi masyarakat, pelajar, dan Karang Taruna cara membedakan pinjol legal/ilegal, risiko hukum judol, perlindungan data pribadi (PIN/OTP), serta kanal pelaporan korban.',
    },
];

export const FAQ_PARTNERSHIP_COLLABORATION: FaqItem[] = [
    {
        id: 'faq-pc-1',
        question: 'Bagaimana peta jalan (mind map) Pendampingan UMKM yang dirancang mahasiswa?',
        answer: 'Pendampingan UMKM disusun dari hulu ke hilir: survei pendataan, sosialisasi, pelatihan legalitas (NIB, PIRT, Sertifikasi Halal), manajemen keuangan, inovasi produk olahan khas desa, hingga pelatihan digitalisasi (foto produk & optimasi medsos/web desa).',
    },
    {
        id: 'faq-pc-2',
        question: 'Bagaimana tim KKN memastikan keberlanjutan dampak seluruh program kerja ini?',
        answer: 'Seluruh proker bertumpu pada transfer pengetahuan melalui media cetak/digital (Buku Saku MPASI, panduan administrasi, kerangka UMKM) serta kolaborasi melekat dengan kader desa, PKK, DKM, dan Karang Taruna agar dapat diteruskan secara swadaya.',
    },
];