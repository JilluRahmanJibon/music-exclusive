import Image from "next/image";
import portalImage from "../../../public/assets/images/portal-desktop.png";
import tickIcon from "../../../public/assets/icons/tick.svg";
import gif from "../../../public/assets/images/section-gif.gif";
import Button from "@/shared/UI-Kit/Button";
import portalMobile from "../../../public/assets/images/portal-mobile.png";
import Link from "next/link";

const checklist = [
	"Earn up to $0.115 per stream — the highest in the industry",
	"Launch exclusively for 3 weeks before DSP release on Spotify or Apple",
	"Additional revenue streams $$",
	"Instant payouts",
	"Get discovered through superfans, not ads",
	"Monetize live sessions, VIP drops, and fan experiences",
	"Stay independent: You own your content and your income.",
];

const ArtistSection = () => {
	return (
		<div id="ForArtist">
			<div className="w-full h-full lg:mt-[215px] mt-[80px]">
				<div className="relative">
					<div className="relative ml-auto h-full max-w-[1740px] text-white">
						{/* Header Title */}
						<div className="lg:absolute top-0 z-50 px-[20px] lg:px-0">
							<div className="relative inline-block   w-[259px] rounded-md sm:w-auto px-2 lg:px-6 py-2 lg:py-4 text-white text-[20px] lg:text-[50px] font-[Orbitron] font-normal overflow-hidden">
								<span className="relative z-10 font-bold uppercase">
									Artist: Why <br className="sm:hidden" /> Music Exclusive?
								</span>

								{/* Borders */}
								<div className="absolute top-0 left-0 h-[2px] w-[211px] lg:w-[388px] bg-gradient-to-r from-[#6650FF] via-[#FC6D54] to-[#8BAAFF00]" />
								<div className="absolute top-0 left-0 w-[2px] h-[34px] lg:h-[48px] bg-gradient-to-b from-[#6650FF] via-[#6650FF] to-[#8BAAFF00]" />
								<div className="absolute bottom-0 right-0 h-[2px] w-[211px] lg:w-[388px] bg-gradient-to-l from-[#9B43FF] via-[#001BFF] to-[#8BAAFF00]" />
								<div className="absolute bottom-0 right-0 w-[2px] h-[34px] lg:h-[48px] bg-gradient-to-t from-[#9B43FF] via-[#9B43FF] to-[#8BAAFF00]" />
							</div>

							<h2 className="pt-[25px] text-[16px] lg:text-[34px] font-[400] uppercase">
								Get Paid More. Reach Fans First.{" "}
								<span className="text-[#C7C7C7E5]">
									Drop your <br className="hidden lg:block" /> music before the
									world hears it — and <br className="hidden lg:block" /> earn
									what you deserve.
								</span>
							</h2>
						</div>

						{/* Main Content */}
						<div className="lg:pt-[250px] flex h-full w-full flex-col lg:flex-row justify-between items-center gap-10 ">
							{/* Left */}
							<div className="w-full lg:w-[638px] px-[20px] lg:px-0">
								<ul className=" mt-6 space-y-[21px]">
									{checklist.map((item, index) => (
										<li key={index} className="flex items-start gap-[23px]">
											<Image
												src={tickIcon}
												alt="check"
												className="w-[30px] lg:w-[57px] h-[35px]"
											/>
											<span className="text-[14px] uppercase font-actor   lg:text-[22px] font-[400]">
												{item}
											</span>
										</li>
									))}
								</ul>
							</div>

							{/* Right */}
							<div className="relative lg:w-[1073px] lg:h-[715px]  w-full h-full  lg:top-0 top-[-70px] overflow-hidden flex justify-center items-center  ">
								{/* Desktop Image */}
								<Image
									src={portalImage}
									alt="Vault Base"
									width={1064}
									height={913}
									className="hidden h-full w-full sm:block object-cover z-0"
									priority
								/>
								<div className="w-[375px] sm:hidden h-[509px] overflow-hidden relative">
									<Image
										src={portalMobile}
										alt="Vault Base"
										width={964}
										height={509}
										className="absolute left-1/2 -translate-x-1/2 w-[964px] h-[509px] object-cover z-0"
										priority
									/>
								</div>

								{/* GIF Overlay */}
								<Image
									src={gif}
									alt="Vault Animation"
									height={286}
									className="lg:w-[403px] lg:h-[393px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mix-blend-screen"
								/>

								{/* Center Button */}
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
									<Link
										href={`https://form.typeform.com/to/HH6VA4pP`}
										target="_blank">
										<Button
											className="lg:w-[219px] lg:h-[50px] h-[44px] w-full "
											buttonText="Apply To Be Featured"
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
					{/* Bottom Buttons */}
					<div className=" absolute bottom-0 left-1/2 -translate-x-1/2 lg:static lg:bottom-auto lg:left-auto lg:translate-x-0 lg:pt-[15px]   z-40 flex sm:flex-row flex-col justify-center items-center gap-[14px]  ">
						<Link
							href={`https://form.typeform.com/to/HH6VA4pP`}
							target="_blank">
							<Button buttonText="APPLY AS AN ARTIST" />
						</Link>
						<Link
							href={`https://form.typeform.com/to/FcBbN0PJ`}
							target="_blank">
							<Button buttonText="JOIN AS A FAN" />
						</Link>
					</div>
				</div>
				<div className="lg:pt-[95px] pt-[60px]">
					<div className="flex items-center justify-center gap-6">
						<div className="relative  rounded-2xl p-[2px] bg-transparent overflow-hidden">
							{/* 🔥 Top-right Glow as Border */}
							<div className="absolute top-0 right-0  h-[148px] bg-gradient-to-l   from-[#9FA9FF] via-[#D9A8FF40] to-[#D9A8FF40] blur-[30px]  rounded-full -translate-x-1 -translate-y-1/2 z-0" />
							<div className="absolute top-0 right-0 lg:w-[978px] w-[250px] h-[148px] bg-gradient-to-l   from-[#9FA9FF] via-[#D9A8FF40] to-[#D9A8FF40] blur-[30px]  rounded-full -translate-x-1 -translate-y-1/2 z-0" />

							{/* 🔥 Bottom-left Glow as Border */}
							<div className="absolute top-0 left-0 lg:w-[1578px] w-[785px] h-[148px] bg-gradient-to-l from-[#9FA9FF] via-[#D9A8FF40] to-[#D9A8FF40] blur-[30px]  rounded-full -translate-x-1/2 translate-y-3/4 z-0" />

							{/* Main Inner Content */}
							<div className="relative z-10  w-[335px] md:w-[1078px] sm:w-auto  md:h-[148px] h-[108px]  bg-[rgba(13,13,13,1)] rounded-2xl px-[20px]  flex items-center justify-center text-white text-center">
								{/* Inner glow top-left */}
								<div className="absolute w-[120px] h-[57px] bg-[#A03ECD] blur-[15px] opacity-60 top-0 left-0 -translate-x-1/2 translate-y-8 z-0 rounded-full"></div>

								{/* Inner glow bottom-right */}
								<div className="absolute w-[77px] h-[68px] bg-[#4859C7] blur-[35px] bottom-0 right-0 translate-x-5 translate-y-4 z-0 rounded-full"></div>

								{/* Heading */}
								<h2 className="text-[20px] md:text-[40px] font-actor font-[400] uppercase ">
									500,000 streams on Music Exclusive = $57,500💰
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArtistSection;
