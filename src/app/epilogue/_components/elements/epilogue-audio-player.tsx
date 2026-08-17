import { AudioPlayer } from "@/components/elements/audio-player";

export const EpilogueAudioPlayer = () => {
	return (
		<div className="bg-black">
			<AudioPlayer source="/assets/audios/tulus-nala.mp3" type="audio/mpeg" />
		</div>
	);
};
