import { IMAGE_DEFAULT } from '@/const/default';
import Image from 'next/image';

export const ProfileCardDefault = () => {
	return (
		<div className="p-5 bg-white rounded-xl shadow space-y-4 border border-gray-100 opacity-75 animate-pulse">
			<figure className="size-60 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
				<Image
					src={IMAGE_DEFAULT}
					width={120}
					height={120}
					alt="Default Avatar"
					loading="lazy"
					unoptimized
					className="w-1/2 h-1/2 object-contain opacity-40"
				/>
			</figure>

			<div className="space-y-2">
				<div className="h-6 w-3/4 bg-gray-200 rounded-md" />
				<div className="h-4 w-1/2 bg-gray-100 rounded-md" />
			</div>
		</div>
	);
};
