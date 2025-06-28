"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import logo from "../../../public/assets/images/logo.png";
const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-[100] xl:h-[95px] xl:py-0 py-[10px] transition-colors duration-300 ${
				isScrolled ? "bg-black/10 backdrop-blur-md" : "bg-transparent"
			}`}>
			<div className="w-full  h-full px-[20px] xl:px-[180px] flex items-center justify-between relative">
				{/* Left (Nav Links on md+, Hamburger on mobile) */}
				<div className="flex items-center z-10">
					{/* Hamburger (Mobile Only) */}
					<div className="xl:hidden">
						<button onClick={() => setIsMenuOpen(prev => !prev)}>
							{isMenuOpen ? (
								<span className="text-white text-xl">×</span>
							) : (
								<Image
									height={24}
									width={24}
									alt="menu"
									src="/assets/icons/menu-icon.png"
									className="w-[24px] h-[24px]"
								/>
							)}
						</button>
					</div>

					{/* Nav Links (Desktop Only) */}
					<div className="pt-[20px] hidden xl:flex gap-4 lg:gap-[57px] whitespace-nowrap">
						<ScrollLink
							className="cursor-pointer"
							to="Home"
							smooth={true}
							duration={500}
							offset={-70}>
							Home
						</ScrollLink>
						<ScrollLink
							className="cursor-pointer"
							to="HowItsWork"
							smooth={true}
							duration={500}
							offset={-70}>
							How It Works
						</ScrollLink>
						<ScrollLink
							className="cursor-pointer"
							to="ForArtist"
							smooth={true}
							duration={500}
							offset={-70}>
							For Artists
						</ScrollLink>
						<ScrollLink
							className="cursor-pointer"
							to="ForFans"
							smooth={true}
							duration={500}
							offset={-70}>
							For Fans
						</ScrollLink>
					</div>
				</div>

				{/* Center Logo */}
				<div className="absolute lg:left-1/2 lg:right-auto right-0 top-[64%] -translate-x-1/2 -translate-y-1/2 z-0">
					<Link href="/">
						<Image
							src={logo}
							alt="Logo"
							width={50}
							height={36}
							className="block xl:w-[78px] xl:h-[57px] w-[50px] h-[36px] "
						/>
					</Link>
				</div>

				{/* Right: Join Now Button */}
				{/* <div className="md:pt-[20px]  z-10">
					<button className="bg-[#E4E3E9] xl:w-[126px] xl:h-[46px] w-[74px] h-[30px] rounded-lg text-black cursor-pointer active:scale-95 transition-transform text-sm xl:text-base">
						Join Now
					</button>
				</div> */}
			</div>

			{/* Mobile Dropdown Menu */}
			{isMenuOpen && (
				<div className="absolute top-[50px] left-0 w-full bg-black/70 text-white flex flex-col items-center gap-4 py-6 xl:hidden z-40">
					<ScrollLink onClick={() => setIsMenuOpen(prev => !prev)}
						className="cursor-pointer"
						to="Home"
						smooth={true}
						duration={500}
						offset={-70}>
						Home
					</ScrollLink>
					<ScrollLink onClick={() => setIsMenuOpen(prev => !prev)}
						className="cursor-pointer"
						to="HowItsWork"
						smooth={true}
						duration={500}
						offset={-70}>
						How It Works
					</ScrollLink>
					<ScrollLink onClick={() => setIsMenuOpen(prev => !prev)}
						className="cursor-pointer"
						to="ForArtist"
						smooth={true}
						duration={500}
						offset={-70}>
						For Artists
					</ScrollLink>
					<ScrollLink onClick={() => setIsMenuOpen(prev => !prev)}
						className="cursor-pointer"
						to="ForFans"
						smooth={true}
						duration={500}
						offset={-70}>
						For Fans
					</ScrollLink>
				</div>
			)}
		</nav>
	);
};

export default Header;
