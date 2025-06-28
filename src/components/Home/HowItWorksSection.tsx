import React from "react";
import Button from "../../shared/UI-Kit/Button";
import HowItsWorkCard from "@/shared/Card/HowItsWorkCard";
import Link from "next/link";

const HowItWorksSection = () => {
	return (
		<section id="HowItsWork" className=" lg:pt-[215px] pt-[100px] ">
			<div className=" max-w-[978px] mx-auto sm:text-center px-[20px] lg:px-0">
				<div className="relative inline-block    w-[251px] rounded-md sm:w-auto px-[10px] lg:px-6 py-2 lg:py-4 text-white text-[20px] lg:text-[50px] font-[Orbitron] font-normal overflow-hidden">
					<span className="relative z-10 font-bold uppercase">
						How Music Exclusive Works
					</span>

					{/* Borders */}
					<div className="absolute top-0 left-0 h-[2px] w-[211px] lg:w-[388px] bg-gradient-to-r from-[#6650FF] via-[#FC6D54] to-[#8BAAFF00]" />
					<div className="absolute top-0 left-0 w-[2px] h-[34px] lg:h-[48px] bg-gradient-to-b from-[#6650FF] via-[#6650FF] to-[#8BAAFF00]" />
					<div className="absolute bottom-0 right-0 h-[2px] w-[211px] lg:w-[388px] bg-gradient-to-l from-[#9B43FF] via-[#001BFF] to-[#8BAAFF00]" />
					<div className="absolute bottom-0 right-0 w-[2px] h-[34px] lg:h-[48px] bg-gradient-to-t from-[#9B43FF] via-[#9B43FF] to-[#8BAAFF00]" />
				</div>

				<h2 className="pt-[22px] text-[16px] max-w-[824px] mx-auto lg:text-[34px] font-[400] uppercase">
					Get In Early. Stay Ahead. Be the first
					<span className="text-[#C7C7C7E5]">
						to hear what others haven’t — and earn rewards for your support.
					</span>
				</h2>
			</div>
			{/* Cards */}
			<div className="uppercase overflow-hidden flex justify-center items-center flex-col md:flex-row flex-wrap gap-6 pt-[50px] px-[20px] md:px-0">
				<HowItsWorkCard
					heading={"Sign Up Today"}
					subHeading={
						"Choose your path — Artist or Fan — and join our exclusive pre-launch wait list."
					}
					image={"/assets/icons/signup.svg"}
				/>
				<HowItsWorkCard
					heading={"Prepare for the Vault"}
					subHeading={
						"You’ll be the first to know when we go live. Artists get priority features. Fans get early access."
					}
					image={"/assets/icons/vault.svg"}
				/>
				<HowItsWorkCard
					heading={"Unlock a New Era"}
					subHeading={
						"Experience a platform where every stream counts, and every fan truly matters.	"
					}
					image={"/assets/icons/unlock.svg"}
				/>
			</div>

			{/* Button */}
			<div className="flex flex-col sm:flex-row justify-center items-center gap-[14px] pt-[60px]">
				<Link href={`https://form.typeform.com/to/HH6VA4pP`} target="_blank">
					<Button buttonText="APPLY AS AN ARTIST" />
				</Link>
				<Link href={`https://form.typeform.com/to/FcBbN0PJ`} target="_blank">
					<Button buttonText="JOIN AS A FAN" />
				</Link>
			</div>
		</section>
	);
};

export default HowItWorksSection;
