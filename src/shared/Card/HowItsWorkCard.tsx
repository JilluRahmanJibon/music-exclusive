"use client";
import React from "react";
import Image from "next/image";

const HowItsWorkCard = ({ heading, subHeading, image }: any) => {
	return (
		<div className=" flex items-center justify-center gap-6">
			<div className="relative  rounded-2xl p-[2px] bg-transparent overflow-hidden">
				{/* 🔥 Top-right Glow as Border */}
				<div className="absolute top-0 right-0 w-[400px] h-[500px] bg-gradient-to-l   from-[#9FA9FF] via-[#D9A8FF40] to-[#D9A8FF40] blur-[30px]  rounded-full -translate-x-1 -translate-y-1/2 z-0" />
				<div className="absolute top-0 right-0 w-[250px] h-[160px] bg-gradient-to-l   from-[#9FA9FF] via-[#D9A8FF40] to-[#D9A8FF40] blur-[30px]  rounded-full -translate-x-1 -translate-y-1/2 z-0" />

				{/* 🔥 Bottom-left Glow as Border */}
				<div className="absolute top-0 left-0 w-[785px] h-[300px] bg-gradient-to-l from-[#9FA9FF] via-[#D9A8FF40] to-[#D9A8FF40] blur-[30px]  rounded-full -translate-x-1/2 translate-y-3/4 z-0" />

				{/* Main Inner Content */}
				<div className="relative z-10   lg:w-[507px] w-[335px] lg:h-[434px] h-[326px] bg-[rgba(13,13,13,1)] rounded-2xl px-[20px] lg:p-[40px] pb-[30px] pt-[30px] text-white text-center ">
					{/* Inner glow top-left */}
					<div className="absolute w-[120px] h-[57px] bg-[#A03ECD] blur-[15px] opacity-60 top-0 left-0 -translate-x-1/2 translate-y-8 z-0 rounded-full"></div>

					{/* Inner glow bottom-right */}
					<div className="absolute w-[77px] h-[68px] bg-[#4859C7] blur-[35px] bottom-0 right-0 translate-x-5 translate-y-4 z-0 rounded-full"></div>

					{/* Cards Icon */}
					<Image
						src={image}
						alt="Cards Icon"
						height={50}
						width={50}
						className="mx-auto lg:pb-[40px] pb-[30px] md:h-auto md:w-auto"
					/>

					{/* Heading */}
					<h2 className="text-[20px] md:text-[34px] font-semibold pb-[30px]">
						{heading}
					</h2>

					{/* Description */}
					<p className="text-[16px] md:text-[22px] text-gray-300">
						{subHeading}
					</p>
				</div>
			</div>
		</div>
	);
};

export default HowItsWorkCard;
