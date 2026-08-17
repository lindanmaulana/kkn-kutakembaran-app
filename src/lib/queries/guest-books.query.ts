import { queryOptions } from '@tanstack/react-query';
import { GuestBooksService } from '@/lib/services/guest-books.service';

export const guestBooksQuery = {
	getAll: queryOptions({
		queryKey: ['getAllGuestBooks'],
		queryFn: () => GuestBooksService.getAll(),
		staleTime: 1 * 60 * 60 * 1000,
	}),
};
