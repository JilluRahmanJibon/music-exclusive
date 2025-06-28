import React from "react";
import Button from "../../shared/UI-Kit/Button";
import Link from "next/link";
import Image from "next/image";
import instagramIcon from '../../../public/assets/icons/instagram.png'
import tiktokIcon from "../../../public/assets/icons/tiktok.png";
import youtubeIcon from "../../../public/assets/icons/youtube.png";

const Footer = () => {
	return (
		<footer className="lg:mt-[110px] mt-[100px]  md:h-[380px] h-[368px] flex justify-center items-center max-w-[1560px] mx-auto  bg-cover bg-center footer-bg-mobile md:footer-bg-desktop">
			<div className=" text-center mx-auto">
				<h2 className="uppercase text-[20px] md:text-[40px]">
					Built for Artists <span className="block">Made for Superfans</span>
				</h2>

				{/* Linir gradient */}
				<div className="flex flex-col md:flex-row justify-center items-center gap-[14px] pt-[30px]">
					<Link href={`https://form.typeform.com/to/HH6VA4pP`} target="_blank">
						<Button buttonText="Apply as an Artist" />
					</Link>
					<Link href={`https://form.typeform.com/to/FcBbN0PJ`} target="_blank">
						<Button buttonText="Join as a Fan" />
					</Link>
				</div>

				{/* Social Link */}
				<div className="flex  justify-center items-center gap-[14px] pt-[30px]">
					<Link href={"#"}>
						<Image src={instagramIcon} alt="Instagram" height={50} width={50} />
					</Link>
					<Link href={"#"}>
						<Image src={tiktokIcon} alt="tiktok" height={50} width={50} />
					</Link>
					<Link href={"#"}>
						<Image src={youtubeIcon} alt="youtube" height={50} width={50} />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
