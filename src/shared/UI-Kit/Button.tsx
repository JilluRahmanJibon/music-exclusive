import React from "react";

interface GradientButtonProps {
	buttonText: string;
	onClick?: () => void;
	className?: string;
}

const Button: React.FC<GradientButtonProps> = ({
	buttonText,
	onClick,
	className = "md:w-[266px] w-[198px] md:h-[66px] h-[44px]",
}) => {
	return (
		<button
			onClick={onClick}
			className={`${className} rounded-full font-helvetica text-white font-semibold text-sm  whitespace-nowrap md:text-base bg-gradient-to-br from-[#1D1B2F] to-[#2E1E5E] shadow-inner shadow-[#302240]/40 border border-transparent cursor-pointer uppercase`}
			style={{
				borderImage:
					"linear-gradient(90deg, rgba(153, 153, 153, 0) 9%, #A9CBFE 48.64%, rgba(255, 255, 255, 0) 95%) 1",
				borderImageSlice: 1,
			}}>
			{buttonText}
		</button>
	);
};

export default Button;
