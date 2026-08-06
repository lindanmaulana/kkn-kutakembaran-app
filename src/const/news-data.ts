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
		title: 'Pengumuman: Pelaksanaan Senam Sehat Rutin',
		slug: 'pengumuman-pelaksanaan-senam-sehat-rutin',
		excerpt:
			'Ayo jaga kesehatan bersama! Hadiri kegiatan senam sehat rutin warga Desa Kutakembaran yang dilaksanakan gabungan di Dusun Pahing dan setiap Minggu di Dusun Manis...',
		content: `
        <p>Dalam rangka meningkatkan derajat kesehatan masyarakat serta mempererat tali silaturahmi antarwarga lintas dusun, Pemerintah Desa Kutakembaran bersama Mahasiswa KKN Kolaboratif 2026 mengumumkan penyesuaian jadwal dan lokasi pelaksanaan kegiatan Senam Sehat Rutin.</p>
        
        <p>Kegiatan senam sehat ini kini dijadwalkan secara berkala dengan rincian waktu dan lokasi sebagai berikut:</p>
        <ul>
            <li><strong>Hari Sabtu Pahing</strong> – Dimulai pukul 06.30 WIB s.d. selesai. Pelaksanaan dilaksanakan secara **gabungan untuk warga Dusun Pahing 1 dan Dusun Pahing 2**.</li>
            <li><strong>Hari Minggu (Mingguan)</strong> – Dimulai pukul 06.30 WIB s.d. selesai (rutin setiap pekan). Pelaksanaan bertempat khusus untuk warga **Dusun Manis**.</li>
        </ul>
        
        <p>Istimewanya, senam sehat ini akan dipandu langsung oleh instruktur senam berbakat yang merupakan **mahasiswa dari Universitas Muhammadiyah Kuningan (UMK)**, dan didampingi oleh rekan-rekan mahasiswa KKN lainnya. Melalui gerakan senam yang energik dan menyenangkan, kegiatan ini diharapkan dapat menjadi sarana rekreasi sekaligus upaya pencegahan penyakit tidak menular (PTM) melalui aktivitas fisik yang teratur.</p>
        
        <p>Sehubungan dengan hal tersebut, kami mengundang dan mengharapkan kehadiran seluruh lapisan masyarakat—mulai dari remaja, dewasa, hingga lansia dari Dusun Pahing 1, Dusun Pahing 2, dan Dusun Manis—untuk turut serta memeriahkan kegiatan ini sesuai jadwal masing-masing. Mari bersama-sama kita bangun lingkungan desa yang sehat, bugar, dan penuh semangat!</p>
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

	{
		id: '12',
		title: 'Sinergi Keagamaan: Mahasiswa KKN Kolaboratif Hadiri Kajian Rutin Kliwonan Warga',
		slug: 'sinergi-keagamaan-mahasiswa-kkn-kolaboratif-hadiri-kajian-rutin-kliwonan',
		excerpt:
			'Dalam rangka memperkuat pilar keagamaan dan membaur dengan masyarakat, Kelompok 5 KKN Kolaboratif 2026 mengikuti kegiatan Kajian Rutin Kliwonan yang diselenggarakan di Dusun Manis, Desa Kutakembaran...',
		content: `
            <p>Sebagai bagian dari komitmen untuk meningkatkan literasi keagamaan dan mempererat tali silaturahmi, jajaran mahasiswa KKN Kolaboratif 2026 Kelompok 5 menghadiri kegiatan Kajian Rutin Kliwonan bersama masyarakat di Dusun Manis, Desa Kutakembaran. Kegiatan yang berlangsung khidmat ini menjadi ruang interaksi spiritual yang mempertemukan mahasiswa lintas kampus dengan para tokoh agama serta warga setempat.</p>
            
            <p>Kajian rutin yang dilaksanakan berdasarkan penanggalan Jawa (malam Kliwon/hari Kliwon) ini berfokus pada pendalaman materi fikih keseharian, pembacaan zikir bersama, serta penguatan karakter dan akhlak mulia di lingkungan keluarga. Kehadiran mahasiswa di tengah-tengah majelis di Dusun Manis tidak hanya untuk menimba ilmu, melainkan juga sebagai bentuk nyata dari metode live-in untuk membaur dan menyelami aktivitas keagamaan kultural masyarakat desa.</p>
            
            <p>Melalui antusiasme yang tinggi, mahasiswi KKN tampak khusyuk mengikuti jalannya pemaparan materi dari pemuka agama setempat. Kegiatan ini juga dimanfaatkan oleh tim KKN untuk berdiskusi ringan pasca-kajian dengan tokoh agama dan perwakilan remaja masjid guna menyelaraskan koordinasi terkait program kerja bidang keagamaan kelompok di Desa Kutakembaran, seperti optimalisasi gerakan Maghrib Mengaji dan pembinaan keagamaan mingguan.</p>
            
            <p>Sinergi yang terbangun melalui Kajian Kliwonan ini diharapkan mampu memperkokoh fondasi kebersamaan antara mahasiswa dan warga selama satu bulan masa pengabdian. Pertemuan rutin di Dusun Manis ini ditutup dengan ramah tamah, menandai keterbukaan penuh dari masyarakat desa mitra terhadap inisiatif dan program pemberdayaan yang dibawa oleh Kelompok 5.</p>
        `,
		date: '16 Juli 2026',
		imageUrl: '/assets/images/news/kkn-kajian-rutin-kliwon.jpg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '13',
		title: 'Sinergi Masyarakat: Mahasiswa KKN Kolaboratif Ikuti Kegiatan Kerja Bakti di Dusun Pahing 1',
		slug: 'sinergi-masyarakat-mahasiswa-kkn-kolaboratif-ikuti-kegiatan-kerja-bakti-dusun-pahing-1',
		excerpt:
			'Mendukung pilar desa sehat dan mandiri, Kelompok 5 KKN Kolaboratif 2026 bersama warga Dusun Pahing 1, Desa Kutakembaran bergotong-royong membersihkan fasilitas umum dan jalan desa...',
		content: `
            <p>Dalam upaya mendukung terciptanya lingkungan yang bersih, sehat, dan nyaman, mahasiswa KKN Kolaboratif 2026 Kelompok 5 turut ambil bagian dan mengikuti kegiatan Kerja Bakti massal yang digerakkan oleh warga di wilayah Dusun Pahing 1, Desa Kutakembaran. Aksi gotong-royong ini menjadi salah satu implementasi nyata dari pilar lingkungan sehat yang diusung dalam tema besar pengabdian tahun ini.</p>
            
            <p>Aksi bersih-bersih ini berfokus pada pembersihan tanaman liar di bahu jalan, perapihan akses jalan utama desa, serta pengumpulan dan pengelolaan sampah organik maupun anorganik di sekitar pemukiman warga. Kehadiran mahasiswa lintas kampus yang membaur di tengah-tengah warga Dusun Pahing 1 tidak hanya membantu mempercepat jalannya kerja bakti, melainkan juga mempererat semangat swadaya dan kebersamaan bermasyarakat.</p>
            
            <p>Melalui antusiasme yang tinggi dari ibu-ibu dan tokoh masyarakat setempat, kegiatan ini berjalan dengan penuh keakraban. Momentum ini juga dimanfaatkan oleh tim KKN untuk berdialog santai dan memberikan edukasi ringan secara langsung mengenai pentingnya menjaga kebersihan lingkungan pasca-kerja bakti, guna meminimalisir risiko sarang penyakit dan menjaga kelestarian infrastruktur desa yang ada.</p>
            
            <p>Keikutsertaan mahasiswa dalam kerja bakti di Dusun Pahing 1 ini ditutup dengan sesi foto bersama dan ramah tamah antara mahasiswa dengan warga setempat. Sinergi yang kuat ini diharapkan dapat terus terjaga dan menjadi pemantik bagi warga desa untuk secara mandiri merawat kebersihan lingkungan demi kenyamanan bersama di Desa Kutakembaran.</p>
        `,
		date: '17 Juli 2026',
		imageUrl: '/assets/images/news/kkn-kerja-bakti-pahing1.jpg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '14',
		title: 'Sinergi Masyarakat: Mahasiswa KKN Kolaboratif Ikuti Kegiatan Kerja Bakti di Dusun Manis',
		slug: 'sinergi-masyarakat-mahasiswa-kkn-kolaboratif-ikuti-kegiatan-kerja-bakti-dusun-manis',
		excerpt:
			'Mendukung pilar desa sehat dan mandiri, Kelompok 5 KKN Kolaboratif 2026 bersama warga Dusun Manis, Desa Kutakembaran bergotong-royong membersihkan fasilitas umum dan jalan desa...',
		content: `
            <p>Dalam upaya mendukung terciptanya lingkungan yang bersih, sehat, dan nyaman, mahasiswa KKN Kolaboratif 2026 Kelompok 5 turut ambil bagian dan mengikuti kegiatan Kerja Bakti massal yang digerakkan oleh warga di wilayah Dusun Manis, Desa Kutakembaran. Aksi gotong-royong ini menjadi salah satu implementasi nyata dari pilar lingkungan sehat yang diusung dalam tema besar pengabdian tahun ini.</p>
            
            <p>Aksi bersih-bersih ini berfokus pada pembersihan tanaman liar di bahu jalan, perapihan akses jalan utama desa, serta pengumpulan dan pengelolaan sampah organik maupun anorganik di sekitar pemukiman warga. Kehadiran mahasiswa lintas kampus yang membaur di tengah-tengah warga Dusun Manis tidak hanya membantu mempercepat jalannya kerja bakti, melainkan juga mempererat semangat swadaya dan kebersamaan bermasyarakat.</p>
            
            <p>Melalui antusiasme yang tinggi dari ibu-ibu dan tokoh masyarakat setempat, kegiatan ini berjalan dengan penuh keakraban. Momentum ini juga dimanfaatkan oleh tim KKN untuk berdialog santai dan memberikan edukasi ringan secara langsung mengenai pentingnya menjaga kebersihan lingkungan pasca-kerja bakti, guna meminimalisir risiko sarang penyakit dan menjaga kelestarian infrastruktur desa yang ada.</p>
            
            <p>Keikutsertaan mahasiswa dalam kerja bakti di Dusun Manis ini ditutup dengan sesi foto bersama dan ramah tamah antara mahasiswa dengan warga setempat. Sinergi yang kuat ini diharapkan dapat terus terjaga dan menjadi pemantik bagi warga desa untuk secara mandiri merawat kebersihan lingkungan demi kenyamanan bersama di Desa Kutakembaran.</p>
        `,
		date: '17 Juli 2026',
		imageUrl: '/assets/images/news/kkn-kerja-bakti-manis.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '15',
		title: 'Membangun Kedekatan: Cerita Seru Mahasiswa KKN Kolaboratif Bermain Air Bersama Anak-Anak Dusun Pahing 1',
		slug: 'membangun-kedekatan-cerita-seru-mahasiswa-kkn-kolaboratif-bermain-air-bersama-anak-anak-dusun-pahing-1',
		excerpt:
			'Di sela-sela pelaksanaan program kerja formal, Kelompok 5 KKN Kolaboratif 2026 meluangkan waktu berinteraksi dan bermain air di sungai bersama anak-anak Dusun Pahing 1, Desa Kutakembaran...',
		content: `
            <p>Pendekatan emosional dan pembauran dengan seluruh lapisan masyarakat menjadi kunci keberhasilan pengabdian mahasiswa KKN Kolaboratif 2026 Kelompok 5. Di sela-sela padatnya agenda program kerja formal, para mahasiswa meluangkan waktu untuk berinteraksi langsung dan bermain bersama anak-anak kecil di wilayah Dusun Pahing 1, Desa Kutakembaran.</p>
            
            <p>Memanfaatkan potensi alam pedesaan yang asri, mahasiswa bersama anak-anak Dusun Pahing 1 menghabiskan waktu sore dengan bermain air dan berenang di sungai setempat. Momen penuh tawa ini memperlihatkan kedekatan yang tulus, di mana mahasiswa tidak hanya memosisikan diri sebagai pengajar atau transformator di desa, melainkan juga sebagai kakak sekaligus sahabat yang membaur tanpa jarak.</p>
            
            <p>Aktivitas santai ini menjadi ruang yang efektif bagi mahasiswa untuk membangun kepercayaan (trust) dengan anak-anak setempat. Melalui kedekatan emosional yang terbangun secara natural di luar lingkungan sekolah formal, diharapkan anak-anak menjadi lebih antusias dan nyaman saat mengikuti berbagai program pendidikan maupun bimbingan belajar gratis yang diadakan oleh tim KKN di posko.</p>
            
            <p>Keseruan bermain air di Dusun Pahing 1 ini ditutup dengan canda tawa di atas bebatuan sungai sebelum anak-anak kembali ke rumah masing-masing. Keceriaan yang terpancar dari wajah anak-anak Desa Kutakembaran ini menjadi suntikan energi tersendiri bagi seluruh jajaran mahasiswa Kelompok 5 untuk terus memberikan kontribusi terbaik hingga akhir masa pengabdian.</p>
        `,
		date: '17 Juli 2026',
		imageUrl: '/assets/images/news/kkn-bermain-air-pahing1.jpg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '16',
		title: 'Penguatan Karakter Religius: Mahasiswa KKN Kolaboratif Jalankan Program Maghrib Mengaji di 3 Masjid Dusun',
		slug: 'penguatan-karakter-religius-mahasiswa-kkn-kolaboratif-jalankan-program-maghrib-mengaji-di-3-masjid-dusun',
		excerpt:
			"Mendukung pilar keagamaan dan peningkatan literasi Al-Qur'an, seluruh mahasiswa Kelompok 5 KKN Kolaboratif 2026 dibagi menjadi 3 kelompok untuk mengabdi langsung di 3 masjid dusun Desa Kutakembaran...",
		content: `
            <p>Dalam rangka memperkuat nilai-nilai spiritual dan meningkatkan kemampuan membaca Al-Qur'an sejak dini, mahasiswa KKN Kolaboratif 2026 Kelompok 5 melaksanakan program "Maghrib Mengaji". Program keagamaan ini dirancang untuk mendukung pembentukan karakter anak yang religius dan berakhlak mulia di lingkungan desa bimbingan.</p>
            
            <p>Agar pelaksanaan pendampingan berjalan lebih intensif dan merata, seluruh mahasiswa KKN didelegasikan secara terstruktur ke dalam 3 kelompok kecil. Pembagian ini terbukti efektif untuk memaksimalkan interaksi mengajar, di mana masing-masing kelompok disebar secara serentak untuk bertugas di 3 masjid dusun yang ada di Desa Kutakembaran.</p>
            
            <p>Suasana di dalam setiap tempat ibadah tampak khidmat namun tetap hangat saat mahasiswa lintas kampus membaur bersama anak-anak. Metode pendekatan yang sabar dan menyenangkan dari para mahasiswa membuat anak-anak di 3 masjid dusun tersebut sangat antusias mengikuti setiap sesi bimbingan mengaji, tajwid dasar, serta hafalan surah-surah pendek pasca-shalat Maghrib.</p>
            
            <p>Melalui program Maghrib Mengaji yang dijalankan secara serentak di 3 masjid dusun ini, tim KKN berharap dapat memberikan kontribusi nyata dalam membantu meringankan tugas guru ngaji setempat serta memberikan motivasi tambahan bagi anak-anak di Desa Kutakembaran agar semakin mencintai Al-Qur'an. Kegiatan ini ditutup dengan doa bersama, menandai rutinitas positif yang akan terus berjalan selama masa pengabdian.</p>
        `,
		date: '17 Juli 2026',
		imageUrl: '/assets/images/news/kkn-magrib-mengaji-1.jpg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '17',
		title: 'Sinergi Masyarakat: Mahasiswa KKN Kolaboratif Ikuti Kegiatan Kerja Bakti di Dusun Pahing 2',
		slug: 'sinergi-masyarakat-mahasiswa-kkn-kolaboratif-ikuti-kegiatan-kerja-bakti-dusun-pahing-2',
		excerpt:
			'Mendukung pilar desa sehat dan mandiri, Kelompok 5 KKN Kolaboratif 2026 bersama warga Dusun Pahing 2, Desa Kutakembaran bergotong-royong membersihkan fasilitas umum dan jalan desa...',
		content: `
        <p>Dalam upaya mendukung terciptanya lingkungan yang bersih, sehat, dan nyaman, mahasiswa KKN Kolaboratif 2026 Kelompok 5 turut ambil bagian dan mengikuti kegiatan Kerja Bakti massal yang digerakkan oleh warga di wilayah Dusun Pahing 2, Desa Kutakembaran. Aksi gotong-royong ini menjadi salah satu implementasi nyata dari pilar lingkungan sehat yang diusung dalam tema besar pengabdian tahun ini.</p>
        
        <p>Aksi bersih-bersih ini berfokus pada pembersihan tanaman liar di bahu jalan, perapihan akses jalan utama desa, serta pengumpulan dan pengelolaan sampah organik maupun anorganik di sekitar pemukiman warga. Kehadiran mahasiswa lintas kampus yang membaur di tengah-tengah warga Dusun Pahing 2 tidak hanya membantu mempercepat jalannya kerja bakti, melainkan juga mempererat semangat swadaya dan kebersamaan bermasyarakat.</p>
        
        <p>Melalui antusiasme yang tinggi dari ibu-ibu dan tokoh masyarakat setempat, kegiatan ini berjalan dengan penuh keakraban. Momentum ini juga dimanfaatkan oleh tim KKN untuk berdialog santai dan memberikan edukasi ringan secara langsung mengenai pentingnya menjaga kebersihan lingkungan pasca-kerja bakti, guna meminimalisir risiko sarang penyakit dan menjaga kelestarian infrastruktur desa yang ada.</p>
        
        <p>Keikutsertaan mahasiswa dalam kerja bakti di Dusun Pahing 2 ini ditutup dengan sesi foto bersama dan ramah tamah antara mahasiswa dengan warga setempat. Sinergi yang kuat ini diharapkan dapat terus terjaga dan menjadi pemantik bagi warga desa untuk secara mandiri merawat kebersihan lingkungan demi kenyamanan bersama di Desa Kutakembaran.</p>
    `,
		date: '18 Juli 2026',
		imageUrl: '/assets/images/news/kkn-kerja-bakti-pahing2.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '18',
		title: 'Implementasi PJKR, Mahasiswa KKN Kelompok 5 Ajak Warga Dusun Pahing Senam Sehat Bersama',
		slug: 'implementasi-pjkr-senam-sehat-dusun-pahing-kutakembaran',
		excerpt:
			'Sebagai wujud nyata program PJKR, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menggelar senam kebugaran jasmani bersama masyarakat Dusun Pahing, Desa Kutakembaran...',
		content: `
            <p>Dalam rangka mengimplementasikan program Pendidikan Jasmani, Kesehatan, dan Rekreasi (PJKR), mahasiswa KKN Kolaboratif 2026 Kelompok 5 menyelenggarakan kegiatan senam sehat bersama warga Dusun Pahing, Desa Kutakembaran. Kegiatan yang berlangsung di halaman gedung pertemuan ini menyasar seluruh elemen masyarakat, mulai dari anak-anak hingga orang dewasa.</p>
            
            <p>Fokus utama dari kegiatan ini adalah penerapan ilmu PJKR secara praktis di masyarakat melalui aktivitas fisik yang terukur, edukatif, dan rekreatif. Mahasiswa KKN bertindak langsung memandu gerakan senam yang dirancang untuk meningkatkan kebugaran jasmani sekaligus memberikan hiburan sehat yang menyegarkan bagi warga di akhir pekan.</p>
            
            <p>Antusiasme masyarakat Dusun Pahing terlihat sangat tinggi. Sejak pagi hari, warga sudah berkumpul dan dengan kompak mengikuti setiap instruksi gerakan dari mahasiswa. Kegiatan ini murni menjadi ruang interaksi positif dan rekreasi fisik untuk membangun kedekatan emosional serta kebersamaan yang solid antara mahasiswa KKN dan warga setempat.</p>
            
            <p>Agenda senam sehat ini diakhiri dengan sesi dokumentasi dan foto bersama. Keberhasilan kegiatan PJKR ini diharapkan mampu memotivasi warga Dusun Pahing untuk menjaga konsistensi dalam berolahraga secara mandiri demi memelihara kebugaran tubuh sehari-hari.</p>
        `,
		date: '19 Juli 2026',
		imageUrl: '/assets/images/news/kkn-senam-sehat2.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '19',
		title: 'Maksimalkan Waktu Magrib, Mahasiswa KKN Kelompok 5 Hidupkan Program Magrib Mengaji',
		slug: 'program-magrib-mengaji-mahasiswa-kkn-desa-kutakembaran',
		excerpt:
			'Guna memperkuat nilai-nilai keagamaan dan karakter religius sejak dini, mahasiswa KKN Kolaboratif 2026 Kelompok 5 aktif mendampingi anak-anak mengaji di mushola desa...',
		content: `
            <p>Tidak hanya berfokus pada pendidikan formal di sekolah, mahasiswa KKN Kolaboratif 2026 Kelompok 5 juga menaruh perhatian besar pada pendidikan spiritual anak-anak di desa mitra. Hal ini diwujudkan melalui partisipasi aktif dalam program "Magrib Mengaji" yang dilaksanakan secara rutin selepas ibadah salat Magrib berjamaah.</p>
            
            <p>Dalam kegiatan ini, mahasiswa KKN mendampingi anak-anak setempat untuk memperlancar bacaan Al-Qur'an dan Iqra. Selain membaca ayat suci, mahasiswa juga menyisipkan pembelajaran materi keagamaan dasar yang dikemas ringan, seperti setoran hafalan surah-surah pendek, doa harian, serta tata cara wudu dan salat yang benar.</p>
            
            <p>Suasana khidmat sekaligus hangat menyelimuti ruang utama ibadah. Anak-anak yang hadir tampak fokus menyimak koreksi makhorijul huruf dan tajwid yang diberikan oleh para mahasiswa. Pendekatan yang sabar dan telaten dari mahasiswa KKN membuat anak-anak merasa nyaman dan makin bersemangat untuk datang mengaji setiap harinya.</p>
            
            <p>Melalui program pendampingan keagamaan ini, KKN Kelompok 5 berharap dapat membantu mengoptimalkan waktu malam anak-anak dengan aktivitas yang positif dan berkah. Langkah ini juga diharapkan mampu memperkuat fondasi moral dan membentuk generasi muda Desa Kutakembaran yang berakhlak mulia.</p>
        `,
		date: '19 Juli 2026',
		imageUrl: '/assets/images/news/kkn-magrib-mengaji-day3.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '20',
		title: 'Sentuhan Edukasi KKN Kelompok 5: Hadirkan Suasana Belajar Interaktif di SD Negeri 2 Kutakembaran',
		slug: 'edukasi-interaktif-mahasiswa-kkn-sd-negeri-2-kutakembaran',
		excerpt:
			'Mendukung sektor pendidikan desa, mahasiswa KKN Kolaboratif 2026 Kelompok 5 terjun langsung mengajar dengan metode interaktif di SD Negeri 2 Kutakembaran...',
		content: `
            <p>Sebagai wujud nyata dari pemetaan program kerja di sektor pendidikan, mahasiswa KKN Kolaboratif 2026 Kelompok 5 melaksanakan kegiatan kunjungan sekaligus mengajar di SD Negeri 2 Kutakembaran. Kehadiran mahasiswa KKN ini disambut hangat oleh pihak sekolah dan para siswa yang sudah tidak sabar untuk belajar bersama.</p>
            
            <p>Dalam kegiatan ini, mahasiswa tidak hanya menyampaikan materi pelajaran formal, melainkan mengemasnya dengan metode pembelajaran yang interaktif, menyenangkan, dan berbasis komunikasi dua arah. Pendekatan ini sengaja dipilih guna memantik rasa ingin tahu, meningkatkan fokus, serta menumbuhkan kembali motivasi belajar anak-anak pasca-libur sekolah.</p>
            
            <p>Antusiasme para siswa terlihat sangat tinggi di dalam ruang kelas. Saat sesi tanya jawab dan kuis interaktif dibuka, suasana kelas mendadak riuh dengan jari-jemari yang berebut tunjuk jari ke udara, berebut untuk menjawab pertanyaan yang dilemparkan oleh mahasiswa KKN di depan kelas.</p>
            
            <p>Melalui program mengajar ini, mahasiswa KKN Kelompok 5 berharap dapat memberikan penyegaran metode belajar bagi anak-anak di Desa Kutakembaran. Kegiatan ini juga menjadi langkah awal dari program bimbingan belajar gratis berkelanjutan yang akan dijalankan selama masa mengabdi.</p>
        `,
		date: '20 Juli 2026',
		imageUrl: '/assets/images/news/kkn-mengajar-sdn2-kutakembaran.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '21',
		title: 'Tumbuhkan Motivasi dan Cita-Cita, Mahasiswa KKN Kelompok 5 Sambangi SD Negeri 1 Kutakembaran',
		slug: 'tumbuhkan-motivasi-belajar-mahasiswa-kkn-sd-negeri-1-kutakembaran',
		excerpt:
			'Melalui pendekatan personal yang menyenangkan, mahasiswa KKN Kolaboratif 2026 Kelompok 5 ajak siswa SD Negeri 1 Kutakembaran berani bermimpi dan giat belajar...',
		content: `
            <p>Rangkaian program kerja KKN Kelompok 5 di sektor pendidikan terus bergulir. Kali ini, giliran para siswa di SD Negeri 1 Kutakembaran yang mendapatkan kunjungan edukatif dari mahasiswa KKN Kolaboratif 2026 Kelompok 5. Berbeda dengan kunjungan sebelumnya, fokus utama kali ini adalah menyuntikkan motivasi belajar dan memetakan cita-cita anak sejak dini.</p>
            
            <p>Menggunakan metode *storytelling* dan *ice breaking* yang menyegarkan, mahasiswa KKN mengajak para siswa untuk aktif berdialog mengenai mimpi dan cita-cita mereka di masa depan. Pendekatan ini dinilai sangat efektif untuk membuka ruang komunikasi yang cair, sehingga anak-anak merasa nyaman dan berani mengekspresikan diri mereka tanpa ragu.</p>
            
            <p>Suasana ruang kelas dipenuhi tawa dan keceriaan di sepanjang sesi. Pihak tenaga pendidik SD Negeri 1 Kutakembaran pun menyambut positif inisiatif ini, mengingat kehadiran mahasiswa KKN mampu membawa atmosfer baru yang menyegarkan bagi proses belajar-mengajar di sekolah tersebut.</p>
            
            <p>Melalui kegiatan motivasi ini, diharapkan para siswa SD Negeri 1 Kutakembaran semakin terpacu untuk giat belajar demi meraih mimpi-mimpi mereka. Kegiatan ditutup dengan penyerahan kenang-kenangan edukatif serta sesi foto bersama guru dan para siswa.</p>
        `,
		date: '20 Juli 2026',
		imageUrl: '/assets/images/news/kkn-mengajar-sdn1-kutakembaran.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '22',
		title: 'Tingkatkan Pelayanan Kesehatan Masyakarat, Mahasiswa KKN Kelompok 5 Dampingi Posyandu di Dusun Manis',
		slug: 'pendampingan-posyandu-dusun-manis-desa-kutakembaran',
		excerpt:
			'Mahasiswa KKN Kolaboratif 2026 Kelompok 5 turut serta mendampingi pelaksanaan kegiatan Posyandu di Dusun Manis, Desa Kutakembaran, untuk mengoptimalkan pelayanan kesehatan warga...',
		content: `
            <p>Dalam upaya mendukung peningkatan derajat kesehatan masyarakat di tingkat tapak, mahasiswa KKN Kolaboratif 2026 Kelompok 5 turut serta mendampingi kegiatan Posyandu rutin di Dusun Manis, Desa Kutakembaran. Kegiatan ini menjadi ajang kolaborasi aktif antara mahasiswa KKN dengan para kader kesehatan setempat.</p>
            
            <p>Sejak pagi, pelataran Posyandu Dusun Manis dipadati oleh warga yang antusias untuk melakukan pemeriksaan kesehatan rutin. Mahasiswa KKN mengambil peran aktif membantu para kader dalam mengarahkan alur pelayanan, pencatatan administrasi, serta mendampingi warga—khususnya kalangan lansia dan ibu-ibu—selama proses antrean berlangsung.</p>
            
            <p>Selain membantu teknis pelaksanaan posyandu, momen ini dimanfaatkan oleh mahasiswa KKN untuk menjalin komunikasi hangat dan mendengarkan aspirasi warga terkait layanan kesehatan di desa. Kehadiran para mahasiswa disambut baik oleh para kader dan warga Dusun Manis karena dinilai sangat membantu memperlancar jalannya kegiatan.</p>
            
            <p>Melalui pendampingan ini, KKN Kelompok 5 berharap dapat memberikan kontribusi nyata dalam memperkuat sistem pelayanan kesehatan preventif di tingkat dusun, sekaligus mempererat hubungan kemitraan dengan masyarakat Desa Kutakembaran.</p>
        `,
		date: '21 Juli 2026',
		imageUrl: '/assets/images/news/kkn-posyandu-manis.jpg',
		category: NewsCategory.VILLAGE,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '23',
		title: 'Edukasi PHBS Sejak Dini, Mahasiswa KKN Kelompok 5 Praktikkan Cara Cuci Tangan di SD Negeri 1 Kutakembaran',
		slug: 'edukasi-phbs-cuci-tangan-sd-negeri-1-kutakembaran',
		excerpt:
			'Guna menanamkan kebiasaan hidup sehat, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menggelar sosialisasi PHBS dan praktik cuci tangan bagi siswa kelas 4, 5, dan 6 SD Negeri 1 Kutakembaran...',
		content: `
            <p>Dalam rangka mewujudkan generasi muda yang sehat dan paham akan pentingnya kebersihan diri, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menyelenggarakan sosialisasi Perilaku Hidup Bersih dan Sehat (PHBS) di SD Negeri 1 Kutakembaran. Kegiatan ini menargetkan siswa kelas tinggi, yaitu kelas 4, 5, dan 6, dengan fokus utama pada edukasi serta praktik langsung tata cara mencuci tangan yang baik dan benar.</p>
            
            <p>Dengan memanfaatkan media visual interaktif melalui layar peraga di ruang kelas, mahasiswa KKN memperagakan enam langkah mencuci tangan menurut standar kesehatan. Para siswa diajak untuk mengikuti setiap gerakan secara langsung—mulai dari menggosok telapak tangan, punggung tangan, sela-sela jari, hingga mengunci dan memutar ibu jari.</p>
            
            <p>Suasana kelas terasa sangat hidup dan penuh semangat. Menggunakan metode peragaan visual yang dikemas menarik, anak-anak kelas 4 hingga 6 tampak sangat antusias mempraktikkan ulang gerakan cuci tangan bersama-sama sambil duduk melingkar di dalam kelas.</p>
            
            <p>Melalui kegiatan PHBS ini, mahasiswa KKN Kelompok 5 berharap kebiasaan mencuci tangan menggunakan sabun dan air mengalir dapat diterapkan oleh para siswa tidak hanya di lingkungan sekolah, tetapi juga menjadi kebiasaan sehari-hari di rumah demi mencegah risiko penularan penyakit.</p>
        `,
		date: '25 Juli 2026',
		imageUrl: '/assets/images/news/kkn-proker-phbs-sd1.jpg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: true,
	},

	{
		id: '24',
		title: 'Dorong Potensi Ekonomi Lokal, Mahasiswa KKN Kelompok 5 Lakukan Pendataan UMKM Tape Singkong',
		slug: 'pendataan-umkm-tape-singkong-desa-kutakembaran',
		excerpt:
			'Guna memetakan potensi ekonomi desa, mahasiswa KKN Kolaboratif 2026 Kelompok 5 terjun langsung melakukan pendataan dan observasi produksi UMKM Tape Singkong...',
		content: `
            <p>Dalam rangka memetakan dan mengoptimalkan potensi ekonomi lokal, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menyambangi salah satu usaha mikro, kecil, dan menengah (UMKM) pengolahan tape singkong di Desa Kutakembaran. Kunjungan ini bertujuan untuk melakukan pendataan menyeluruh terkait proses produksi, kendala usaha, hingga rantai pemasaran produk lokal tersebut.</p>
            
            <p>Tidak hanya sekadar mengumpulkan data administrasi, para mahasiswa juga terjun langsung mendampingi dan membantu para pengrajin tape singkong dalam proses pengolahan bahan baku, mulai dari pengupasan hingga pembersihan singkong. Pendekatan partisipatif ini dilakukan agar mahasiswa dapat memahami secara detail alur produksi serta standar kualitas yang diterapkan oleh pembuat tape tradisional setempat.</p>
            
            <p>Melalui diskusi interaktif bersama para pelaku UMKM, mahasiswa KKN mengidentifikasi beberapa aspek potensial yang dapat dikembangkan, seperti digitalisasi pemasaran, inovasi pengemasan, hingga pemanfaatan platform digital untuk memperluas jangkauan pasar.</p>
            
            <p>Pendataan ini menjadi langkah awal krusial bagi KKN Kelompok 5 dalam menyusun program kerja pemberdayaan UMKM yang tepat sasaran. Diharapkan, hasil pemetaan ini dapat memberikan kontribusi nyata bagi peningkatan daya saing dan nilai ekonomis produk tape singkong khas Desa Kutakembaran.</p>
        `,
		date: '22 Juli 2026',
		imageUrl: '/assets/images/news/kkn-pendataan-umkm-tape-singkong.jpg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: true,
	},

	{
		id: '25',
		title: 'Perkuat Pembinaan Keagamaan, Mahasiswa KKN Kelompok 5 Ikut Mengajar di Madrasah Barkah Dusun Manis',
		slug: 'pendampingan-mengajar-madrasah-barkah-dusun-manis-kutakembaran',
		excerpt:
			'Guna mendukung pendidikan keagamaan anak-anak desa, mahasiswa KKN Kolaboratif 2026 Kelompok 5 terjun membantu proses pembelajaran di Madrasah Barkah, Dusun Manis...',
		content: `
            <p>Sektor pendidikan keagamaan menjadi salah satu fokus perhatian mahasiswa KKN Kolaboratif 2026 Kelompok 5 selama masa pengabdian di Desa Kutakembaran. Hal ini diwujudkan melalui partisipasi aktif dalam kegiatan mengajar di Madrasah Barkah, Dusun Manis.</p>
            
            <p>Kehadiran mahasiswa KKN disambut hangat oleh para pengajar dan para santri. Dalam proses pembelajaran, mahasiswa turut mendampingi para santri dalam mempelajari ilmu-ilmu keagamaan dasar, membaca Al-Qur'an dan kitab, serta memberikan pendampingan belajar yang interaktif dan mudah dipahami oleh anak-anak.</p>
            
            <p>Suasana kelas di Madrasah Barkah terasa khidmat namun tetap hangat. Para santri terlihat tekun menyimak materi dan aktif berinteraksi dengan mahasiswa KKN selama sesi pembelajaran berlangsung di bangku-bangku madrasah.</p>
            
            <p>Melalui pendampingan di Madrasah Barkah ini, mahasiswa KKN Kelompok 5 berharap dapat membantu meringankan tugas para pengajar lokal sekaligus memberikan motivasi tambahan bagi santri Dusun Manis untuk terus semangat menimba ilmu agama.</p>
        `,
		date: '22 Juli 2026',
		imageUrl: '/assets/images/news/kkn-mengajar-madrasah-barkah.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '26',
		title: 'Inovasi Pengolahan Limbah, Mahasiswa KKN Kelompok 5 Olah Sampah Plastik Jadi Paving Block',
		slug: 'inovasi-pengolahan-sampah-plastik-paving-block-desa-kutakembaran',
		excerpt:
			'Atasi permasalahan limbah lingkungan, mahasiswa KKN Kolaboratif 2026 Kelompok 5 buat sampel paving block berbahan dasar sampah plastik, pasir, dan oli bekas...',
		content: `
            <p>Sebagai wujud kepedulian terhadap kelestarian lingkungan dan penanganan limbah, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menginisiasi program kerja pengolahan sampah. Dalam program ini, mahasiswa membuat sampel produk inovatif berupa <i>paving block</i> ekonomis berbasis limbah plastik.</p>
            
            <p>Proses pembuatan diawali dengan pemilahan dan pencacahan limbah plastik anorganik yang dikumpulkan dari lingkungan sekitar. Sampah plastik yang telah dipilah kemudian dilelehkan dan dicampur dengan material perekat berupa pasir serta oli bekas. Adonan material ini dipanaskan hingga meleleh sempurna sebelum akhirnya dituangkan ke dalam cetakan khusus <i>paving block</i> hingga memadat.</p>
            
            <p>Inovasi ini diharapkan dapat menjadi salah satu opsi solusi terapan bagi warga Desa Kutakembaran dalam mengurangi penumpukan sampah plastik yang sulit terurai. Selain ramah lingkungan, pemanfaatan oli bekas dan limbah plastik ini juga memiliki nilai ekonomis karena dapat menghasilkan produk material bangunan yang kokoh.</p>
            
            <p>Melalui pembuatan sampel <i>paving block</i> ini, mahasiswa KKN Kelompok 5 berharap dapat mengedukasi serta memotivasi masyarakat lokal untuk mulai memilah sampah dari rumah dan mengolahnya menjadi produk bernilai guna tinggi.</p>
        `,
		date: '22 Juli 2026',
		imageUrl: '/assets/images/news/kkn-proker-sampah-paving-blok.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '27',
		title: 'Edukasi PHBS Menyeluruh, Mahasiswa KKN Kelompok 5 Ajak Seluruh Siswa SD Negeri 2 Kutakembaran Praktik Cuci Tangan',
		slug: 'edukasi-phbs-cuci-tangan-sd-negeri-2-kutakembaran',
		excerpt:
			'Melibatkan siswa kelas 1 hingga 6, mahasiswa KKN Kolaboratif 2026 Kelompok 5 sukses menggelar edukasi PHBS dan peragaan cuci tangan oleh perwakilan tiap kelas di SD Negeri 2 Kutakembaran...',
		content: `
            <p>Dalam rangka mewujudkan generasi muda yang sehat dan paham akan pentingnya kebersihan diri, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menyelenggarakan sosialisasi Perilaku Hidup Bersih dan Sehat (PHBS) di SD Negeri 2 Kutakembaran. Kegiatan ini diikuti oleh seluruh tingkatan kelas, mulai dari kelas 1 hingga kelas 6, dengan fokus utama pada edukasi serta praktik langsung tata cara mencuci tangan yang baik dan benar.</p>
            
            <p>Dengan memanfaatkan media visual interaktif di ruang kelas, mahasiswa KKN memperagakan enam langkah mencuci tangan sesuai standar kesehatan. Agar pemahaman materi lebih merata dan menyenangkan, dipilih beberapa siswa perwakilan dari setiap tingkatan kelas (kelas 1 hingga 6) untuk maju ke depan dan mempraktikkan langsung gerakan cuci tangan yang telah diajarkan.</p>
            
            <p>Suasana kegiatan berlangsung sangat meriah dan interaktif. Dukungan serta tepuk tangan dari teman-teman sekelas memberikan semangat bagi para perwakilan siswa yang maju memeragakan gerakan—mulai dari menggosok telapak tangan, sela-sela jari, hingga mengunci tangan dengan benar.</p>
            
            <p>Melalui kegiatan PHBS inklusif yang melibatkan seluruh jenjang kelas ini, mahasiswa KKN Kelompok 5 berharap kebiasaan mencuci tangan menggunakan sabun dan air mengalir dapat membudaya di lingkungan SD Negeri 2 Kutakembaran serta diterapkan secara konsisten di rumah masing-masing.</p>
        `,
		date: '23 Juli 2026',
		imageUrl: '/assets/images/news/kkn-proker-phbs-sd2.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '28',
		title: 'Ceria Bersama Usia Dini, Mahasiswa KKN Kelompok 5 Dampingi Kegiatan Belajar di PAUD Al Barkah',
		slug: 'pendampingan-mengajar-paud-al-barkah-desa-kutakembaran',
		excerpt:
			'Mendukung tumbuh kembang anak sejak dini, mahasiswa KKN Kolaboratif 2026 Kelompok 5 terjun mendampingi proses belajar dan kreativitas anak-anak di PAUD Al Barkah...',
		content: `
            <p>Dalam upaya mendukung pendidikan anak usia dini di desa mitra, mahasiswa KKN Kolaboratif 2026 Kelompok 5 melaksanakan kegiatan pendampingan belajar di PAUD / Kober Al Barkah, Desa Kutakembaran. Kegiatan ini dirancang untuk menciptakan suasana belajar yang menyenangkan dan ramah anak.</p>
            
            <p>Dengan pendekatan yang sabar dan telaten, mahasiswa KKN mendampingi anak-anak dalam melakukan berbagai aktivitas stimulasi motorik dan kreativitas, seperti menulis dasar, melatih koordinasi tangan, mewarnai, serta mengenalkan simbol dan huruf melalui metode bermain sambil belajar.</p>
            
            <p>Anak-anak PAUD Al Barkah tampak sangat antusias dan ceria duduk melingkar bersama mahasiswa KKN. Suasana kelas yang interaktif membuat anak-anak tidak canggung dan berani untuk bereksplorasi serta mengekspresikan imajinasi mereka selama kegiatan berlangsung.</p>
            
            <p>Melalui pendampingan ini, mahasiswa KKN Kelompok 5 berharap dapat membantu menumbuhkan rasa senang belajar sejak usia dini, sekaligus memberikan dorongan positif bagi tumbuh kembang mental dan sosial anak-anak di Desa Kutakembaran.</p>
        `,
		date: '23 Juli 2026',
		imageUrl: '/assets/images/news/kkn-mengajar-paud-albarkah.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '29',
		title: 'Jaga Kebersihan Lingkungan Balai Desa, Mahasiswa KKN Kelompok 5 Gelar Aksi Jumat Bersih',
		slug: 'aksi-jumat-bersih-balai-desa-kutakembaran',
		excerpt:
			'Guna menciptakan lingkungan pelayanan yang asri dan bersih, mahasiswa KKN Kolaboratif 2026 Kelompok 5 gotong royong melaksanakan aksi Jumat Bersih di area Balai Desa Kutakembaran...',
		content: `
            <p>Sebagai bentuk kepedulian terhadap kebersihan lingkungan fasilitas publik, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menggelar kegiatan gotong royong "Jumat Bersih" di area Balai Desa Kutakembaran. Kegiatan ini menyasar pembersihan area halaman, taman, serta sekitar lingkungan kantor balai desa.</p>
            
            <p>Dengan penuh semangat kebersamaan, para mahasiswa bahu-membahu membersihkan rumput liar, merapikan tanaman, dan mengumpulkan sampah di sekitar pelataran balai desa. Aksi gotong royong ini dilakukan untuk memastikan area sekitar balai desa tetap tertata rapi, bersih, dan nyaman bagi warga yang berkunjung.</p>
            
            <p>Suasana kerja bakti berlangsung hangat dan penuh keceriaan. Kegiatan kerja bakti di hari Jumat ini juga menjadi agenda rutin untuk menjaga pola hidup bersih serta menumbuhkan budaya gotong royong antara mahasiswa KKN dan aparatur desa.</p>
            
            <p>Melalui aksi Jumat Bersih ini, KKN Kelompok 5 berharap dapat memberikan contoh positif serta memotivasi masyarakat Desa Kutakembaran untuk terus menjaga kebersihan dan kelestarian lingkungan di sekitar tempat tinggal masing-masing.</p>
        `,
		date: '24 Juli 2026',
		imageUrl: '/assets/images/news/kkn-jumsih-balai-desa.jpeg',
		category: NewsCategory.VILLAGE,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '30',
		title: 'Kobarkan Semangat Kepramukaan, Mahasiswa KKN Kelompok 5 Mengajar Pramuka di SD Negeri 2 Kutakembaran',
		slug: 'mengajar-pramuka-sd-negeri-2-kutakembaran',
		excerpt:
			'Bangkitkan kedisiplinan dan jiwa kepemimpinan, mahasiswa KKN Kolaboratif 2026 Kelompok 5 isi kegiatan ekstrakurikuler Pramuka untuk siswa kelas 4, 5, dan 6 di SD Negeri 2 Kutakembaran...',
		content: `
            <p>Dalam upaya membina karakter, kedisiplinan, serta jiwa kepemimpinan generasi muda, mahasiswa KKN Kolaboratif 2026 Kelompok 5 turut aktif dalam kegiatan edukasi ekstrakurikuler kepramukaan di SD Negeri 2 Kutakembaran. Kegiatan ini ditujukan bagi siswa kelas tinggi, yaitu kelas 4, 5, dan 6.</p>
            
            <p>Dalam sesi materi di ruang kelas, mahasiswa KKN menyampaikan wawasan dasar mengenai sejarah Gerakan Pramuka di Indonesia maupun dunia, lambang tunas kelapa, hingga makna nilai-nilai Dasa Darma. Agar suasana belajar tidak membosankan, materi kepramukaan diselingi dengan sesi menyanyikan yel-yel Pramuka yang interaktif dan membakar semangat para siswa.</p>
            
            <p>Antusiasme para siswa Pramuka Penggalang ini terlihat jelas dari keceriaan dan keaktifan mereka dalam mengikuti instruksi serta menyanyikan yel-yel bersama di dalam kelas. Kehadiran mahasiswa KKN memberikan warna baru yang menyegarkan pada kegiatan ekstrakurikuler di sekolah tersebut.</p>
            
            <p>Melalui pendampingan kegiatan Pramuka ini, mahasiswa KKN Kelompok 5 berharap dapat membantu membentuk kepribadian adik-adik di SD Negeri 2 Kutakembaran agar semakin mandiri, berkarakter kuat, berjiwa gotong royong, dan memiliki rasa nasionalisme yang tinggi.</p>
        `,
		date: '24 Juli 2026',
		imageUrl: '/assets/images/news/kkn-mengajar-pramuka-sd2.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '31',
		title: 'Kobarkan Semangat Kepramukaan, Mahasiswa KKN Kelompok 5 Mengajar Pionering hingga Semapur di SD Negeri 1 Kutakembaran',
		slug: 'mengajar-pramuka-pionering-semapur-sd-negeri-1-kutakembaran',
		excerpt:
			'Bangkitkan kedisiplinan dan keterampilan, mahasiswa KKN Kolaboratif 2026 Kelompok 5 bekali siswa SD Negeri 1 Kutakembaran materi dasar kepramukaan, pionering, hingga semapur...',
		content: `
            <p>Dalam upaya membina karakter, kedisiplinan, serta keterampilan praktis generasi muda, mahasiswa KKN Kolaboratif 2026 Kelompok 5 aktif mendampingi kegiatan ekstrakurikuler kepramukaan di SD Negeri 1 Kutakembaran. Kegiatan ini diikuti oleh para siswa dengan penuh antusiasme di dalam ruang kelas.</p>
            
            <p>Sesi pembelajaran dikemas secara komprehensif, mencakup pemahaman materi dasar kepramukaan, teknik tali-menali atau <i>pionering</i>, hingga pengenalan isyarat <i>semapur</i> (semaphore). Mahasiswa KKN memberikan penjelasan teori yang diselingi dengan peragaan praktis agar para siswa dapat dengan mudah memahami teknik simpul serta gerakan bendera semapur.</p>
            
            <p>Antusiasme para siswa terlihat jelas dari keaktifan mereka saat menyimak materi dan menjawab pertanyaan interaktif dari mahasiswa KKN di depan kelas. Suasana belajar terasa seru dan hidup karena materi yang diberikan langsung memancing rasa ingin tahu para siswa Penggalang.</p>
            
            <p>Melalui pendampingan kegiatan Pramuka ini, mahasiswa KKN Kelompok 5 berharap dapat membantu mengasah keterampilan motorik dan pembentukan karakter adik-adik di SD Negeri 1 Kutakembaran agar semakin mandiri, terampil, berjiwa gotong royong, serta tangkas.</p>
        `,
		date: '25 Juli 2026',
		imageUrl: '/assets/images/news/kkn-mengajar-pramuka-sd1-kutakembaran.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '32',
		title: 'Kutakembaran Green Cycle: Mahasiswa KKN Kelompok 5 Gelar Workshop 3R dan Pelatihan Eco Enzyme',
		slug: 'workshop-3r-sampah-eco-enzyme-kutakembaran-green-cycle',
		excerpt:
			'Mengusung tema Kutakembaran Green Cycle, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menggelar Workshop 3R Sampah dan sosialisasi pembuatan Eco Enzyme bersama warga...',
		content: `
            <p>Dalam rangka mendorong pengelolaan sampah mandiri dan ramah lingkungan, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menggelar rangkaian program "Kutakembaran Green Cycle: Dari Sampah Menjadi Solusi". Kegiatan ini diisi dengan Workshop 3R (Reduce, Reuse, Recycle) serta edukasi pemilahan sampah organik, anorganik, dan B3 bagi warga setempat.</p>
            
            <p>Pada sesi kali ini, mahasiswa KKN memfokuskan pemaparan pada pelatihan pembuatan <i>Eco Enzyme</i> yang memanfatkan sampah organik rumah tangga. Di hadapan ibu-ibu warga yang berkumpul di pelataran warga, mahasiswa memeragakan secara langsung proses pengolahan limbah kulit buah dan sayuran yang dicampur dengan air serta gula merah ke dalam wadah galon untuk proses fermentasi.</p>
            
            <p>Masyarakat tampak antusias menyimak penjelasanmengenai sejuta manfaat <i>Eco Enzyme</i>, mulai dari pembersih alami, pupuk tanaman, hingga pengolah limbah cair rumah tangga. Selain <i>Eco Enzyme</i>, program Kutakembaran Green Cycle ini juga mencakup pelatihan pembuatan lubang biopori serta inovasi pembuatan <i>paving block</i> dari limbah plastik.</p>
            
            <p>Melalui workshop edukatif ini, KKN Kelompok 5 berharap masyarakat Desa Kutakembaran dapat mulai mengubah pandangan terhadap sampah, dari sekadar limbah menjadi sumber daya yang berguna dan bernilai ekonomis bagi kehidupan sehari-hari.</p>
        `,
		date: '25 Juli 2026',
		imageUrl: '/assets/images/news/kkn-workshop-3r-green-cycle.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie ACARA',
		isFeatured: true,
	},

	{
		id: '33',
		title: 'Jaga Kebugaran Tubuh, Mahasiswa KKN Kelompok 5 Gelar Senam Sehat Pagi di Halaman Kantor Kepala Desa',
		slug: 'senam-sehat-pagi-kantor-kepala-desa-kutakembaran',
		excerpt:
			'Guna menggalakkan kebiasaan berolahraga, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menggelar kegiatan senam sehat pagi bersama di halaman Kantor Kepala Desa Kutakembaran...',
		content: `
            <p>Dalam upaya mengajak masyarakat serta perangkat desa untuk terus menjaga kebugaran tubuh dan pola hidup aktif, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menggelar kegiatan Senam Sehat Pagi. Kegiatan ini dilaksanakan di halaman Kantor Kepala Desa Kutakembaran pada pagi hari yang cerah.</p>
            
            <p>Kegiatan diawali dengan pemanasan ringan yang dipandu oleh mahasiswa KKN selaku instruktur, lalu dilanjutkan dengan serangkaian gerakan senam aerobik dan kebugaran yang energik. Para peserta tampak antusias dan bersemangat mengikuti setiap ritme musik dan peragaan gerakan dari depan.</p>
            
            <p>Selain bermanfaat untuk menjaga kesehatan fisik, kegiatan senam pagi di area halaman kantor desa ini juga menjadi momen yang pas untuk mempererat keakraban serta komunikasi yang cair antara mahasiswa KKN, perangkat desa, dan warga sekitar sebelum memulai aktivitas harian.</p>
            
            <p>Melalui agenda senam sehat rutin ini, KKN Kelompok 5 berharap semangat berolahraga dapat terus terjaga di lingkungan Desa Kutakembaran demi mewujudkan masyarakat yang sehat, aktif, dan produktif.</p>
        `,
		date: '26 Juli 2026',
		imageUrl: '/assets/images/news/kkn-senam-kantor-desa.jpg',
		category: NewsCategory.VILLAGE,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '34',
		title: 'Pererat Silaturahmi, Mahasiswa KKN Kelompok 5 Gelar Tradisi Ngaliwet dan Makan Bersama di Lamping Buligir',
		slug: 'tradisi-ngaliwet-makan-bersama-lamping-buligir',
		excerpt:
			'Mempererat tali kekeluargaan, mahasiswa KKN Kolaboratif 2026 Kelompok 5 nikmati suasana kebersamaan melalui tradisi ngaliwet dan makan bersama warga di destinasi Lamping Buligir...',
		content: `
            <p>Di tengah padatnya agenda program kerja, mahasiswa KKN Kolaboratif 2026 Kelompok 5 meluangkan waktu untuk mempererat keakraban bersama warga melalui kegiatan khas Sunda, yaitu <i>ngaliwet</i> dan makan bersama. Kegiatan ini dilaksanakan dengan mengambil latar keindahan alam kawasan Lamping Buligir.</p>
            
            <p>Tradisi <i>ngaliwet</i> ini menjadi ajang yang sangat efektif untuk mencairkan suasana dan memperkuat ikatan emosional. Mulai dari persiapan memasak nasi liwet, menyiapkan lauk-pauk, hingga menyajikannya di atas daun pisang dilakukan secara gotong royong dengan penuh canda tawa.</p>
            
            <p>Pemandangan tebing batu eksotis Lamping Buligir menambah kehangatan momen kebersamaan tersebut. Warga dan mahasiswa KKN membaur tanpa sekat, menikmati hidangan bersama sambil mengobrol santai mengenai dinamika kehidupan bermasyarakat di desa.</p>
            
            <p>Melalui kegiatan keakraban ini, KKN Kelompok 5 berharap hubungan silaturahmi yang harmonis dan rasa kekeluargaan dengan masyarakat lokal dapat terus terjaga erat hingga akhir masa pengabdian dan seterusnya.</p>
        `,
		date: '26 Juli 2026',
		imageUrl: '/assets/images/news/kkn-ngaliwet-lamping-buligir.jpg',
		category: NewsCategory.VILLAGE,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '35',
		title: 'Solusi Limbah Rumah Tangga, Mahasiswa KKN Kelompok 5 Latih Warga Dusun Pahing 1 Olah Sampah Jadi Eco Enzyme, Paving Block, dan Biopori',
		slug: 'pelatihan-pengolahan-sampah-eco-enzyme-paving-block-biopori-dusun-pahing-1',
		excerpt:
			'Edukasi pengelolaan limbah berkelanjutan, mahasiswa KKN Kolaboratif 2026 Kelompok 5 gelar praktik langsung pembuatan Eco Enzyme, paving block, dan lubang biopori bersama warga Dusun Pahing 1...',
		content: `
            <p>Sebagai bagian dari rangkaian program pengolahan limbah berbasis lingkungan, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menggelar sesi praktik langsung pembuatan <i>Eco Enzyme</i>, <i>paving block</i> limbah plastik, serta lubang resapan biopori bersama warga Dusun Pahing 1, Desa Kutakembaran.</p>
            
            <p>Dalam kegiatan yang berlangsung hangat di teras rumah warga Dusun Pahing 1 ini, mahasiswa KKN bersama ibu-ibu setempat mempraktikkan langsung cara pembuatan <i>Eco Enzyme</i> menggunakan galon bekas. Bahan organik berupa sisa buah dan sayuran dimasukkan secara bergotong royong ke dalam wadah galon yang telah diisi larutan air gula untuk memicu proses fermentasi.</p>
            
            <p>Selain <i>Eco Enzyme</i> untuk limbah organik, mahasiswa KKN juga memaparkan teknik pencetakan <i>paving block</i> ramah lingkungan dari limbah plastik anorganik serta tata cara pembuatan lubang resapan biopori. Kombinasi ketiga metode ini dirancang sebagai solusi holistik untuk mengatasi permasalahan sampah langsung dari sumbernya, yaitu lingkungan rumah tangga.</p>
            
            <p>Antusiasme warga Dusun Pahing 1 terlihat sangat tinggi sepanjang kegiatan. Melalui sosialisasi dan praktik partisipatif ini, KKN Kelompok 5 berharap masyarakat dapat secara mandiri menerapkan ilmu pengolahan sampah ini guna menciptakan lingkungan desa yang lebih bersih, asri, dan produktif.</p>
        `,
		date: '28 Juli 2026',
		imageUrl: '/assets/images/news/kkn-pelatihan-eco-enzyme-biopori.jpg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '36',
		title: 'Lanjutkan Program Kutakembaran Green Cycle, Mahasiswa KKN Kelompok 5 Edukasi Pengolahan Sampah di Dusun Manis',
		slug: 'pelatihan-pengolahan-sampah-eco-enzyme-paving-block-biopori-dusun-manis',
		excerpt:
			'Gelar sosialisasi terbuka di Dusun Manis, mahasiswa KKN Kolaboratif 2026 Kelompok 5 latih warga olah limbah rumah tangga menjadi Eco Enzyme, paving block, dan lubang biopori...',
		content: `
            <p>Rangkaian program pengolahan limbah berbasis lingkungan "Kutakembaran Green Cycle" terus berlanjut. Kali ini, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menggelar sesi sosialisasi dan pelatihan pengolahan sampah terbuka bagi warga masyarakat di Dusun Manis, Desa Kutakembaran.</p>
            
            <p>Bertempat di area ruang terbuka Dusun Manis, mahasiswa KKN memaparkan materi pengelolaan sampah berkelanjutan di hadapan warga yang hadir antusias. Materi yang disampaikan berfokus pada tiga inovasi utama, yaitu pembuatan <i>Eco Enzyme</i> dari limbah organik, pembuatan <i>paving block</i> ramah lingkungan dari limbah plastik anorganik, serta penerapan lubang resapan biopori.</p>
            
            <p>Melalui pendekatan komunikatif dan interaktif, mahasiswa menjelaskan langkah demi langkah pemilahan sampah dari tingkat rumah tangga beserta manfaat ekonomis dan lingkungan yang dapat diperoleh warga. Sesi diskusi terbuka juga dimanfaatkan warga Dusun Manis untuk bertanya langsung mengenai kendala pengolahan limbah di sekitar pemukiman mereka.</p>
            
            <p>Melalui perluasan edukasi di Dusun Manis ini, KKN Kelompok 5 berharap kesadaran akan pentingnya menjaga kebersihan lingkungan serta keterampilan mengolah sampah dapat merata di seluruh pelosok Desa Kutakembaran.</p>
        `,
		date: '27 Juli 2026',
		imageUrl: '/assets/images/news/kkn-pelatihan-sampah-dusun-manis.jpg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '37',
		title: 'Pengumuman Match Day Fun Volleyball: Pertandingan Persahabatan KKN Cirukem vs KKN Kutakembaran',
		slug: 'pengumuman-fun-volleyball-kkn-cirukem-vs-kkn-kutakembaran',
		excerpt:
			'Satu lapangan, satu semangat, satu kemenangan! Saksikan keseruan pertandingan persahabatan Fun Volleyball antara KKN Cirukem melawan KKN Kutakembaran di Lapangan Voly Dusun Manis...',
		content: `
            <p><strong>Mari Rapatkan Barisan dan Berikan Dukungan Terbaikmu!</strong></p>
            
            <p>Dalam rangka mempererat tali silaturahmi dan menjalin keakraban antardesa, KKN Kolaboratif 2026 mempersembahkan agenda olahraga persahabatan <b>"Fun Volleyball Match Day"</b> yang mempertemukan tim <b>KKN Cirukem vs KKN Kutakembaran</b>.</p>
            
            <p>Pertandingan ini mengusung semangat persaudaraan dan sportivitas tinggi dengan tagline <i>"Satu Lapangan, Satu Semangat, Satu Kemenangan"</i>. Catat waktu dan lokasinya agar tidak ketinggalan keseruannya:</p>
            
            <ul>
                <li><b>Hari/Tanggal:</b> Selasa, 28 Juli 2026</li>
                <li><b>Waktu:</b> 15.30 WIB - Selesai</li>
                <li><b>Lokasi:</b> Lapangan Voly Desa Kutakembaran (Dusun Manis)</li>
            </ul>
            
            <p>Ayo seluruh warga dan kawan-kawan mahasiswa, hadir dan ramaikan tribun! Mari berikan sorakan hangat serta dukungan positif untuk kedua tim. <i>Play Hard, Respect All, Enjoy The Game!</i></p>
        `,
		date: '28 Juli 2026',
		imageUrl: '/assets/images/news/kkn-matchday-volleyball-cirukem-vs-kutakembaran.png',
		category: NewsCategory.ANNOUNCEMENT,
		author: 'Sie PDD',
		isFeatured: true,
	},

	{
		id: '38',
		title: 'Perkuat Ukhuwah Islamiyah, Mahasiswa KKN Kelompok 5 Ikuti Pengajian Rutinan Ibu-Ibu Selasa Pagi',
		slug: 'pengajian-rutinan-ibu-ibu-selasa-pagi-desa-kutakembaran',
		excerpt:
			'Pererat silaturahmi keagamaan, mahasiswa KKN Kolaboratif 2026 Kelompok 5 ikuti kegiatan majelis taklim dan pengajian rutinan ibu-ibu setiap Selasa pagi di Desa Kutakembaran...',
		content: `
            <p>Dalam rangka mempererat tali silaturahmi serta melebur bersama kegiatan keagamaan masyarakat, mahasiswi KKN Kolaboratif 2026 Kelompok 5 turut serta dalam agenda pengajian rutinan ibu-ibu yang diselenggarakan setiap hari Selasa pagi di Desa Kutakembaran.</p>
            
            <p>Kegiatan majelis taklim ini diisi dengan pembacaan doa bersama, lantunan solawat, serta tausiyah keagamaan. Kehadiran mahasiswi KKN disambut hangat oleh jamaah ibu-ibu desa yang tampak tekun dan khusyuk menyimak materi kajian keagamaan di dalam area masjid.</p>
            
            <p>Selain sebagai wadah penambah ilmu spiritual, momen pengajian rutinan Selasa pagi ini dimanfaatkan oleh mahasiswi KKN untuk lebih dekat dengan warga, saling bertukar sapa, dan memperkuat ukhuwah Islamiyah di lingkungan setempat.</p>
            
            <p>Melalui keikutsertaan aktif dalam kegiatan keagamaan lokal ini, KKN Kelompok 5 berharap nilai-nilai kebersamaan dan keharmonisan antara mahasiswa dan masyarakat Desa Kutakembaran dapat terus terjalin erat.</p>
        `,
		date: '28 Juli 2026',
		imageUrl: '/assets/images/news/kkn-pengajian-rutin-selasa.jpg',
		category: NewsCategory.VILLAGE,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '39',
		title: 'Satu Lapangan Satu Semangat, Kemeriahan Fun Volleyball KKN Kutakembaran vs KKN Cirukem',
		slug: 'kemeriahan-fun-volleyball-kkn-kutakembaran-vs-kkn-cirukem',
		excerpt:
			'Jalin keakraban lewat olahraga, pertandingan persahabatan Fun Volleyball antara KKN Kutakembaran dan KKN Cirukem di Lapangan Voly Dusun Manis berlangsung seru dan penuh kebersamaan...',
		content: `
            <p>Rangkaian agenda pertandingan persahabatan <b>Fun Volleyball Match Day</b> yang mempertemukan tim KKN Kutakembaran dan KKN Cirukem sukses digelar di Lapangan Voly Dusun Manis, Desa Kutakembaran. Pertandingan berlangsung meriah dengan antusiasme tinggi dari para pemain maupun penonton yang hadir.</p>
            
            <p>Sejak peluit pertama dibunyikan, kedua tim saling memperagakan permainan yang penuh semangat dan sportif. Aksi saling mengejar poin diselingi gelak tawa serta sorak dukungan dari tribun lapangan, menciptakan suasana pertandingan yang hangat dan menghibur bagi warga setempat.</p>
            
            <p>Setelah pertandingan usai, kegiatan dilanjutkan dengan foto bersama di tribun lapangan voly. Momen foto bersama ini menjadi bukti eratnya tali silaturahmi dan rasa persaudaraan antar sesama mahasiswa KKN Kolaboratif 2026 di wilayah sekitar.</p>
            
            <p>Melalui ajang olahraga ceria ini, diharapkan hubungan komunikasi, kolaborasi, dan keakraban antara tim KKN Kutakembaran dan KKN Cirukem dapat terus terjalin harmonis hingga akhir masa pengabdian.</p>
        `,
		date: '28 Juli 2026',
		imageUrl: '/assets/images/news/kkn-fun-volleyball-matchday-bersama.jpg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '40',
		title: 'Asah Keterampilan Dasar Sepak Bola, Mahasiswa KKN Kelompok 5 Ampu Pembelajaran Olahraga di SD Negeri 1 Kutakembaran',
		slug: 'pembelajaran-olahraga-sepak-bola-dasar-sd-negeri-1-kutakembaran',
		excerpt:
			'Guna mengasah fisik dan pemahaman taktik dasar, mahasiswa KKN Kolaboratif 2026 Kelompok 5 latih siswa kelas 5 SD Negeri 1 Kutakembaran materi pemanasan, dribel, operan, hingga strategi bermain...',
		content: `
            <p>Dalam rangka mendukung kegiatan jasmani dan pengembangan bakat olahraga siswa, mahasiswa KKN Kolaboratif 2026 Kelompok 5 mengisi kegiatan pembelajaran Penjaskes (Olahraga) khusus bagi siswa kelas 5 di SD Negeri 1 Kutakembaran. Materi pelatihan kali ini berfokus pada penguasaan teknik dan taktik dasar permainan sepak bola.</p>
            
            <p>Sesi latihan diawali dengan pemanasan terstruktur untuk mencegah risiko cedera, lalu dilanjutkan dengan latihan teknik fundamental seperti <i>dribble</i> (menggiring bola) dan kontrol operan pendek. Mahasiswa KKN memberikan pengarahan intensif agar para siswa dapat menguasai akurasi operan dan ritme permainan.</p>
            
            <p>Selain teknik dasar, mahasiswa KKN juga membekali para siswa dengan pemahaman taktik sepak bola yang efisien. Para siswa diajarkan cara bertahan yang solid, pentingnya memperbanyak umpan-umpan pendek, serta strategi bergerak membuka ruang di sela-sela pergerakan lawan agar selalu tersedia opsi operan. Taktik ini ditekankan agar siswa dapat bermain secara tim dengan efektif tanpa cepat menguras stamina.</p>
            
            <p>Antusiasme anak-anak kelas 5 tampak luar biasa sepanjang sesi latihan di lapangan. Melalui pendampingan olahraga ini, KKN Kelompok 5 berharap para siswa tidak hanya tumbuh makin sehat dan bugar, tetapi juga memahami pentingnya kerja sama tim, disiplin, dan strategi dalam berolahraga.</p>
        `,
		date: '29 Juli 2026',
		imageUrl: '/assets/images/news/kkn-mengajar-olahraga-sd1.jpg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '41',
		title: 'Tingkatkan Literasi Numerasi, Mahasiswa KKN Kelompok 5 Berikan Pendampingan Belajar Matematika di SD Negeri 1 Kutakembaran',
		slug: 'pendampingan-belajar-matematika-sd-negeri-1-kutakembaran',
		excerpt:
			'Bantu tingkatkan pemahaman berhitung siswa, mahasiswa KKN Kolaboratif 2026 Kelompok 5 beri pendampingan belajar Matematika secara interaktif di SD Negeri 1 Kutakembaran...',
		content: `
            <p>Dalam rangka mendukung peningkatan literasi numerasi di sekolah dasar, mahasiswa KKN Kolaboratif 2026 Kelompok 5 turut aktif membantu proses pembelajaran mata pelajaran Matematika di SD Negeri 1 Kutakembaran.</p>
            
            <p>Pendampingan belajar dilakukan dengan pendekatan yang interaktif dan komunikatif di dalam kelas. Mahasiswa KKN mendampingi para siswa secara langsung, membimbing pemecahan soal-soal matematika, serta memberikan penjelasan langkah demi langkah agar materi perhitungan terasa lebih mudah dipahami dan tidak menakutkan bagi anak-anak.</p>
            
            <p>Para siswa terlihat sangat antusias berkumpul mengelilingi meja belajar untuk bertanya dan berdiskusi langsung mengenai soal latihan yang sedang dikerjakan. Suasana belajar yang ramah dan suportif ini membuat anak-anak lebih percaya diri dalam menyelesaikan tugas matematika mereka.</p>
            
            <p>Melalui pendampingan ini, mahasiswa KKN Kelompok 5 berharap dapat meningkatkan minat belajar serta kemampuan logika berhitung para siswa di SD Negeri 1 Kutakembaran agar semakin siap menghadapi jenjang pendidikan selanjutnya.</p>
        `,
		date: '29 Juli 2026',
		imageUrl: '/assets/images/news/kkn-mengajar-matematika-sd1.jpg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '42',
		title: 'Bantu Kelancaran Mengaji Santri, Mahasiswa KKN Kelompok 5 Beri Pendampingan Belajar di Madrasah Al Barkah',
		slug: 'pendampingan-mengajar-mengaji-madrasah-al-barkah',
		excerpt:
			"Dukung pembinaan akhlak dan bacaan Al-Qur'an, mahasiswa KKN Kolaboratif 2026 Kelompok 5 terjun membantu bimbingan mengaji santri di Madrasah Al Barkah...",
		content: `
            <p>Dalam rangka memperkuat pendidikan keagamaan serta pembinaan akhlak anak-anak di Desa Kutakembaran, mahasiswa KKN Kolaboratif 2026 Kelompok 5 secara konsisten membantu proses pembelajaran dan bimbingan mengaji di Madrasah Al Barkah.</p>
            
            <p>Pendampingan dilakukan dengan metode pembelajaran privat dan kelompok kecil. Mahasiswa KKN mendampingi para santri satu per satu untuk menyimak hafalan, mengoreksi tajwid, serta membimbing kelancaran membaca Iqro dan Al-Qur'an secara telaten di bangku madrasah.</p>
            
            <p>Suasana belajar terasa begitu tenang dan kondusif. Tampak para santriwati dan santri tekun menyimak arahan dari mahasiswa KKN yang duduk mendampingi mereka. Metode Bimbingan personal ini membantu anak-anak lebih percaya diri dan fokus dalam memperlancar bacaan Al-Qur'an mereka.</p>
            
            <p>Melalui keikutsertaan aktif dalam kegiatan pengajaran di Madrasah Al Barkah ini, mahasiswa KKN Kelompok 5 berharap dapat memberikan kontribusi nyata dalam mencetak generasi muda desa yang religius, berakhlak mulia, dan cinta Al-Qur'an.</p>
        `,
		date: '29 Juli 2026',
		imageUrl: '/assets/images/news/kkn-mengajar-madrasah-al-barkah-2.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},
	{
		id: '43',
		title: 'Cegah Perundungan Sejak Dini, Mahasiswa KKN Kelompok 5 Gelar Sosialisasi Anti-Bullying di SD Negeri 2 Kutakembaran',
		slug: 'sosialisasi-anti-bullying-sd-negeri-2-kutakembaran',
		excerpt:
			'Bangkitkan kepedulian dan rasa saling menghargai, mahasiswa KKN Kolaboratif 2026 Kelompok 5 edukasi siswa SD Negeri 2 Kutakembaran tentang bahaya perundungan melalui kampanye "Be a Buddy, Not a Bully"...',
		content: `
            <p>Dalam upaya menciptakan lingkungan sekolah yang aman, nyaman, dan bebas dari tindakan perundungan, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menyelenggarakan kegiatan Sosialisasi Anti-Bullying di SD Negeri 2 Kutakembaran.</p>
            
            <p>Mengusung pesan utama <i>"Be a Buddy, Not a Bully"</i>, mahasiswa KKN menyampaikan materi pemahaman mengenai jenis-jenis perundungan (baik fisik, verbal, maupun sosial), dampak buruknya bagi mental korban, serta pentingnya saling menyayangi antar sesama teman sekolah. Materi disampaikan secara menarik memanfaatkan media visual peraga di halaman sekolah.</p>
            
            <p>Sesi kegiatan berlangsung hangat dan interaktif. Mahasiswa KKN mengajak beberapa siswa maju ke depan untuk berbicara di mikrofon, berbagi pendapat, serta memperagakan komitmen bersama untuk saling merangkul dan menolak segala bentuk perundungan di lingkungan sekolah.</p>
            
            <p>Melalui sosialisasi anti-bullying ini, KKN Kelompok 5 berharap dapat membentuk karakter siswa SD Negeri 2 Kutakembaran yang berbudi pekerti luhur, berempati tinggi, serta mampu mewujudkan suasana belajar yang inklusif dan ramah anak.</p>
        `,
		date: '30 Juli 2026',
		imageUrl: '/assets/images/news/kkn-sosialisasi-anti-bulying.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: true,
	},

	{
		id: '44',
		title: 'Dukung Pendampingan Belajar Usia Dini, Mahasiswa KKN Kelompok 5 Ikut Mengajar di PAUD Kenanga Dusun Pahing 1',
		slug: 'pendampingan-mengajar-paud-kenanga-dusun-pahing-1',
		excerpt:
			'Mengabdi untuk pendidikan usia dini, mahasiswa KKN Kolaboratif 2026 Kelompok 5 bantu proses belajar dan pembentukan karakter anak-anak di PAUD / KB Kenanga, Dusun Pahing 1...',
		content: `
            <p>Dalam rangka mendukung pengembangan pendidikan anak usia dini di desa, mahasiswa KKN Kolaboratif 2026 Kelompok 5 melaksanakan kegiatan pendampingan belajar di PAUD / KB Kenanga yang berlokasi di Dusun Pahing 1, Desa Kutakembaran.</p>
            
            <p>Dalam kegiatan ini, mahasiswa KKN membantu pengajar lokal memberikan materi pembentukan karakter, pengenalan doa-doa harian, serta praktik ibadah dasar bagi anak-anak. Pendampingan dikemas dengan metode interaktif, bernyanyi, dan peragaan langsung agar anak-anak usia dini dapat mengikuti instruksi dengan mudah dan gembira.</p>
            
            <p>Suasana kelas di KB Kenanga terlihat sangat hidup. Anak-anak yang mengenakan pakaian ibadah tampak ceria dan antusias mendengarkan penjelasan dari mahasiswi KKN yang berdiri memberikan contoh di depan kelas.</p>
            
            <p>Melalui keikutsertaan dalam mengajar di PAUD Kenanga Dusun Pahing 1 ini, KKN Kelompok 5 berharap dapat membantu menciptakan suasana belajar yang menyenangkan serta menumbuhkan minat belajar dan nilai-nilai keagamaan sejak dini bagi anak-anak di Desa Kutakembaran.</p>
        `,
		date: '31 Juli 2026',
		imageUrl: '/assets/images/news/kkn-mengajar-paud-kenanga-pahing1.jpg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '45',
		title: 'Latih Keterampilan Isyarat Abjad, Mahasiswa KKN Kelompok 5 Dampingi Praktik Semaphore Pramuka di SD Negeri 2 Kutakembaran',
		slug: 'pendampingan-praktik-pramuka-semaphore-sd-negeri-2-kutakembaran',
		excerpt:
			'Tingkatkan Ketangkasan dan ketelitian siswa, mahasiswa KKN Kolaboratif 2026 Kelompok 5 bina latihan ekstrakurikuler Pramuka fokus pada peragaan bendera Semaphore di SD Negeri 2 Kutakembaran...',
		content: `
            <p>Dalam rangka melanjutkan pembinaan ekstrakurikuler kepramukaan, mahasiswa KKN Kolaboratif 2026 Kelompok 5 mendampingi kegiatan latihan luar ruangan (outdoor) khusus materi isyarat <i>Semaphore</i> bagi siswa SD Negeri 2 Kutakembaran.</p>
            
            <p>Berlokasi di halaman sekolah, para siswa Pramuka tampak berbaris rapi dan memegang sepasang bendera semaphore merah-kuning. Mahasiswa KKN secara cermat membimbing serta mengevaluasi setiap posisi tangan siswa untuk membentuk isyarat abjad A sampai Z sesuai standar kepramukaan.</p>
            
            <p>Para siswa memperagakan gerakan bendera dengan penuh semangat dan konsentrasi tinggi. Pembelajaran praktik di lapangan ini dirancang agar para siswa dapat mengasah memori visual, ketepatan posisi, serta kecepatan dalam mengirim maupun menerima pesan isyarat abjad.</p>
            
            <p>Melalui latihan rutin ini, KKN Kelompok 5 berharap para siswa SD Negeri 2 Kutakembaran semakin terampil, tangkas, dan percaya diri dalam menguasai teknik komunikasi nonverbal dasar dalam dunia Kepramukaan.</p>
        `,
		date: '31 Juli 2026',
		imageUrl: '/assets/images/news/kkn-latihan-pramuka-semaphore-sd2.jpg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '46',
		title: 'Sinergi Rakor Desa Bersama TP PKK: Edukasi Obat, Pembagian Buku Panduan Stunting & MPASI, serta Sosialisasi Agenda UMKM',
		slug: 'rapat-koordinasi-pkk-edukasi-obat-buku-stunting-mpasi-pengumuman-umkm',
		excerpt:
			'Perkuat sinergi kesehatan keluarga dan program desa, KKN Kelompok 5 ikuti Rakor TP PKK Desa Kutakembaran: dibekali edukasi obat, pembagian buku saku Stunting & MPASI, serta sosialisasi agenda UMKM...',
		content: `
            <p>Dalam upaya memperkuat sinergi program kemasyarakatan serta meningkatkan kualitas kesehatan keluarga, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menghadiri kegiatan Rapat Koordinasi (Rakor) Desa bersama Tim Penggerak PKK Desa Kutakembaran.</p>
            
            <p>Pertemuan yang berlangsung hangat di Balai Desa ini diisi dengan sesi edukasi kesehatan khusus oleh praktisi Apoteker mengenai prinsip <i>DAGUSIBU</i> (Dapatkan, Gunakan, Simpan, dan Buang) obat secara aman dan tepat. Selain itu, mahasiswa KKN juga membagikan buku kecil (buku saku) sebagai media edukasi praktis dan ringkas yang mudah dibawa oleh warga.</p>
            
            <p>Buku panduan tersebut memuat informasi penting seputar pencegahan <i>stunting</i> serta tata cara pemberian Makanan Pendamping ASI (MPASI) yang bergizi. Menyasar langsung para ibu yang memiliki bayi dan balita, buku kecil ini hadir sebagai panduan praktis guna meningkatkan pengetahuan keluarga agar risiko <i>stunting</i> pada anak dapat dicegah sejak dini.</p>
            
            <p>Di akhir sesi, mahasiswa KKN Kelompok 5 turut menyampaikan pemberitahuan serta undangan resmi mengenai agenda program kerja pendampingan dan sosialisasi pengembangan Usaha Mikro, Kecil, dan Menengah (UMKM) yang akan dilaksanakan pada hari Minggu mendatang. Melalui kolaborasi ini, diharapkan para kader PKK dapat menyebarluaskan wawasan kesehatan sekaligus mengajak warga berpartisipasi aktif dalam penguatan ekonomi desa.</p>
        `,
		date: '31 Juli 2026',
		imageUrl: '/assets/images/news/kkn-rakor-pkk-sosialisasi-obat.jpg',
		category: NewsCategory.VILLAGE,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '47',
		title: 'Melestarikan Kuliner Lokal, Mahasiswa KKN Kelompok 5 Ikuti Praktik Pembuatan Ranggining Bersama Ibu-Ibu PKK',
		slug: 'praktik-pembuatan-ranggining-bersama-ibu-ibu-pkk-kutakembaran',
		excerpt:
			'Dukung potensi olahan pangan lokal, mahasiswa KKN Kolaboratif 2026 Kelompok 5 ikuti sesi pembuatan camilan tradisional Ranggining bersama ibu-ibu PKK Desa Kutakembaran...',
		content: `
            <p>Dalam rangka menggali dan mendukung potensi olahan pangan lokal desa, mahasiswa KKN Kolaboratif 2026 Kelompok 5 berkesempatan mengikuti praktik pembuatan camilan tradisional <b>Ranggining</b> bersama ibu-ibu Tim Penggerak PKK Desa Kutakembaran.</p>
            
            <p>Kegiatan ini berlangsung penuh kehangatan dan keakraban. Mahasiswa KKN diajarkan secara langsung tahapan pengolahan ranggining, mulai dari penyiapan adonan bertekstur khas, pencetakan dan penggilingan adonan menggunakan alat khusus hingga menjadi lembaran yang siap dijemur dan digoreng.</p>
            
            <p>Selain sebagai wadah transfer pengetahuan kuliner tradisional khas Sunda, kegiatan ini juga menjadi sarana mempererat hubungan silaturahmi antara mahasiswa KKN dan para kader PKK desa. Diskusi santai seputar peningkatan kualitas produk dan potensi pengemasan ranggining sebagai produk UMKM unggulan desa turut diulas di sela-sela kegiatan.</p>
            
            <p>Melalui pengalaman praktik ini, KKN Kelompok 5 berharap cita rasa dan keahlian pembuatan ranggining sebagai aset warisan kuliner lokal Desa Kutakembaran dapat terus dilestarikan serta dikembangkan ke jangkauan pasar yang lebih luas.</p>
        `,
		date: '1 Agustus 2026',
		imageUrl: '/assets/images/news/kkn-pembuatan-ranggining-pkk.jpg',
		category: NewsCategory.VILLAGE,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '48',
		title: 'Asah Keterampilan Tali-Menali, Mahasiswa KKN Kelompok 5 Dampingi Kegiatan Kepramukaan di SD Negeri 1 Kutakembaran',
		slug: 'pendampingan-kegiatan-pramuka-tali-menali-sd-negeri-1-kutakembaran',
		excerpt:
			'Tingkatkan kemandirian dan keterampilan kepramukaan, mahasiswa KKN Kolaboratif 2026 Kelompok 5 latih siswa SD Negeri 1 Kutakembaran teknik tali-menali dan ikatan dasar...',
		content: `
            <p>Dalam upaya mendukung pembentukan karakter serta keterampilan kedisiplinan siswa, mahasiswa KKN Kolaboratif 2026 Kelompok 5 turut serta mendampingi kegiatan ekstrakurikuler Pramuka di SD Negeri 1 Kutakembaran.</p>
            
            <p>Pada sesi pembinaan kali ini, materi difokuskan pada penguasaan teknik dasar tali-menali (<i>pioneering</i>). Mahasiswa KKN mendampingi adik-adik Pramuka Penggalang secara dekat untuk mempraktikkan berbagai jenis simpul dan ikatan dasar pada tongkat Pramuka secara akurat dan kokoh.</p>
            
            <p>Para siswi tampak sangat antusias dan fokus memperhatikan teknik mengikat yang diajarkan oleh mahasiswi KKN di halaman sekolah. Pendampingan secara langsung ini memudahkan para siswa memahami fungsi tiap simpul serta melatih kerja sama tim dan ketelitian.</p>
            
            <p>Melalui keikutsertaan dalam kegiatan kepramukaan di SD Negeri 1 Kutakembaran ini, KKN Kelompok 5 berharap dapat menumbuhkan jiwa kepemimpinan, kemandirian, serta kreativitas anggota Pramuka sejak usia sekolah dasar.</p>
        `,
		date: '1 Agustus 2026',
		imageUrl: '/assets/images/news/kkn-mengajar-pramuka-sd1.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '49',
		title: 'Dorong Digitalisasi Ekonomi Lokal, Mahasiswa KKN Kelompok 5 Resmi Meluncurkan Website Galeri UMKM Desa Kutakembaran',
		slug: 'peluncuran-website-galeri-umkm-desa-kutakembaran',
		excerpt:
			'Wujudkan transformasi digital ekonomi desa, mahasiswa KKN Kolaboratif 2026 Kelompok 5 resmi merilis platform website Galeri UMKM Desa Kutakembaran untuk memperluas jangkauan pasar produk lokal...',
		content: `
            <p>Sebagai langkah konkret dalam mendukung digitalisasi ekonomi dan pemberdayaan pelaku usaha lokal, mahasiswa KKN Kolaboratif 2026 Kelompok 5 secara resmi merilis platform <b>Website Galeri UMKM Desa Kutakembaran</b>.</p>
            
            <p>Platform digital ini dirancang sebagai wadah katalog interaktif yang mempertemukan calon pembeli secara langsung dengan para pelaku UMKM lokal. Melalui platform ini, masyarakat luas dapat menemukan ragam potensi produk asli warga desa, mulai dari aneka olahan kuliner, kerajinan tangan, hingga produk unggulan daerah lainnya.</p>
            
            <p>Sistem pencarian produk yang terstruktur berdasarkan kategori memudahkan pengunjung untuk menjelajahi katalog barang serta menghubungi pihak penjual secara langsung. Kehadiran website ini menjadi tonggak penting dalam membantu promosi dan memperluas daya jangkau pasar UMKM Desa Kutakembaran di era digital.</p>

            <p>Masyarakat dan pengunjung dapat langsung menjelajahi katalog produk unggulan desa melalui tautan resmi berikut: <a href="https://www.galeri-umkm-kutakembaran.my.id" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline font-semibold hover:text-emerald-700">Galeri UMKM Desa Kutakembaran</a>.</p>
            
            <p>Melalui inovasi digitalisasi ini, KKN Kelompok 5 berharap platform Galeri UMKM dapat terus dimanfaatkan dan dikembangkan oleh warga serta perangkat desa demi meningkatkan kemandirian dan pertumbuhan ekonomi masyarakat secara berkelanjutan.</p>
        `,
		date: '2 Agustus 2026',
		imageUrl: '/assets/images/news/kkn-launching-website-galeri-umkm.png',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: true,
	},

	{
		id: '50',
		title: 'Dari Produk Lokal Menuju Pasar Digital, Mahasiswa KKN Kelompok 5 Resmikan Website Galeri UMKM dan Gelar Sosialisasi Digitalisasi Usaha',
		slug: 'sosialisasi-digitalisasi-umkm-dan-peluncuran-website-galeri-umkm-kutakembaran',
		excerpt:
			'Dorong kemandirian ekonomi desa, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menggelar sosialisasi Digitalisasi UMKM sekaligus memperkenalkan platform Website Galeri UMKM Desa Kutakembaran...',
		content: `
            <p>Dalam rangka mendorong peningkatan daya saing dan perluasan jangkauan pasar bagi para pelaku usaha lokal, mahasiswa KKN Kolaboratif 2026 Kelompok 5 sukses menyelenggarakan agenda bertajuk <b>"Digitalisasi UMKM Desa Kutakembaran: Dari Produk Lokal Menuju Pasar Digital"</b> di Balai Desa Kutakembaran.</p>
            
            <p>Kegiatan sosialisasi dan pendampingan ini dihadiri secara antusias oleh para pelaku UMKM, kader PKK, dan tokoh masyarakat setempat. Dalam pemaparannya, mahasiswa KKN memberikan pembekalan komprehensif seputar penguatan identitas usaha (<i>branding</i>, pembuatan logo, dan kemasan menarik), teknik fotografi produk menggunakan ponsel, strategi <i>copywriting</i>, serta tata cara pengelolaan kanal pemasaran digital melalui <b>WhatsApp Business</b> dan <b>Shopee Marketplace</b>.</p>
            
            <p>Selain pemaparan strategi pemasaran digital, momen utama dalam pertemuan ini adalah pengenalan dan peluncuran platform <b>Website Galeri UMKM Desa Kutakembaran</b>. Platform ini hadir sebagai katalog digital resmi desa untuk menampilkan ragam karya kuliner, kerajinan, dan produk unggulan buatan warga desa agar dapat diakses oleh calon konsumen luas secara praktis dan terpercaya.</p>

            <p>Masyarakat dan calon pembeli dapat langsung mengunjungi dan menjelajahi katalog usaha desa melalui tautan resmi berikut: <a href="https://www.galeri-umkm-kutakembaran.my.id" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline font-semibold hover:text-emerald-700">Website Galeri UMKM Desa Kutakembaran</a>.</p>
            
            <p>Melalui integrasi pendampingan pemasaran digital dan penyediaan platform Galeri UMKM ini, KKN Kelompok 5 berharap para pelaku usaha lokal Desa Kutakembaran dapat secara mandiri mengelola promosi produknya, meningkatkan omzet penjualan, serta membawa produk lokal go-digital secara berkelanjutan.</p>
        `,
		date: '2 Agustus 2026',
		imageUrl: '/assets/images/news/kkn-sosialisasi-digitalisasi-umkm.jpg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: true,
	},

	{
		id: '51',
		title: 'Jaga Bugar dan Kebersamaan, Mahasiswa KKN Kelompok 5 Ikuti Senam Sehat Rutinan di Halaman Balai Desa Kutakembaran',
		slug: 'senam-sehat-rutinan-halaman-balai-desa-kutakembaran',
		excerpt:
			'Tingkatkan kebugaran jasmani dan keakraban warga, mahasiswa KKN Kolaboratif 2026 Kelompok 5 ikuti kegiatan senam sehat rutinan bersama masyarakat di halaman Balai Desa Kutakembaran...',
		content: `
            <p>Dalam rangka menjaga kebugaran tubuh serta mempererat tali silaturahmi dengan warga masyarakat, mahasiswa KKN Kolaboratif 2026 Kelompok 5 turut aktif mengikuti kegiatan <b>Senam Sehat Rutinan</b> di halaman Balai Desa Kutakembaran.</p>
            
            <p>Sejak pagi hari, para warga dan ibu-ibu desa tampak antusias berkumpul memadati area depan balai desa. Didampingi alunan musik energik dan instruktur senam, mahasiswi KKN bersama warga bergerak kompak mengikuti setiap irama dan pergerakan senam kebugaran.</p>
            
            <p>Kegiatan olahraga bersama ini tidak hanya bertujuan untuk meningkatkan kesehatan fisik, tetapi juga menjadi wadah interaksi santai dan penuh tawa antara mahasiswa KKN dan warga desa di luar agenda formal program kerja.</p>
            
            <p>Melalui partisipasi rutin dalam kegiatan olahraga kemasyarakatan ini, KKN Kelompok 5 berharap semangat pola hidup sehat dan keharmonisan sosial warga Desa Kutakembaran dapat terus terjaga dengan baik.</p>
        `,
		date: '2 Agustus 2026',
		imageUrl: '/assets/images/news/kkn-senam-sehat-rutinan-balai-desa.jpg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '52',
		title: 'Perkuat Sinergi Agenda Desa, Mahasiswa KKN Kelompok 5 Gelar Diskusi Bersama Guru SD Negeri 1 Kutakembaran dan Tinjau Potensi BUMDes Ayam Petelur',
		slug: 'konsultasi-kegiatan-dan-diskusi-bumdes-ayam-petelur-kutakembaran',
		excerpt:
			'Bangun koordinasi dan sinergi lokal, mahasiswa KKN Kolaboratif 2026 Kelompok 5 berkonsultasi mengenai agenda mendatang bersama Pak Ahmad serta berdiskusi seputar pengelolaan BUMDes Ayam Petelur...',
		content: `
            <p>Dalam rangka mematangkan persiapan program kerja mendatang sekaligus mempererat silaturahmi dengan tokoh pendidik desa, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menggelar sesi konsultasi dan diskusi santai bersama Pak Ahmad, pengajar di SD Negeri 1 Kutakembaran.</p>
            
            <p>Pertemuan yang berlangsung hangat di saung desa ini berfokus pada koordinasi teknis pelaksanaan rangkaian kegiatan kolaboratif mendatang bersama pihak sekolah. Selain pembahasan agenda kegiatan, diskusi berkembang interaktif mengenai potensi dan tata kelola unit usaha Badan Usaha Milik Desa (BUMDes) sektor peternakan ayam petelur.</p>
            
            <p>Pak Ahmad memberikan banyak masukan, saran konstruktif, serta wawasan berharga mengenai pengelolaan BUMDes peternakan lokal demi mendukung ketahanan pangan dan ekonomi warga Desa Kutakembaran. Di akhir sesi diskusi, mahasiswa KKN juga menyampaikan rasa terima kasih dan apresiasi yang mendalam atas keramahan serta pemberian telur hasil produksi peternakan lokal dari Pak Ahmad.</p>
            
            <p>Melalui ruang diskusi yang hangat dan kekeluargaan ini, KKN Kelompok 5 berharap sinergi antara mahasiswa, tenaga pendidik, dan pengelola potensi lokal desa dapat terus terjalin erat hingga seluruh rangkaian pengabdian selesai.</p>
        `,
		date: '3 Agustus 2026',
		imageUrl: '/assets/images/news/kkn-konsultasi-pak-ahmad-bumdes-ayam-petelur.jpeg',
		category: NewsCategory.VILLAGE,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '53',
		title: 'Isi Waktu Luang dengan Olahraga Bebas, Mahasiswa KKN Kelompok 5 Bermain Badminton Bersama di Gedung Balai Desa Kutakembaran',
		slug: 'mengisi-waktu-luang-bermain-badminton-gedung-balai-desa-kutakembaran',
		excerpt:
			'Menjaga kebugaran dan keakraban di sela agenda pengabdian, mahasiswa KKN Kolaboratif 2026 Kelompok 5 isi waktu luang dengan bermain badminton bersama di Gedung Balai Desa Kutakembaran...',
		content: `
            <p>Di sela-sela padatnya rutinitas pelaksanaan program kerja KKN, mahasiswa KKN Kolaboratif 2026 Kelompok 5 memanfaatkan waktu luang untuk berolahraga bersama dengan bermain badminton (bulu tangkis) di Gedung Balai Desa Kutakembaran.</p>
            
            <p>Kegiatan olahraga santai ini berlangsung penuh dengan gelak tawa dan semangat keceriaan. Memanfaatkan fasilitas aula balai desa, para mahasiswa saling bertanding persahabatan guna menyegarkan kembali pikiran serta menjaga kondisi fisik agar tetap prima selama masa pengabdian.</p>
            
            <p>Selain sebagai sarana menjaga kebugaran tubuh, momen kebersamaan di lapangan badminton ini juga menjadi wadah efektif untuk mempererat kekompakan dan solidaritas internal antar anggota tim KKN Kelompok 5.</p>
            
            <p>Melalui aktivitas positif ini, KKN Kelompok 5 siap melanjutkan rangkaian agenda program kerja berikutnya di Desa Kutakembaran dengan energi yang kembali segar dan penuh semangat.</p>
        `,
		date: '3 Agustus 2026',
		imageUrl: '/assets/images/news/kkn-bermain-badminton-balai-desa.jpg',
		category: NewsCategory.VILLAGE,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '54',
		title: 'Pererat Silaturahmi Keagamaan, Mahasiswa KKN Kelompok 5 Ikuti Pengajian Rutin Selasa Pagi di Dusun Manis',
		slug: 'pengajian-rutin-selasa-pagi-dusun-manis-kutakembaran',
		excerpt:
			'Perkuat nilai spiritualitas dan keakraban bersama warga, mahasiswa KKN Kolaboratif 2026 Kelompok 5 ikuti kegiatan pengajian rutin Selasa pagi di Dusun Manis...',
		content: `
            <p>Dalam rangka mempererat tali silaturahmi serta mendukung kegiatan keagamaan masyarakat lokal, mahasiswa KKN Kolaboratif 2026 Kelompok 5 hadir dan mengikuti kegiatan <b>Pengajian Rutin Selasa Pagi</b> bersama warga di Dusun Manis, Desa Kutakembaran.</p>
            
            <p>Suasana majelis pengajian berlangsung khidmat dan penuh kehangatan. Mahasiswi KKN duduk bersama jajaran ibu-ibu jamaah dusun menyimak lantunan ayat-ayat suci Al-Qur'an serta tausiyah keagamaan yang disampaikan oleh tokoh agama setempat.</p>
            
            <p>Keikutsertaan mahasiswa KKN dalam majelis taklim ini menjadi sarana efektif untuk melebur dengan masyarakat, menyerap nilai-nilai kearifan lokal, serta memperkuat keharmonisan antara mahasiswa dan warga desa di luar agenda program kerja formal.</p>
            
            <p>Melalui partisipasi aktif dalam pengajian rutin ini, KKN Kelompok 5 berharap silaturahmi dan rasa kekeluargaan dengan warga Dusun Manis dapat terus terjalin erat dan membawa keberkahan bagi pelaksanaan seluruh program KKN di Desa Kutakembaran.</p>
        `,
		date: '4 Agustus 2026',
		imageUrl: '/assets/images/news/kkn-pengajian-rutin-selasa-pagi-dusun-manis.png',
		category: NewsCategory.VILLAGE,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '55',
		title: 'Pererat Keakraban Antar-Desa, KKN Kelompok 5 Kutakembaran Gelar Fun Volleyball Bersama Pemuda, KKN Cirukem, dan KKN Pakembangan',
		slug: 'fun-volleyball-lintas-kkn-kutakembaran-cirukem-pakembangan-bersama-pemuda',
		excerpt:
			'Jalin kebersamaan dan sportivitas lintas desa, mahasiswa KKN Kolaboratif 2026 Kelompok 5 Kutakembaran ikuti pertandingan Fun Volleyball bersama pemuda setempat serta tim KKN Desa Cirukem dan Pakembangan...',
		content: `
            <p>Dalam rangka mempererat tali silaturahmi serta membangun kebersamaan antar-mahasiswa dan pemuda desa, mahasiswa KKN Kolaboratif 2026 Kelompok 5 Kutakembaran menggelar kegiatan olahraga persahabatan <b>Fun Volleyball</b> di lapangan voli terbuka desa.</p>
            
            <p>Pertandingan ini berlangsung sangat meriah dengan mengikutsertakan pemuda setempat serta kolaborasi lintas kelompok KKN dari desa tetangga, yaitu tim KKN Desa Cirukem dan KKN Desa Pakembangan. Suasana pertandingan berjalan seru dan kompetitif, diwarnai aksi-aksi <i>smash</i> dan <i>blocking</i> antar pemain yang disambut sorak gembira para penonton di pinggir lapangan.</p>
            
            <p>Selain sebagai sarana menjaga kebugaran fisik, laga voli ceria ini menjadi wadah efektif untuk memperluas jaringan komunikasi, mempererat keakraban antar sesama mahasiswa KKN, serta meningkatkan kekompakan dengan pemuda lokal di lingkungan sekitar.</p>
            
            <p>Melalui semangat sportivitas dan kebersamaan ini, KKN Kelompok 5 berharap hubungan baik dan sinergi antar kelompok KKN serta pemuda desa dapat terus terjalin erat hingga akhir masa pengabdian.</p>
        `,
		date: '4 Agustus 2026',
		imageUrl: '/assets/images/news/kkn-fun-volleyball-pemuda-cirukem-pakembangan.jpg',
		category: NewsCategory.VILLAGE,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '56',
		title: 'Kolaborasi Bersama Posyandu: Edukasi Stunting, Pembagian Obat Cacing, Inovasi Lele Galon, dan Pembagian Buku Saku MP-ASI',
		slug: 'kolaborasi-posyandu-edukasi-stunting-obat-cacing-lele-galon-buku-mpasi',
		excerpt:
			'Tingkatkan kesehatan balita dan gizi keluarga, mahasiswa KKN Kolaboratif 2026 Kelompok 5 berkolaborasi dengan Posyandu untuk edukasi stunting, pembagian obat cacing, budidaya lele galon, serta pembagian buku MP-ASI...',
		content: `
            <p>Dalam upaya mendukung pencegahan <i>stunting</i> serta peningkatan kesehatan ibu dan anak secara holistik, mahasiswa KKN Kolaboratif 2026 Kelompok 5 menyelenggarakan kegiatan kolaborasi komprehensif bersama kader Posyandu Desa Kutakembaran di Balai Desa.</p>
            
            <p>Rangkaian kegiatan diawali dengan sosialisasi pencegahan <i>stunting</i> serta pembagian obat cacing berkala bagi bayi dan balita untuk mendukung tumbuh kembang anak yang optimal. Selain itu, kader Posyandu turut memaparkan solusi inovatif berupa budidaya ikan lele skala rumah tangga memanfaatkan galon bekas. Inovasi "lele galon" yang praktis dan hemat tempat ini diperkenalkan sebagai alternatif mudah bagi setiap rumah tangga untuk memenuhi kebutuhan protein hewani keluarga secara mandiri.</p>
            
            <p>Pada saat yang sama, mahasiswa KKN Kelompok 5 juga memberikan pemaparan materi dan membagikan buku saku panduan MP-ASI (Makanan Pendamping ASI). Buku kecil ini berisi panduan praktis variasi menu bergizi seimbang, takaran saji, serta tata cara pemberian makanan bagi bayi dan balita guna mencegah risiko kurang gizi sejak dini.</p>
            
            <p>Suasana kegiatan berlangsung sangat interaktif dan penuh keakraban. Warga dan ibu-ibu balita tampak antusias memperlihatkan buku saku MP-ASI dan galon bekas percontohan saat sesi foto bersama di akhir acara.</p>
            
            <p>Melalui kolaborasi lintas program kesehatan dan ketahanan gizi keluarga ini, KKN Kelompok 5 dan Posyandu berharap dapat mendorong terciptanya generasi muda Desa Kutakembaran yang sehat, cerdas, dan bebas dari <i>stunting</i>.</p>
        `,
		date: '5 Agustus 2026',
		imageUrl: '/assets/images/news/kkn-kolaborasi-posyandu-lele-galon-mpasi.jpeg',
		category: NewsCategory.VILLAGE,
		author: 'Sie PDD',
		isFeatured: true,
	},

	{
		id: '57',
		title: 'Ceriakan Pembelajaran Anak Usia Dini, Mahasiswa KKN Kelompok 5 Dampingi Kegiatan Olahraga dan Bermain Bersama Siswa PAUD',
		slug: 'pendampingan-kegiatan-luar-ruangan-siswa-paud-kutakembaran',
		excerpt:
			'Dukung tumbuh kembang motorik dan keceriaan anak, mahasiswa KKN Kolaboratif 2026 Kelompok 5 ikut mengajar serta mendampingi kegiatan senam dan permainan luar ruangan siswa PAUD...',
		content: `
            <p>Dalam rangka mendukung pengembangan motorik kasar serta menciptakan suasana belajar yang menyenangkan bagi anak usia dini, mahasiswa KKN Kolaboratif 2026 Kelompok 5 kembali berpartisipasi aktif dalam kegiatan mengajar di sekolah PAUD Desa Kutakembaran.</p>
            
            <p>Berbeda dengan aktivitas pembelajaran di dalam kelas, kali ini mahasiswa KKN mengajak anak-anak PAUD untuk beraktivitas di lapangan terbuka. Kegiatan diawali dengan gerakan senam ceria anak, olah tubuh ringan, serta berbagai permainan interaktif yang melatih ketangkasan dan keseimbangan fisik anak.</p>
            
            <p>Suasana kegiatan outdoor berlangsung sangat meriah dan penuh canda tawa. Anak-anak tampak begitu antusias dan gembira bergerak bersama para mahasiswi KKN yang memandu pergerakan di tengah lapangan dengan ceria dan telaten.</p>
            
            <p>Melalui keterlibatan rutin dalam pendampingan mengajar di PAUD ini, KKN Kelompok 5 berharap dapat membantu menumbuhkan rasa percaya diri, keberanian, serta semangat belajar yang tinggi pada anak-anak sejak usia dini.</p>
        `,
		date: '6 Agustus 2026',
		imageUrl: '/assets/images/news/kkn-mengajar-kegiatan-outdoor-paud.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},

	{
		id: '58',
		title: "Tingkatkan Literasi Keagamaan Anak, Mahasiswa KKN Kelompok 5 Ikut Dampingi Pembelajaran Al-Qur'an di Madrasah",
		slug: 'pendampingan-mengajar-al-quran-madrasah-kutakembaran',
		excerpt:
			"Perkuat fondasi keagamaan generasi muda, mahasiswa KKN Kolaboratif 2026 Kelompok 5 turut serta mengajar dan menyimak bacaan Al-Qur'an serta Iqra santri di Madrasah Desa Kutakembaran...",
		content: `
            <p>Dalam rangka memperkuat karakter keagamaan serta meningkatkan kualitas pembacaan Al-Qur'an pada anak-anak desa, mahasiswa KKN Kolaboratif 2026 Kelompok 5 secara rutin turut serta mendampingi kegiatan belajar-mengajar di Madrasah Diniyah Desa Kutakembaran.</p>
            
            <p>Sesi pembelajaran berlangsung dengan metode privat dan interaktif (<i>sorogan</i>). Mahasiswa KKN menyimak secara langsung satu per satu bacaan Al-Qur'an maupun buku Iqra para santri, sembari membetulkan kelancaran tajwid, makhraj huruf, serta memberikan pemahaman dasar tata cara membaca yang baik dan benar.</p>
            
            <p>Suasana kelas di madrasah tampak tenang dan hangat. Para santri terlihat sangat khusyuk dan santun mendengarkan bimbingan dari mahasiswi KKN yang mendampingi di depan meja rekal.</p>
            
            <p>Melalui pendampingan belajar keagamaan di madrasah ini, KKN Kelompok 5 berharap dapat memberikan kontribusi nyata dalam mencetak generasi muda Desa Kutakembaran yang religius, berakhlak mulia, dan gemar membaca Al-Qur'an.</p>
        `,
		date: '6 Agustus 2026',
		imageUrl: '/assets/images/news/kkn-mengajar-madrasah-alquran.jpeg',
		category: NewsCategory.NEWS,
		author: 'Sie PDD',
		isFeatured: false,
	},
];
