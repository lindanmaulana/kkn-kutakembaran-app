'use client';

import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Activity, useState } from 'react';

export const FloatingAction = () => {
	const [isShow, setIsShow] = useState(true);

	const handleClose = () => {
		setIsShow(false);
	};

	return (
		<div className="fixed bottom-10 right-10 z-50 flex flex-col items-end gap-1">
			<Activity mode={isShow ? 'visible' : 'hidden'}>
				<div className="w-fit flex items-center bg-kutakembaran-blue px-4 py-1 gap-2 rounded-xl text-kutakembaran-white">
					<p className="text-sm">Butuh Bantuan?</p>
					<Button variant={'ghost'} onClick={handleClose} className="p-0 hover:bg-transparent hover:text-kutakembaran-white/50 cursor-pointer">
						<X />
					</Button>
				</div>
			</Activity>
			<a href="https://wa.me/6283823026580">
				<Image
					src={'/assets/icons/whatsapp-icon.png'}
					width={10}
					height={10}
					alt="Whatsapp"
					className="size-10"
					unoptimized
				/>
			</a>
		</div>
	);
};
