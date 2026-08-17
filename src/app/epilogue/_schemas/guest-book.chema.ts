import { ROLE_GUEST_BOOK, RoleGuestBookType } from '@/types/role-guest-book.type';
import z from 'zod';

export const guestBookSchema = z.object({
	id: z.string().min(1, 'Id tidak boleh kosong'),
	name: z.string().min(1, 'Nama tidak boleh kosong!'),
	role: z.enum(Object.values(ROLE_GUEST_BOOK) as [RoleGuestBookType, ...RoleGuestBookType[]], {
		error: 'Pilih peran yang valid',
	}),
	message: z.string().min(1, 'Pesan tidak boleh kosong!').max(500, "Pesan tidak boleh lebih dari 500 kata!"),
	is_pinned: z.boolean().default(false),
	created_at: z.date(),
});

export const guestBookCreateSchema = guestBookSchema.pick({
	name: true,
	role: true,
	message: true,
});

export type TypeGuestBookCreateSchema = z.infer<typeof guestBookCreateSchema>;
