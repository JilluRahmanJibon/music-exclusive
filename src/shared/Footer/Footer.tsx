import React from "react";
import Button from "../../shared/UI-Kit/Button";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="lg:mt-[110px] mt-[100px]  md:h-[380px] h-[368px] flex justify-center items-center max-w-[1560px] mx-auto  bg-cover bg-center footer-bg-mobile md:footer-bg-desktop">
			<div className=" text-center mx-auto">
				<h2 className="uppercase text-[20px] md:text-[40px]">
					Built for Artists <span className="block">Made for Superfans</span>
				</h2>

				{/* Linir gradient */}
				<div className="flex flex-col md:flex-row justify-center items-center gap-[14px] pt-[30px]">
					<Button
						className="md:w-[266px] md:h-[66px] w-[198px] h-[44px]"
						buttonText={"Apply as an Artist"}
					/>
					<Button
						className="md:w-[266px] md:h-[66px] w-[198px] h-[44px]"
						buttonText={"Join as a Fan"}
					/>
				</div>

				{/* Social Link */}
				<div className="flex  justify-center items-center gap-[14px] pt-[30px]">
					<Link href={"#"}>
						<Image
							src={"/assets/icons/instagram.png"}
							alt="Instagram"
							height={50}
							width={50}
						/>
					</Link>
					<Link href={"#"}>
						<Image
							src={"/assets/icons/tiktok.png"}
							alt="Instagram"
							height={50}
							width={50}
						/>
					</Link>
					<Link href={"#"}>
						<Image
							src={"/assets/icons/youtube.png"}
							alt="Instagram"
							height={50}
							width={50}
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
