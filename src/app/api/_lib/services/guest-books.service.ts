import { customAPIError } from '@/lib/helpers/custom-api-error.helper';
import supabase from '@/lib/supabase';
import { guestBooksCreateRequest } from '../models/guest-books.model';

export const guestBooksService = {
	table: 'guest_books',
	create: async (req: guestBooksCreateRequest) => {
		const result = await supabase
			.from(guestBooksService.table)
			.insert({
				name: req.name,
				role: req.role,
				message: req.message,
			})
			.select();

		if (result.error) throw new customAPIError(`Gagal menyimpan data`, result.status);

		return result.data[0];
	},

	getAll: async () => {
		const result = await supabase
			.from(guestBooksService.table)
			.select('id, name, role, message, is_pinned, created_at')
			.order('created_at', { ascending: false });

		if (result.error) throw new customAPIError('Gagal mengambil data', result.status);

		return result;
	},
};
