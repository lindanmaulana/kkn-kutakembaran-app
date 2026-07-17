export enum NewsCategory {
	VILLAGE = 'Kabar Desa',
	NEWS = 'Berita',
	ANNOUNCEMENT = 'Pengumuman',
	ARTICLE = 'Artikel',
	DOCUMENTATION = 'Dokumentasi',
	PRESS_RELEASE = 'Siaran Pers',
}

export interface News {
	id: string;
	title: string;
	slug: string;
	excerpt: string;
	content?: string;
	date: string;
	imageUrl: string;
	category: NewsCategory;
	author: string;
	isFeatured: boolean;
}

export const NEWS_DATA: News[] = [
	{
		id: '1',
		title: 'Rapat Pleno Pembahasan Proker: Pemetaan Sektor Pendidikan dan Kesehatan',
		slug: 'rapat-pleno-pembahasan-proker-pendidikan-kesehatan',
		excerpt:
			'Forum formal yang dihadiri oleh seluruh divisi untuk memaparkan rencana bimbingan belajar gratis serta posyandu remaja yang akan diimplementasikan di desa mitra...',
		content: `
            <p>Bertempat di ruang koordinasi utama, seluruh jajaran mahasiswa KKN Kolaboratif 2026 Kelompok 5 menggelar Rapat Pleno perdana guna membahas pemetaan dan finalisasi program kerja (proker). Forum formal yang dihadiri oleh seluruh divisi ini menjadi wadah krusial untuk menyamakan persepsi, mengintegrasikan ide, dan menyusun strategi eksekusi program kerja yang berbasis pada kebutuhan riil masyarakat desa mitra.</p>
            
            <p>Fokus pembahasan dalam rapat pleno kali ini berpusat pada dua sektor krusial, yaitu pendidikan dan kesehatan masyarakat. Divisi Pendidikan memaparkan rencana strategis mengenai pengadaan bimbingan belajar gratis untuk anak-anak usia sekolah dasar hingga menengah. Program ini dirancang khusus guna membantu mengatasi ketertinggalan materi akademis serta menumbuhkan kembali motivasi belajar anak-anak melalui metode pembelajaran yang interaktif dan menyenangkan.</p>
            
            <p>Sementara itu, Divisi Kesehatan memfokuskan pemaparan pada inisiasi pembentukan Posyandu Remaja. Langkah ini diambil sebagai respon atas perlunya ruang edukasi kesehatan yang terarah bagi kelompok usia produktif di desa. Program ini nantinya tidak hanya berfokus pada pemeriksaan fisik berkala, melainkan juga menyasar pemberian edukasi komprehensif terkait pola hidup bersih dan sehat (PHBS), pemenuhan gizi seimbang, serta kesehatan mental.</p>
            
            <p>Melalui diskusi interaktif yang berlangsung dinamis, setiap divisi memberikan masukan konstrukstif guna memastikan seluruh program kerja yang direncanakan dapat berjalan linier dan saling mendukung. Rapat pleno ditutup dengan penyusunan *timeline* kerja yang sistematis, menandai kesiapan penuh dari seluruh anggota Kelompok 5 untuk segera mengimplementasikan program-program kerja unggulan tersebut demi kemajuan desa mitra.</p>
        `,
		date: '13 Juli 2026',
		imageUrl: '/assets/images/news/kkn-rapat-proker.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: true,
	},

	{
		id: '2',
		title: 'Acara Pelepasan Mahasiswa KKN Kolaboratif Bersama Bupati Kuningan dan Rektor 6 Perguruan Tinggi',
		slug: 'acara-pelepasan-mahasiswa-kkn-kolaboratif-bupati-kuningan-rektor',
		excerpt:
			'Momentum pelepasan resmi kurang lebih 100 delegasi mahasiswa KKN Kolaboratif oleh Bupati Kuningan bersama Rektor dari 6 perguruan tinggi di Kabupaten Kuningan. Dalam program ini, mahasiswa disebar di 5 desa di Kecamatan Cigugur...',
		content: `
            <p>Momentum bersejarah menandai dimulainya pergerakan pengabdian mahasiswa melalui Acara Pelepasan Resmi Delegasi KKN Kolaboratif Tahun 2026. Acara seremonial berskala besar ini dihadiri langsung oleh Bupati Kuningan beserta jajaran Rektor dari enam perguruan tinggi terkemuka di Kabupaten Kuningan yang bersinergi dalam program pengabdian bersama ini.</p>
            
            <p>Dalam sambutannya, Bupati Kuningan menekankan pentingnya peran aktif mahasiswa sebagai agen perubahan (*agent of change*) yang mampu membawa angin segar inovasi bagi akselerasi pembangunan di tingkat desa. Kolaborasi antar-perguruan tinggi ini diharapkan dapat menciptakan integrasi keilmuan yang lebih kaya, sehingga solusi yang ditawarkan untuk mengurai permasalahan di masyarakat menjadi lebih komprehensif dan tepat sasaran.</p>
            
            <p>Pada periode kali ini, kurang lebih 100 mahasiswa peserta KKN Kolaboratif disebar secara merata ke dalam lima desa strategis di wilayah Kecamatan Cigugur, meliputi Desa Pakembangan, Cirukem, Gewok, Kadatuan, dan Kuta Kembaran. Distribusi ini dirancang untuk memastikan setiap wilayah mendapatkan sentuhan program kerja yang proporsional sesuai dengan karakteristik dan potensi keunggulan desanya masing-masing.</p>
            
            <p>Prosesi pelepasan disimbolkan dengan penyematan atribut KKN secara simbolis oleh Bupati dan para Rektor kepada perwakilan mahasiswa. Suasana penuh khidmat dan gemuruh semangat dari para peserta menutup acara pelepasan ini, merefleksikan kesiapan mental dan intelektual mahasiswa untuk melangkah ke lapangan dan memulai masa pengabdian nyata selama beberapa pekan ke depan.</p>
        `,
		date: '15 Juli 2026',
		imageUrl: '/assets/images/news/kkn-pelepasan.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: true,
	},

	{
		id: '3',
		title: 'Bangun Kedekatan Sejak Dini, Mahasiswa KKN Kolaboratif Lakukan Kegiatan Saba Desa di Kuta Kembaran',
		slug: 'bangun-kedekatan-sejak-dini-mahasiswa-kkn-kolaboratif-saba-desa-kuta-kembaran',
		excerpt:
			'Guna menciptakan hubungan yang erat dengan warga setempat, mahasiswa KKN Kolaboratif di Desa Kuta Kembaran menggelar aksi Saba Desa. Kegiatan pengenalan lingkungan ini diwarnai dengan interaksi hangat...',
		content: `
            <p>Guna menciptakan fondasi hubungan yang kokoh dan harmonis dengan warga setempat, mahasiswa KKN Kolaboratif Kelompok 5 di Desa Kuta Kembaran menggelar aksi sosial bertajuk "Saba Desa". Kegiatan ini merupakan agenda observasi kewilayahan sekaligus pengenalan lingkungan yang dilakukan dengan cara berjalan kaki mengelilingi dusun-dusun untuk memetakan kondisi fisik dan sosial desa.</p>
            
            <p>Sepanjang perjalanan, atmosfer kehangatan begitu terasa ketika para mahasiswa menyapa langsung warga yang sedang beraktivitas di halaman rumah, area perkebunan, dan fasilitas umum. Pendekatan persuasif ini terbukti efektif mencairkan jarak antara mahasiswa sebagai pendatang baru dengan masyarakat lokal yang terkenal ramah dan terbuka menerima kehadiran civitas akademika.</p>
            
            <p>Tidak sekadar berjalan keliling, aksi Saba Desa ini juga diwarnai dengan interaksi edukatif bersama anak-anak desa serta ruang diskusi informal bersama para tokoh masyarakat di pos ronda maupun teras rumah warga. Mahasiswa memanfaatkan momen ini untuk menggali cerita, memetakan potensi kebudayaan lokal, serta mendengarkan keluh kesah tersembunyi mengenai tantangan yang dihadapi oleh lingkungan sekitar.</p>
            
            <p>Melalui kegiatan Saba Desa yang humanis ini, data-data sosiologis lapangan yang akurat berhasil dihimpun sebagai bahan pengayaan program kerja. Hubungan emosional yang mulai terbangun sejak dini ini diharapkan dapat mempermudah proses implementasi seluruh agenda pengabdian mahasiswa ke depan berkat adanya rasa saling percaya yang kuat.</p>
        `,
		date: '15 Juli 2026',
		imageUrl: '/assets/images/news/kkn-saba-desa.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '4',
		title: 'Langkah Awal KKN Kolaboratif: Bangun Kedekatan Lewat Interaksi Hangat Bersama Anak-Anak Desa Kuta Kembaran',
		slug: 'langkah-awal-kkn-kolaboratif-bangun-kedekatan-anak-desa-kuta-kembaran',
		excerpt:
			'Mengawali masa pengabdian dengan pendekatan yang humanis, mahasiswa KKN Kolaboratif berbaur dan berbagi keceriaan bersama anak-anak di Desa Kuta Kembaran. Langkah awal ini dilakukan untuk menciptakan hubungan emosional...',
		content: `
            <p>Mengawali masa pengabdian masyarakat dengan pendekatan kultural yang menyentuh hati, mahasiswa KKN Kolaboratif 2026 Kelompok 5 memilih berfokus pada pembangunan hubungan emosional bersama generasi muda. Mahasiswa secara aktif berbaur dan berbagi keceriaan bersama anak-anak di Desa Kuta Kembaran melalui serangkaian permainan edukatif tradisional dan modern di area terbuka hijau desa.</p>
            
            <p>Langkah awal ini sengaja diinisiasi untuk meruntuhkan kecanggungan serta menciptakan suasana lingkungan yang inklusif sejak hari pertama kedatangan. Anak-anak yang mulanya tampak malu-malu, dengan cepat larut dalam tawa dan kegembiraan berkat kepiawaian para mahasiswa dalam membawakan aktivitas kelompok yang interaktif, seperti bernyanyi bersama, kuis berhadiah, dan *storytelling*.</p>
            
            <p>Melalui metode pendekatan yang cair dan penuh kasih sayang ini, mahasiswa tidak hanya berhasil memenangkan hati anak-anak, melainkan juga mendapatkan respons yang sangat positif dari para orang tua. Warga mengapresiasi kehadiran mahasiswa yang dianggap mampu membawa dampak psikologis positif dan memberikan hiburan edukatif yang mendidik bagi putra-putri mereka.</p>
            
            <p>Kedekatan emosional yang berhasil dibangun lewat tawa anak-anak ini menjadi pintu masuk utama yang mempermudah mahasiswa untuk melebur dengan komunitas masyarakat yang lebih luas. Jalinan kekeluargaan yang erat ini akan menjadi modal sosial yang sangat berharga dalam menyukseskan program-program kerja jangka panjang yang melibatkan partisipasi aktif seluruh elemen warga desa.</p>
        `,
		date: '15 Juli 2026',
		imageUrl: '/assets/images/news/kkn-pendekatan-anak.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '5',
		title: 'Makmurkan Masjid, Mahasiswa KKN Kolaboratif Berbaur dan Berjamaah Bersama Warga Kuta Kembaran',
		slug: 'makmurkan-masjid-mahasiswa-kkn-kolaboratif-berjamaah-bersama-warga',
		excerpt:
			'Sebagai upaya memperkuat nilai religius dan kedekatan sosial, mahasiswa KKN Kolaboratif berbaur bersama jamaah dan tokoh masyarakat Desa Kuta Kembaran dalam kegiatan keagamaan rutin. Momen hangat ini diakhiri dengan diskusi santai mengenai program kerja di teras masjid...',
		content: `
            <p>Sebagai langkah awal untuk membaur dan menyatu dengan budaya masyarakat, mahasiswa KKN Kolaboratif 2026 Kelompok 5 mengawali pengabdian mereka dengan bergerak bersama warga memakmurkan masjid di Desa Kuta Kembaran, Kecamatan Garawangi. Kegiatan ibadah berjamaah ini menjadi momentum penting untuk meruntuhkan sekat jarak dan membangun kedekatan emosional sejak dini.</p>
            
            <p>Sejak waktu magrib tiba, para mahasiswa bersama warga setempat—mulai dari tokoh agama, orang tua, hingga anak-anak—telah berkumpul dan beribadah bersama secara berjamaah. Kehadiran mahasiswa di tengah-tengah shaf jamaah bukan sekadar sebagai tamu, melainkan sebagai bagian dari keluarga baru masyarakat Desa Kuta Kembaran yang siap berkontribusi secara kultural dan spiritual.</p>
            
            <p>Kebersamaan di rumah ibadah ini mencerminkan filosofi KKN Kolaboratif yang humanis, di mana pendekatan program kerja tidak hanya menyentuh aspek fisik desa, tetapi juga menyentuh aspek sosial-keagamaan. Warga menyambut hangat kehadiran para mahasiswa yang aktif berbaur dan menunjukkan antusiasme tinggi dalam setiap aktivitas kebersamaan.</p>
            
            <p>Setelah rangkaian ibadah selesai, suasana hangat tersebut berlanjut ke area teras masjid. Mahasiswa memanfaatkan momen ini untuk duduk melingkar bersama warga, membuka obrolan santai, sekaligus mendengarkan masukan langsung mengenai kebutuhan desa. Pertemuan informal yang ditutup dengan sesi foto bersama ini menjadi fondasi kuat bagi sinergi program kerja yang akan dijalankan ke depan.</p>
        `,
		date: '15 Juli 2026',
		imageUrl: '/assets/images/news/kkn-memakmurkan-masjid.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '6',
		title: 'Resmi Dimulai, Pemdes Kutakembaran Sambut Hangat Mahasiswa KKN Kolaboratif 2026 Kelompok 5',
		slug: 'penerimaan-mahasiswa-kkn-kolaboratif-2026-kelompok-5-desa-kutakembaran',
		excerpt:
			'Pemerintah Desa Kutakembaran menyambut hangat kedatangan mahasiswa KKN Kolaboratif 2026 Kelompok 5 sebagai awal kolaborasi pengabdian dan pembangunan desa.',
		content: `
            <p>Dalam rangka pelaksanaan program Kuliah Kerja Nyata (KKN) Kolaboratif Tahun 2026, Pemerintah Desa Kutakembaran resmi menerima kedatangan mahasiswa Kelompok 5 pada kegiatan penyambutan yang berlangsung khidmat di balai desa setempat. Acara penerimaan ini menandai dimulainya langkah awal mahasiswa untuk mengabdikan diri dan berkolaborasi bersama masyarakat setempat.</p>

            <p>Kegiatan ini dihadiri langsung oleh kepala desa beserta perangkatnya, tokoh masyarakat, Dosen Pembimbing Lapangan (DPL), serta jajaran mahasiswa peserta KKN dari berbagai perguruan tinggi yang tergabung dalam program kolaboratif ini. Suasana penuh kehangatan dan kebersamaan begitu terasa, mencerminkan komitmen kuat untuk bersinergi demi kemajuan desa.</p>

            <p>Melalui program KKN Kolaboratif ini, para mahasiswa diharapkan mampu mengintegrasikan ilmu akademis mereka ke dalam program kerja nyata. Fokus pengabdian kali ini akan diarahkan pada peningkatan mutu pendidikan, pemberdayaan ekonomi lokal, pelestarian lingkungan, serta optimalisasi potensi desa agar menjadi lebih mandiri.</p>

            <p>Pemerintah Desa Kutakembaran berharap kehadiran mahasiswa Kelompok 5 ini dapat membawa inovasi baru yang bermanfaat langsung bagi warga, sekaligus menjadi ruang belajar lapangan yang berharga bagi mahasiswa dalam mengasah kepekaan sosial dan kerja sama tim.</p>

            <p class="font-medium italic text-center text-slate-600 mt-6">"Mengabdi dengan Kolaborasi, Berkarya untuk Desa, Mewujudkan Masyarakat yang Mandiri dan Berdaya."</p>
        `,
		date: '16 Juli 2026',
		imageUrl: '/assets/images/news/kkn-penerimaan-mahasiswa-kkn.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie Acara',
		isFeatured: true,
	},

	{
		id: '7',
		title: 'Petakan Potensi Wilayah, Mahasiswa KKN Kolaboratif Lakukan Analisis Permasalahan di Musyawarah Dusun Pahing 1',
		slug: 'analisis-permasalahan-kewilayahan-mahasiswa-kkn-kolaboratif-musyawarah-dusun-pahing-1',
		excerpt:
			'Guna mengumpulkan data riil lapangan, mahasiswa KKN Kolaboratif Kelompok 5 menghadiri Musyawarah Dusun di Dusun Pahing 1 untuk menganalisis berbagai permasalahan sektoral serta menghimpun informasi kewilayahan...',
		content: `
            <p>Dalam upaya menyusun program kerja berbasis data yang akurat, jajaran mahasiswa KKN Kolaboratif 2026 Kelompok 5 hadir dan terlibat aktif dalam kegiatan Musyawarah Dusun yang digelar di Dusun Pahing 1, Desa Kuta Kembaran, Kecamatan Garawangi. Kehadiran mahasiswa dalam forum rembuk warga ini difokuskan sebagai ruang strategis untuk menganalisis berbagai permasalahan multidimensi serta menghimpun informasi mendasar mengenai kondisi riil di lingkungan dusun tersebut.</p>
            
            <p>Suasana musyawarah yang dikemas secara lesehan penuh kehangatan di Dusun Pahing 1 ini dihadiri oleh kepala dusun, tokoh agama, tokoh masyarakat, serta perwakilan warga setempat. Melalui jalannya diskusi antar-warga, tim mahasiswa KKN secara cermat mengidentifikasi dan memetakan akar permasalahan yang ada, mulai dari sektor sosial, lingkungan, hingga tantangan fasilitas publik yang selama ini dihadapi oleh masyarakat setempat.</p>
            
            <p>Tidak hanya mencatat masalah, forum interaktif ini juga dimanfaatkan oleh mahasiswa untuk melakukan kompilasi informasi penting mengenai potensi lokal tersembunyi yang dapat dikembangkan di Dusun Pahing 1. Data-data sektoral yang didapatkan langsung dari dinamika Musyawarah Dusun ini diproses secara analitis agar program kerja yang nantinya dirancang bersifat solutif dan tepat guna bagi warga.</p>
            
            <p>Langkah taktis mahasiswa dalam melakukan analisis masalah langsung di forum resmi ini mendapat respons positif dari perangkat desa karena dinilai lebih objektif. Hasil pemetaan masalah dan informasi yang dihimpun hingga larut malam ini akan menjadi cetak biru (*blueprint*) utama bagi Kelompok 5 dalam merumuskan rencana aksi pengabdian yang berbasis pada penyelesaian masalah nyata di Dusun Pahing 1.</p>
        `,
		date: '16 Juli 2026',
		imageUrl: '/assets/images/news/kkn-mengikuti-musdus.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '8',
		title: 'Pengumuman: Pelaksanaan Senam Sehat Rutin Dusun Manis',
		slug: 'pengumuman-pelaksanaan-senam-sehat-rutin-dusun-manis',
		excerpt:
			'Ayo jaga kesehatan bersama! Hadiri kegiatan senam sehat rutin warga Desa Kutakembaran yang dilaksanakan setiap hari Sabtu Pahing dan hari Minggu di Dusun Manis...',
		content: `
        <p>Dalam rangka meningkatkan derajat kesehatan masyarakat serta mempererat tali silaturahmi antarwarga, Pemerintah Desa Kutakembaran bersama Mahasiswa KKN Kolaboratif 2026 mengumumkan pelaksanaan kegiatan Senam Sehat Rutin yang akan diselenggarakan khusus bagi seluruh warga Dusun Manis.</p>
        
        <p>Kegiatan senam sehat ini dijadwalkan secara berkala dengan rincian waktu sebagai berikut:</p>
        <ul>
            <li><strong>Hari Sabtu Pahing</strong> – Dimulai pukul 06.30 WIB s.d. selesai (mengikuti kalender penanggalan Jawa).</li>
            <li><strong>Hari Minggu (Mingguan)</strong> – Dimulai pukul 06.30 WIB s.d. selesai (rutin setiap pekan).</li>
        </ul>
        
        <p>Senam sehat ini akan dipandu langsung oleh instruktur senam berpengalaman dan didampingi oleh rekan-rekan mahasiswa KKN. Melalui gerakan senam yang energik dan menyenangkan, kegiatan ini diharapkan dapat menjadi sarana rekreasi sekaligus upaya pencegahan penyakit tidak menular (PTM) melalui aktivitas fisik yang teratur.</p>
        
        <p>Sehubungan dengan hal tersebut, kami mengundang dan mengharapkan kehadiran seluruh lapisan masyarakat—mulai dari remaja, dewasa, hingga lansia di Dusun Manis—untuk turut serta memeriahkan kegiatan ini. Mari bersama-sama kita bangun lingkungan desa yang sehat, bugar, dan penuh semangat!</p>
    `,
		date: '17 Juli 2026',
		imageUrl: '/assets/images/news/kkn-senam-sehat.png',
		category: NewsCategory.ANNOUNCEMENT,
		author: 'Sie Acara',
		isFeatured: false,
	},

	{
		id: '9',
		title: 'Perencanaan Proker Unggulan: Inisiasi Program Edukasi PHBS Terintegrasi di Sekolah Dasar Mitra',
		slug: 'perencanaan-proker-unggulan-edukasi-phbs-terintegrasi-sekolah-dasar',
		excerpt:
			'Melalui kolaborasi lintas divisi, Kelompok 5 sedang merancang program Edukasi Perilaku Hidup Bersih dan Sehat (PHBS) yang terintegrasi untuk menanamkan kebiasaan sehat sejak dini pada anak sekolah dasar...',
		content: `
        <p>Bertempat di ruang koordinasi utama, Kelompok 5 Mahasiswa KKN Kolaboratif 2026 sedang dalam tahap intensif merancang salah satu program kerja (proker) unggulan, yaitu Program Edukasi Perilaku Hidup Bersih dan Sehat (PHBS) Terintegrasi. Program ini dirancang dengan pendekatan komprehensif yang menyasar tidak hanya siswa, tetapi juga guru dan orang tua, guna menciptakan ekosistem sekolah yang sehat dan mendukung.</p>
        
        <p>Berdasarkan data infografis internal Kelompok 5 (A-PHBS.jpg), tujuan utama dari program ini adalah untuk menanamkan kebiasaan hidup bersih dan sehat sedini mungkin. Melalui program ini, kami berupaya meningkatkan kesadaran menjaga kebersihan diri, membentuk karakter peduli lingkungan, dan secara aktif mencegah perilaku *bullying* sejak dini di lingkungan sekolah.</p>
        
        <p>Dalam tahap perancangan ini, tim sedang menyusun materi edukasi yang akan disampaikan dengan metode yang interaktif dan menyenangkan. Beberapa materi inti yang sedang disiapkan meliputi:</p>
        <ul>
            <li><strong>Cuci Tangan 6 Langkah:</strong> Praktik langsung mencuci tangan sesuai standar WHO.</li>
            <li><strong>Buang Sampah pada Tempatnya:</strong> Edukasi pemilahan sampah organik dan anorganik serta menjaga kebersihan lingkungan.</li>
            <li><strong>Pencegahan *Bullying*:</strong> Materi tentang cara mengenali *bullying*, menghargai teman, dan berani melapor jika terjadi tindakan *bullying*.</li>
            <li><strong>PHBS di Sekolah:</strong> Ajakan untuk menjaga kebersihan kelas dan diri, serta pola hidup sehat secara keseluruhan.</li>
        </ul>
        
        <p>Rancangan program ini mengedepankan bentuk kegiatan yang berpusat pada partisipasi aktif anak, seperti penyuluhan interaktif, demonstrasi langsung (seperti praktik cuci tangan 6 langkah), permainan edukatif, simulasi dan *role play* anti-*bullying*, serta kuis-kuis berhadiah.</p>
        
        <p>Keberhasilan program ini sangat bergantung pada kolaborasi yang kuat. Oleh karena itu, Kelompok 5 terus menjalin komunikasi intensif dengan pihak sekolah untuk memastikan waktu pelaksanaan program bersifat fleksibel dan dapat menyesuaikan jadwal sekolah, seperti saat jam edukasi, kegiatan UKS, atau program kesehatan sekolah lainnya.</p>
        
        <p>Dengan persiapan yang matang dan terstruktur, Kelompok 5 optimis bahwa Program Edukasi PHBS Terintegrasi ini nantinya akan memberikan manfaat yang signifikan bagi sekolah, seperti meningkatkan kesadaran hidup bersih dan sehat, mencegah penyakit menular, menciptakan lingkungan sekolah yang bersih, sehat, aman, dan nyaman, serta menumbuhkan sikap saling menghargai antar teman.</p>
    `,
		date: '19 Juli 2026',
		imageUrl: '/assets/images/news/kkn-proker-phbs.jpeg',
		category: NewsCategory.ANNOUNCEMENT,
		author: 'Sie Acara',
		isFeatured: true,
	},

	{
		id: '10',
		title: 'Rancangan Proker Inovatif: Peluncuran Buku Saku MPASI sebagai Panduan Praktis Gizi Balita',
		slug: 'rancangan-proker-inovatif-peluncuran-buku-saku-mpasi',
		excerpt:
			'Kelompok 5 sedang merancang proyek inovatif berupa penyusunan Buku Saku MPASI (Makanan Pendamping Air Susu Ibu). Program ini bertujuan memberikan panduan praktis dan edukasi gizi seimbang bagi ibu balita...',
		content: `
        <p>Bertempat di posko koordinasi, Kelompok 5 Mahasiswa KKN Kolaboratif 2026 saat ini tengah fokus merancang proyek inovatif yang menjadi salah satu program kerja (proker) unggulan, yaitu penyusunan dan peluncuran Buku Saku MPASI. Program ini lahir dari kesadaran akan pentingnya edukasi gizi seimbang sejak dini untuk mencegah stunting dan meningkatkan status gizi balita di desa mitra.</p>
        
        <p>Berdasarkan cetak biru perancangan (B-Buku saku mpasi.jpg), program ini memiliki sasaran strategis, meliputi Ibu dengan Balita, Ibu Hamil trimester akhir, dan Kader Posyandu. Dengan demikian, Buku Saku ini dirancang untuk menjadi media edukasi yang dapat dibaca berulang kali, membantu Ibu memberikan MPASI sesuai usia anak, dan mendukung upaya pencegahan stunting secara komprehensif.</p>
        
        <p>Dalam tahap perancangan materi, Kelompok 5 sedang mengurasi konten isi Buku Saku yang mencakup:</p>
        <ul>
            <li><strong>Pengertian MPASI:</strong> Kapan MPASI dimulai dan tujuannya.</li>
            <li><strong>Jadwal Pemberian:</strong> Panduan frekuensi dan tekstur sesuai kelompok usia (6-8 bulan, 9-11 bulan, 12-24 bulan).</li>
            <li><strong>Menu MPASI:</strong> Contoh menu sederhana bergizi dengan memanfaatkan bahan lokal berkualitas.</li>
            <li><strong>Tips Pemberian MPASI:</strong> Aspek krusial seperti kebersihan alat dan keamanan pangan.</li>
        </ul>
        
        <p>Rancangan bentuk kegiatan tidak hanya berpusat pada pembagian buku saku, tetapi juga akan mencakup sosialisasi terukur, pendampingan intensif bagi Ibu balita, dan diskusi tanya jawab interaktif untuk memastikan pemahaman yang utuh.</p>
        
        <p>Keberhasilan program ini sangat bergantung pada kolaborasi yang kuat. Oleh karena itu, Kelompok 5 terus menjalin komunikasi intensif dengan Puskesmas, Pemerintah Desa, Kader Kesehatan, dan PKK. Fleksibilitas waktu pelaksanaan program terus disesuaikan dengan jadwal Posyandu, Kelas Ibu Balita, atau penyuluhan kesehatan desa agar tepat sasaran.</p>
        
        <p>Melalui persiapan yang matang dan pendekatan yang terstruktur, Kelompok 5 optimis bahwa peluncuran Buku Saku MPASI ini nantinya akan menjadi langkah nyata dalam meningkatkan pengetahuan masyarakat, mendukung tumbuh kembang balita yang optimal, dan menjadi simbol komitmen bersama dalam mencegah stunting demi kemajuan desa mitra.</p>
    `,
		date: '21 Juli 2026',
		imageUrl: '/assets/images/news/kkn-proker-mpasi.jpeg',
		category: NewsCategory.ANNOUNCEMENT,
		author: 'Sie Acara',
		isFeatured: true,
	},

	{
		id: '11',
		title: 'Perancangan Strategis Proker Ekonomi: Mind Map Akselerasi dan Pendampingan UMKM Desa Kutakembaran',
		slug: 'perancangan-strategis-proker-ekonomi-pendampingan-umkm-desa-kutakembaran',
		excerpt:
			'Kelompok 5 sedang menyusun peta jalan (mind map) program Pendampingan UMKM Desa Kutakembaran. Proker ini dirancang terstruktur mulai dari pendataan, pembuatan produk khas, legalitas, hingga digitalisasi pasar...',
		content: `
        <p>Guna mendongkrak roda perekonomian dan kemandirian ekonomi masyarakat di desa mitra, Kelompok 5 Mahasiswa KKN Kolaboratif 2026 saat ini tengah merancang program kerja (proker) komprehensif bertajuk Pendampingan UMKM Desa Kutakembaran. Peta jalan (mind map) program ini disusun secara matang untuk memetakan tahapan eksekusi agar tepat sasaran dan berdampak jangka panjang.</p>
        
        <p>Berdasarkan rancangan teknis yang tertuang dalam infografis (C-Pendampingan Umkm.jpg), proyek ekonomi kreatif ini akan melalui beberapa fase penting yang saat ini sedang dipersiapkan segala instrumen pendukungnya:</p>
        <ul>
            <li><strong>Survei dan Pendataan:</strong> Melakukan pemetaan awal dan mendata seluruh pelaku UMKM yang aktif di wilayah desa.</li>
            <li><strong>Sosialisasi Program:</strong> Mengajak warga dan pelaku usaha untuk berpartisipasi aktif dalam program pendampingan.</li>
            <li><strong>Pelatihan Legalitas Usaha:</strong> Membantu pengurusan dokumen penting seperti NIB, PIRT, hingga sertifikasi Halal MUI guna menaikkan kelas produk.</li>
            <li><strong>Pelatihan Digitalisasi:</strong> Memberikan edukasi teknis mengenai teknik foto produk yang menarik dan cara optimalisasi *upload* ke media sosial.</li>
        </ul>
        
        <p>Selain fokus pada pemasaran dan legalitas, aspek manajemen internal dan pengembangan produk juga menjadi pilar utama. Tim sedang merancang modul untuk Pendampingan Manajemen Keuangan agar warga memiliki pencatatan keuangan yang baik. Lebih lanjut, program ini juga menginisiasi Pembuatan Produk Olahan untuk Ciri Khas Desa demi menciptakan nilai tambah komoditas lokal.</p>
        
        <p>Sebagai langkah keberlanjutan pasca-KKN, Kelompok 5 juga merancang integrasi ke ranah digital melalui Pemberitahuan Pembuatan Web Desa untuk pengembangan profil UMKM dan katalog produk secara terpadu. Seluruh rangkaian program ini nantinya akan ditutup dengan Evaluasi Perkembangan UMKM guna mengukur efektivitas pendampingan.</p>
        
        <p>Melalui perencanaan mind map yang terintegrasi dari hulu ke hilir ini, Kelompok 5 optimis bahwa proker Pendampingan UMKM ini akan menjadi motor penggerak transformasi usaha lokal yang lebih modern, legal, dan siap bersaing di pasar yang lebih luas.</p>
    `,
		date: '23 Juli 2026',
		imageUrl: '/assets/images/news/kkn-proker-umkm.jpeg',
		category: NewsCategory.ANNOUNCEMENT,
		author: 'Sie PDD',
		isFeatured: true,
	},
];
