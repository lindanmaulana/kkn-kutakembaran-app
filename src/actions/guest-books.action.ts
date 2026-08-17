'use server';

import { errorHandler } from '@/lib/helpers/error-handler.helper';
import { guestBooksService } from '@/app/api/_lib/services/guest-books.service';
import { guestBookCreateSchema, TypeGuestBookCreateSchema } from '@/app/epilogue/_schemas/guest-book.chema';
import { GuestBooks } from '@/app/epilogue/_types/guest-books.type';

export const createGuestBooks = async (req: TypeGuestBookCreateSchema): Promise<GuestBooks> => {
	const validatedFields = guestBookCreateSchema.safeParse(req);

	if (!validatedFields.success) throw new Error('Validation Invalid!');

	try {
		const result = await guestBooksService.create(validatedFields.data);

		return result;
	} catch (err) {
		const message = errorHandler(err);

        console.error({message, err})

		throw new Error(message);
	}
};
