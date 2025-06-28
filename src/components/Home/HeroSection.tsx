"use client";
import Button from "@/shared/UI-Kit/Button";
import Link from "next/link";
import micIcon from "../../../public/assets/icons/mic.svg";
import mutedIcon from "../../../public/assets/icons/muted.svg";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [muted, setMuted] = useState(true);
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.muted = true;
			const playPromise = videoRef.current.play();

			if (playPromise !== undefined) {
				playPromise
					.then(() => {
						console.log("Video started playing");
					})
					.catch(error => {
						console.error("Autoplay prevented:", error);
					});
			}
		}
	}, []);
	const toggleMute = () => {
		const video = videoRef.current;
		if (video) {
			video.muted = !video.muted;
			setMuted(!muted);
		}
	};

	return (
		<div id="Home" className="relative w-full">
			{/* Desktop: Fullscreen */}
			<div className="hidden md:block ">
				{" "}
				<div className="relative  h-[1080px]  w-full">
					<video
						ref={videoRef}
						autoPlay
						muted
						loop
						playsInline
						className="absolute inset-0 w-full h-full object-cover z-0">
						<source src="/assets/videos/desktop-hero.webm" type="video/webm" />
						<source src="/assets/videos/desktop-hero.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>

					{/* Overlay */}
					<div className="absolute inset-x-0 bottom-0 h-[310px] bg-gradient-to-t from-black/90 to-transparent z-10" />

					{/* Content on top of video */}
					<div className="font-helvetica absolute  bottom-14 left-1/2 -translate-x-1/2 text-white z-20 w-full ">
						<div className="w-[831px]  h-[206px] mx-auto border border-[#E1E1E13B]  py-[30px]  rounded-2xl backdrop-blur-2xl  bg-transparent">
							<h2 className="font-[400] pl-[123px] uppercase text-[32px] tracking-[0]">
								Step Into the Future of Music: <br />
								<span className="text-[#C7C7C7E5] font-normal ">
									Where exclusivity meets discovery.
								</span>
							</h2>

							<p className="text-[20px] text-center font-[300] pt-[18px]">
								Built for artists. Made for Superfans.
							</p>
						</div>

						<div className="flex flex-row gap-[14px] items-center justify-center mt-[31px]">
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
							<button
								onClick={toggleMute}
								className={` w-[66px] h-[66px] rounded-full`}>
								{muted ? (
									<Image
										src={mutedIcon}
										alt="mic icon"
										height={50}
										width={50}
									/>
								) : (
									<Image src={micIcon} alt="mic icon" height={50} width={50} />
								)}
							</button>
						</div>
					</div>
				</div>
				<h1 className="uppercase text-center text-[89px] font-orbitron  font-bold text-[#C7C7C7E5]">
					<span
						style={{
							background:
								"linear-gradient(257.62deg, #06FBA3 0.36%, #D9A8FF 85.64%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}>
						Music
					</span>{" "}
					Exclusive
				</h1>
			</div>

			{/* Mobile: Video + Scrollable Content */}
			<div className="block md:hidden w-full">
				{/* Mobile video */}
				<div className="relative">
					<video
						ref={videoRef}
						autoPlay
						muted
						loop
						playsInline
						className="w-full h-[635px] object-cover">
						<source src="/assets/videos/mobile-hero.mp4" type="video/mp4" />
						<source src="/assets/videos/mobile-hero.webm" type="video/webm" />
						Your browser does not support the video tag.
					</video>

					<button
						onClick={toggleMute}
						className={` w-[66px] h-[66px] rounded-full absolute bottom-4 right-4`}>
						{muted ? (
							<Image src={mutedIcon} alt="mic icon" height={50} width={50} />
						) : (
							<Image src={micIcon} alt="mic icon" height={50} width={50} />
						)}
					</button>
				</div>

				{/* Content below video */}
				<div className="pt-[55px]">
					<h1 className="uppercase text-center text-[24px] font-orbitron  font-bold text-[#C7C7C7E5]">
						<span
							style={{
								background:
									"linear-gradient(257.62deg, #06FBA3 0.36%, #D9A8FF 85.64%)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}>
							Music
						</span>{" "}
						Exclusive
					</h1>

					<div className="px-[20px] pt-[25px]   text-white">
						<div className=" font-helvetica border border-[#E1E1E13B] py-[26px]   rounded-2xl backdrop-blur-md text-center bg-black/20">
							<h2 className=" text-[20px] uppercase px-[50px] ">
								Step Into the Future of Music: <br />
								<span className="text-[#C7C7C7E5] ">
									Where exclusivity meets discovery.
								</span>
							</h2>
							<p className="text-[16px] whitespace-nowrap  mt-2">
								Built for artists. Made for Superfans.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-[14px] items-center justify-center mt-[24px]">
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
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
