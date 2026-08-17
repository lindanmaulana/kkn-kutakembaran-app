import { api } from '@/lib/axios-instance';
import { errorHandler } from '@/lib/helpers/error-handler.helper';

export const GuestBooksService = {
	getAll: async () => {
		try {
			const response = await api.get('/guest-books');

			if (response.data.error) throw new Error(response.data.error);

			return response.data;
		} catch (err) {
			const errorMessage = errorHandler(err);

			throw new Error(errorMessage);
		}
	},
};
