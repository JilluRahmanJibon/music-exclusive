"use client";
import Image from "next/image";
import next from "../../../public/assets/icons/next.svg";
import prev from "../../../public/assets/icons/prev.svg";

const NextPrevBtn = () => {
	return (
		<div className="absolute top-1/2 left-0 right-0 z-20 flex justify-between -translate-y-1/2">
			{/* Prev Button */}
			<div id="PrevBtn" className="cursor-pointer">
				<Image alt="prev" src={prev} />
			</div>

			{/* Next Button */}
			<div id="NextBtn" className="cursor-pointer">
				<Image alt="next" src={next} />
			</div>
		</div>
	);
};

export default NextPrevBtn;
