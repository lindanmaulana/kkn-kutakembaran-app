export const ROLE_GUEST_BOOK = {
    WARGA: 'warga',
    PERANGKAT_DESA: "perangkat_desa",
    SISWA_PEMUDA: 'siswa_pemuda',
    MAHASISWA_KKN: "mahasiswa_kkn",
    TOKOH_MASYARAKAT: 'tokoh_masyarakat',
    UMUM: 'umum'
} as const


export type RoleGuestBookType = typeof ROLE_GUEST_BOOK[keyof typeof ROLE_GUEST_BOOK]