'use client';

import { AudioLines, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';

interface AudioPlayerProps {
	source: string;
	type: string;
}

export const AudioPlayer = ({ source, type }: AudioPlayerProps) => {
	const [isPlay, setIsPlay] = useState<boolean>(true);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const toggleAudio = (e: React.MouseEvent) => {
		e.stopPropagation();

		const audio = audioRef.current;
		if (!audio) return;

		if (isPlay) {
			audio.pause();
			setIsPlay(false);
		} else {
			audio.play().catch(() => {});
			setIsPlay(true);
		}
	};

	useEffect(() => {
		const audio = audioRef.current;

		if (!audio) return;

		const startAudio = () => {
			audio
				.play()
				.then(() => {
					setIsPlay(true);
					removeInteractionListeners();
				})
				.catch(() => {
					setIsPlay(false);
				});
		};

		const handleFirstInteraction = () => {
			startAudio();
		};

		const removeInteractionListeners = () => {
			window.removeEventListener('click', handleFirstInteraction);
			window.removeEventListener('touchstart', handleFirstInteraction);
			window.removeEventListener('keydown', handleFirstInteraction);
		};

		window.addEventListener('click', handleFirstInteraction, { once: true });
		window.addEventListener('touchstart', handleFirstInteraction, { once: true });
		window.addEventListener('keydown', handleFirstInteraction, { once: true });

		startAudio();

		return () => {
			removeInteractionListeners();
		};
	}, []);

	return (
		<div className="p-4">
			<audio ref={audioRef} controls loop preload="metadata" className="w-full max-w-md hidden">
				<source src={source} type={type} onEnded={() => setIsPlay(false)} />
				Browser Anda tidak mendukung elemen audio.
			</audio>

			<Button
				variant="outline"
				size="icon"
				onClick={toggleAudio}
				className="fixed bottom-10 left-12 cursor-pointer z-50 size-11 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-lg hover:shadow-xl shadow-slate-900/5 hover:scale-105 active:scale-95 transition-all duration-300 group"
				aria-label={isPlay ? 'Pause Audio' : 'Play Audio'}
			>
				{isPlay ? (
					<AudioLines className="size-5 text-blue-600 dark:text-blue-400 animate-pulse transition-transform" />
				) : (
					<VolumeX className="size-5 text-slate-500 transition-transform" />
				)}
			</Button>
		</div>
	);
};
