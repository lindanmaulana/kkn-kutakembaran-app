import { AxiosError } from 'axios';
import { ZodError } from 'zod';

export const errorHandler = (err: unknown): string => {
	let errorMessage = 'An unexpected error occurred!.';

	if (err instanceof Error) {
		errorMessage = err.message;
	}

	if (err instanceof AxiosError) {
		errorMessage = err.response?.data.error || 'API error occurred!.';
	}

	if (err instanceof ZodError) {
		errorMessage = err.message;
	}

	return errorMessage;
};
