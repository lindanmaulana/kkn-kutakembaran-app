import { NextRequest, NextResponse } from 'next/server';
import { guestBooksService } from '@/app/api/_lib/services/guest-books.service';
import { customAPIErrorNextResponse } from '@/lib/helpers/custom-api-error-next.helper';

export const GET = async (req: NextRequest) => {
	try {
		const result = await guestBooksService.getAll();

		return NextResponse.json(result);
	} catch (err) {
		const error = customAPIErrorNextResponse(err);

		return NextResponse.json({ error: error.message }, { status: error.statusCode });
	}
};
