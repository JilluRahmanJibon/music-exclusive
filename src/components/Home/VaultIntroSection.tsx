import Image from "next/image";
import Button from "@/shared/UI-Kit/Button";
// desktop images
import bg1 from "../../../public/assets/images/vaultEntry-desktop.png"; // h-[774px]
import bg2 from "../../../public/assets/images/section-gif.gif"; // h-[286px]
import bg3 from "../../../public/assets/images/gif2.gif"; // h-[144px]
import bg4 from "../../../public/assets/images/vaultInto-desktop.png"; // h-[562px]
import lockIcon from "../../../public/assets/icons/lock.svg";
// mobile images
import vaultEntryMobile from "../../../public/assets/images/vaultEntry-mobile.png"; //bg1
import vaultIntroMobile from "../../../public/assets/images/vaultInto-mobile.png"; //bg4
import boxShadow from "../../../public/assets/images/message-box-shadow.svg";
import Link from "next/link";

const VaultIntroSection = () => {
	return (
		<div className="relative lg:h-[1140px] h-[960px]   w-full  overflow-hidden lg:mt-[185px] mt-[80px] select-none">
			{/* Content Over Image (responsive) */}
			<div className=" font-helvetica lg:absolute  left-1/2 lg:-translate-x-1/2 z-50 w-full max-w-[1132px] lg:px-0 px-4">
				<div className="text-center text-white">
					<div className="relative inline-block px-4 lg:px-6 py-2 lg:py-4 text-white text-[20px] lg:text-[50px] font-[Orbitron] font-normal rounded-md overflow-hidden">
						<span className="relative z-10 font-bold uppercase">
							The Vault Is Coming
						</span>

						{/* Top border */}
						<div
							className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#6650FF] via-[#FC6D54] to-[#8BAAFF00] rounded-tl-md 
                  w-[211px] lg:w-[388px]"></div>

						{/* Left border */}
						<div
							className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-[#6650FF] via-[#6650FF] to-[#8BAAFF00] rounded-tl-md 
                  h-[34px] lg:h-[48px]"></div>

						{/* Bottom border */}
						<div
							className="absolute bottom-0 right-0 h-[2px] bg-gradient-to-l from-[#9B43FF] via-[#001BFF] to-[#8BAAFF00] rounded-br-md 
                  w-[211px] lg:w-[388px]"></div>

						{/* Right border */}
						<div
							className="absolute bottom-0 right-0 w-[2px] bg-gradient-to-t from-[#9B43FF] via-[#9B43FF] to-[#8BAAFF00] rounded-br-md 
                  h-[34px] lg:h-[48px]"></div>
					</div>

					<div className="md:px-0 px-[30px] ">
						<h2 className="lg:text-[34.24px] text-[16px] uppercase  font-[400] lg:pt-[25px] pt-[8px]">
							A portal to unreleased music, powered by fan engagement{" "}
							<br className="lg:block hidden" /> and artist independence.{" "}
							<br className="lg:block hidden" />
							<span className="text-[#C7C7C7E5] font-[200]">
								Right now, it’s locked — but your journey starts here.
							</span>
						</h2>

						<p className="lg:text-[20px] text-[14px]	lg:pt-[18px] pt-[12px]">
							Sign up to be first in line when it opens.
						</p>
						<div className="lg:hidden pt-[28px] flex flex-col gap-[14px] justify-center items-center">
							<div className="relative w-fit">
								<Image src={boxShadow} alt="message" />

								<p
									className="absolute top-[40%] left-1/2 -translate-x-[40%] -translate-y-1/2 
                 text-[12px] font-[400] text-white text-center whitespace-nowrap">
									“User123 just unlocked exclusive music!”
								</p>
							</div>
							<div className="relative w-fit">
								<Image src={boxShadow} alt="message" />

								<p
									className="absolute top-[40%] left-1/2 -translate-x-[40%] -translate-y-1/2 
                 text-[12px] font-[400] text-white text-center whitespace-nowrap">
									“User456 just earned a special badge!”
								</p>
							</div>
							<div className="relative w-fit">
								<Image src={boxShadow} alt="message" />

								<p
									className="absolute top-[40%] left-1/2 -translate-x-[40%] -translate-y-1/2 
                 text-[12px] font-[400] text-white text-center whitespace-nowrap">
									“User789 just dropped a new remix!”
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Layered image section */}
			<div className="relative lg:w-[1589px] lg:mt-[80px]  lg:h-auto h-[520px] lg:top-[53%] lg:-translate-y-[44%] -translate-y-[10%]  left-1/2 -translate-x-1/2">
				{/* Base Image */}
				<Image
					src={bg1}
					alt="Vault Base"
					height={774}
					className="select-none hidden md:block absolute object-cover  w-full lg:h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
					priority
				/>
				<Image
					src={vaultEntryMobile}
					alt="Vault Base"
					height={418}
					className="md:hidden  absolute object-cover h-[418px] w-[375px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
					priority
				/>

				{/* gif1 */}
				<Image
					src={bg2}
					alt="Vault Animation"
					height={286}
					className="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mix-blend-screen"
				/>

				{/* gif2 */}
				<Image
					src={bg3}
					alt="Vault Ring"
					height={286}
					className="lg:w-[295px] lg:h-[286px] w-[152px] h-[147px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-20 mix-blend-screen pointer-events-none"
				/>

				{/* Lock Icon */}
				<Image
					src={lockIcon}
					alt="Lock Icon"
					height={43}
					className="absolute  top-1/2 left-1/2 border border-white rounded-full -translate-x-1/2 -translate-y-1/2 z-30"
				/>

				{/* Top Glow */}
				<Image
					src={bg4}
					alt="Top Glow"
					className="lg:block hidden absolute   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
				/>
				<Image
					src={vaultIntroMobile}
					alt="Top Glow"
					className="lg:hidden absolute   w-[360px] h-[276px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
				/>
			</div>

			{/* Button Section */}
			<div className="absolute  bottom-0 left-1/2 -translate-x-1/2 lg:-translate-y-1/2    z-40 flex sm:flex-row flex-col gap-[14px]  ">
				<Link href={`https://form.typeform.com/to/HH6VA4pP`} target="_blank">
					<Button buttonText="APPLY AS AN ARTIST" />
				</Link>
				<Link href={`https://form.typeform.com/to/FcBbN0PJ`} target="_blank">
					<Button buttonText="JOIN AS A FAN" />
				</Link>
			</div>
		</div>
	);
};

export default VaultIntroSection;
