"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 h-[95px] px-[180px] transition-colors duration-300 ${
				isScrolled ? "bg-black/10 backdrop-blur-md" : "bg-transparent"
			}`}>
			<div className="w-11/12 max-w-[1440px] mx-auto flex items-center justify-between text-sm md:text-base relative h-full">
				{/* Left nav links */}
				<div className="flex gap-4 lg:gap-6 xl:gap-10 whitespace-nowrap z-10">
					<Link href="#">Home</Link>
					<Link href="#">How It Works</Link>
					<Link href="#">For Artists</Link>
					<Link href="#">For Fans</Link>
				</div>

				{/* Center logo */}
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
					<Link href="/">
						<Image
							src="/assets/logo.png"
							alt="Logo"
							width={83}
							height={59}
							className="block"
						/>
					</Link>
				</div>

				{/* Right Join button */}
				<div className="z-10">
					<button className="bg-[#E4E3E9] px-5 py-2 md:px-6 md:py-3 rounded-xl text-black cursor-pointer active:scale-95 transition-transform text-sm md:text-base">
						Join Now
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Header;
