import Button from "@/shared/UI-Kit/Button";

const HeroSection = () => {
	return (
		<div className="">
			<div className="relative h-screen pt-20 ">
				<video
					autoPlay={true}
					muted
					loop
					playsInline
					className="absolute inset-0 w-full h-full object-cover">
					<source
						src="/assets/bg-videos/desktop-hero.mp4"
						type="video/mp4"
						media="(min-width:1024px)"
					/>
					<source
						src="/video/u-4-joy-lewis-vertical-pr-1_1aaDFDbr.mp4"
						type="video/mp4"
						media="(max-width:1024px)"
					/>
					Your browser does not support the video tag.
				</video>

				{/* Black gradient overlay from bottom */}
				<div className="absolute inset-x-0 bottom-0 h-[310px] bg-gradient-to-t from-black/90 to-transparent z-5"></div>

				<div className="absolute bottom-14 left-1/2 -translate-x-1/2 text-white z-10">
					<div className="max-w-[70ch] border-2 border-[#E1E1E13B] p-7 rounded-2xl backdrop-blur-2xl text-center">
						<h2 className="text-[32px] leading-14">
							Step Into the Future of Music: <br />
							<span className="text-[#C7C7C7E5] font-thin">
								Where exclusivity meets discovery.
							</span>
						</h2>
						<p className="text-xl font-thin leading-7 mt-2">
							Built for artists. Made for Superfans.
						</p>
					</div>

					<div className="flex flex-col md:flex-row gap-[14px] items-center justify-center mt-[31px]">
						{/* APPLY AS AN ARTIST Button */}
						<Button buttonText="APPLY AS AN ARTIST" />

						{/* JOIN AS A FAN Button */}
						<Button buttonText="JOIN AS A FAN" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
