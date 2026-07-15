import { VISION_MISSION_DATA } from './const/visi-misi-data';

const VisionMissionPage = () => {
	return (
		<>
			<section className="py-4 md:py-10 bg-gray-50/50 border-b">
				<div className="max-w-7xl mx-auto px-4 space-y-12">
					<div className="space-y-2">
						<div className="text-lg font-semibold tracking-tight text-black/70">
							Visi & Misi KKN Kolaboratif
						</div>
						<h2 className="text-3xl font-bold">
							<span className="text-kutakembaran-gold">Gerakan Pengabdian:</span> Mewujudkan Desa Sehat,
							Cerdas, & Mandiri
						</h2>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'> 
						{VISION_MISSION_DATA.map((visi) => (
							<article key={visi.id} className="space-y-4 bg-white rounded-xl shadow p-4">
								<div className='border rounded-xl w-fit p-3'>
                                    <visi.icon className='size-6' />
                                </div>

								<h3 className='text-lg font-semibold'>{visi.title} <span className='text-base font-normal text-black/70 '>{visi.description}</span></h3>
							</article>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default VisionMissionPage;
