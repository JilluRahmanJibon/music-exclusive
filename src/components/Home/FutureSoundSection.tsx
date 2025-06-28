"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import NextPrevBtn from "./NextPrevBtn";
import portalImage from "../../../public/assets/images/future-bg.png";
import gif from "../../../public/assets/images/section-gif.gif";
import Button from "@/shared/UI-Kit/Button";
import portalMobile from "../../../public/assets/images/portal-mobile.png";
import Link from "next/link";
import slider1 from "../../../public/assets/images/slider1.jpg";
import slider2 from "../../../public/assets/images/slider2.png";
import slider3 from "../../../public/assets/images/slider3.jpg";
import slider4 from "../../../public/assets/images/slider4.jpg";
import slider5 from "../../../public/assets/images/slider5.jpg";

const artists = [
	{ name: "LEO NOIR", subName: "EDM", src: slider3 },
	{ name: "ZELINA RAE", subName: "ELECTRO SOUL", src: slider4 },
	{ name: "VAYVEN WEST", subName: "HIP HOP", src: slider5 },
	{ name: "LEO NOIR", subName: "EDM", src: slider3 },
	{ name: "RAY B.", subName: "R&B", src: slider1 },
	{ name: "MIRA NOVA", subName: "INDIE POP", src: slider2 },
	{ name: "MIRA NOVA", subName: "INDIE POP", src: slider2 },
];

export default function FutureSoundSection() {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="relative lg:h-[1477px]   mt-[80px] ">
			{/* content area  */}
			<div className=" relative top-[8%] z-50">
				<div className="     text-center px-[20px] lg:px-0">
					<div className="relative inline-block  sm:w-auto w-[251px] rounded-md md:w-auto px-[10px] lg:px-6 py-2 lg:py-4 text-white text-[20px] lg:text-[50px] font-[Orbitron] font-normal overflow-hidden">
						<span className="relative z-10 font-bold uppercase">
							Meet the Sound of the Future
						</span>

						{/* Borders */}
						<div className="absolute top-0 left-0 h-[2px] w-[211px] lg:w-[388px] bg-gradient-to-r from-[#6650FF] via-[#FC6D54] to-[#8BAAFF00]" />
						<div className="absolute top-0 left-0 w-[2px] h-[34px] lg:h-[48px] bg-gradient-to-b from-[#6650FF] via-[#6650FF] to-[#8BAAFF00]" />
						<div className="absolute bottom-0 right-0 h-[2px] w-[211px] lg:w-[388px] bg-gradient-to-l from-[#9B43FF] via-[#001BFF] to-[#8BAAFF00]" />
						<div className="absolute bottom-0 right-0 w-[2px] h-[34px] lg:h-[48px] bg-gradient-to-t from-[#9B43FF] via-[#9B43FF] to-[#8BAAFF00]" />
					</div>
				</div>
				<div className="max-w-[768px] mx-auto lg:file:px-0 px-4 ">
					<h2 className="pt-[20px] text-center text-[16px] lg:text-[34px] font-[400] uppercase">
						The artists who will shape what’s next. From underground visionaries
						to rising stars — these creators are ready to be heard.
					</h2>
				</div>
			</div>
			{/* overlay image area  */}
			<div className="lg:pt-[30px]">
				<div className="relative mx-auto  max-w-[1127px] lg:h-[697px]  overflow-hidden flex justify-center items-center  ">
					{/* Desktop Image */}
					<Image
						src={portalImage}
						alt="Vault Base"
						className="hidden h-full w-full sm:block object-cover z-0"
						priority
					/>
					<div className="w-[375px] sm:hidden h-[509px] overflow-hidden relative">
						<Image
							src={portalMobile}
							alt="Vault Base"
							className="absolute left-1/2 -translate-x-1/2 w-[964px] h-full object-cover z-0"
							priority
						/>
					</div>

					{/* GIF Overlay */}
					<Image
						src={gif}
						alt="Vault Animation"
						height={286}
						className="absolute rounded-full lg:w-[403px] lg:h-[384px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mix-blend-screen"
					/>

					{/* Center Button */}
					<div className="absolute flex flex-col gap-[16px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
						<Link
							href={`https://form.typeform.com/to/HH6VA4pP`}
							target="_blank">
							<Button
								className="md:w-[198px] w-[181px] md:h-[50px] h-[42px] "
								buttonText="Apply as an Artist"
							/>
						</Link>
						<Link
							href={`https://form.typeform.com/to/FcBbN0PJ`}
							target="_blank">
							<Button
								className="md:w-[198px] w-[181px] md:h-[50px] h-[42px] "
								buttonText="Join as a Fan"
							/>
						</Link>
					</div>
				</div>
			</div>
			{/* slider area  */}
			<div className="lg:h-[401px] h-[291px] relative bottom-[5%]">
				<div className="h-full overflow-hidden text-white lg:px-4 z-50">
					<div className="max-w-[1408px] mx-auto relative h-full">
						<div className="lg:block hidden">
							<NextPrevBtn />
						</div>

						<Swiper
							modules={[Navigation, Autoplay]}
							navigation={{ nextEl: "#NextBtn", prevEl: "#PrevBtn" }}
							loop={true}
							centeredSlides={true}
							slidesPerView={3}
							spaceBetween={40}
							breakpoints={{
								1024: {
									slidesPerView: 5,
								},
								0: {
									slidesPerView: 3,
									spaceBetween: -100,
								},
							}}
							onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
							className="w-full h-full">
							{artists.map((artist, index) => {
								const isActive = index === activeIndex;
								const isPrev =
									index === (activeIndex - 1 + artists.length) % artists.length;
								const isNext = index === (activeIndex + 1) % artists.length;

								return (
									<SwiperSlide key={index}>
										<div className="h-full flex justify-center items-center">
											<div
												className={`transition-all duration-500 ease-in-out
										rounded-[20px] flex flex-col justify-center items-center
										border-2 border-[rgb(225_225_225_/_23%)] bg-[rgb(13_13_13_/_58%)]
										${
											isActive
												? " lg:w-[279px] w-[202px] lg:h-[401px] h-[291px] shadow-2xl z-10"
												: isPrev || isNext
												? "lg:scale-[1] lg:w-[234px] lg:h-[308px] hidden lg:block opacity-90 z-50 p-4"
												: "scale-[0.9] lg:w-[189px] lg:h-[273px] w-[170px] h-[223px]  opacity-70"
										}`}>
												{/* Image and text */}
												<div>
													<div
														className={`relative mb-2 ${
															isActive
																? "lg:w-[209.76px] w-[151px] h-[190px] lg:h-[263px]"
																: isPrev || isNext
																? "lg:w-[200px] lg:block hidden lg:h-[200px]"
																: "lg:w-[141px] lg:h-[165px] w-[144px] h-[151px]"
														}`}>
														<Image
															src={artist.src}
															alt="artist"
															fill
															priority
															className={`transition-all duration-300 object-cover ${
																isActive
																	? "rounded-[27px]"
																	: isPrev || isNext
																	? "rounded-[20px]"
																	: "rounded-[16px]"
															}`}
															sizes={
																isActive
																	? "209px"
																	: isPrev || isNext
																	? "200px"
																	: "141px"
															}
														/>
													</div>
													<h3
														className={`font-bold ${
															isActive
																? "text-[20px] mt-[20px] mb-[10px] text-[#FFFFFF]"
																: isPrev || isNext
																? "text-[20px] mt-[22px] mb-[10px] text-[#FFFFFF]"
																: "text-[16px] mt-[20px] mb-[12px] text-[#FFFFFF]"
														}`}>
														{artist.name}
													</h3>
													<p className="font-bold mb-2 text-[14px] text-[#C2BCBC]">
														{artist.subName}
													</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
}
