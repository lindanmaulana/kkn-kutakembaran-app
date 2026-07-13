export interface TargetProgram {
    id: string;
    title: string;
    description: string;
    details: string; 
    imageUrl: string;
}

export const TARGET_PROGRAMS: TargetProgram[] = [
    {
        id: 'target-1',
        title: 'Peserta Didik',
        description: 'SD, SMP, SMA Sederajat, Santri',
        details: 'Fokus pada pengembangan literasi digital, penguatan karakter, serta pendampingan belajar interaktif guna meningkatkan mutu pendidikan anak usia dini hingga menengah di lingkungan sekolah dan pesantren.',
        imageUrl: '/assets/images/target-program/school.png',
    },
    {
        id: 'target-2',
        title: 'Anak - Anak',
        description: 'Anak usia di Bawah 5 Tahun',
        details: 'Mendukung program pencegahan stunting dan optimalisasi tumbuh kembang balita melalui edukasi pola hidup bersih sehat (PHBS), posyandu keliling, serta sosialisasi gizi seimbang kepada orang tua.',
        imageUrl: '/assets/images/target-program/child.png',
    },
    {
        id: 'target-3',
        title: 'Ibu Hamil & Menyusui',
        description: 'Gizi untuk Ibu Hamil & Menyusui',
        details: 'Memberikan pendampingan kesehatan reproduksi, penyuluhan pentingnya ASI eksklusif, serta demonstrasi pengolahan pangan lokal yang kaya nutrisi demi menjaga kesehatan ibu dan pemenuhan gizi awal anak.',
        imageUrl: '/assets/images/target-program/pregnant.png',
    },
];