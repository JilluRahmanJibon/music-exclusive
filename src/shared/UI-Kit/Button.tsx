import React from "react";

interface GradientButtonProps {
	buttonText: string;
	onClick?: () => void;
	className?: string;
}

const Button: React.FC<GradientButtonProps> = ({
	buttonText,
	onClick,
	className = "w-[266px] h-[66px]",
}) => {
	return (
		<button
			onClick={onClick}
			className={`
                relative rounded-full  group transition-all duration-300 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-[#A9CBFE] focus:ring-opacity-75
                ${className} 
            `}
			style={{
				borderImage:
					"linear-gradient(90deg, rgba(153, 153, 153, 0) 0%, #A9CBFE 48.64%, rgba(255, 255, 255, 0) 100%) 1",
			}}>
			<span
				className="
                  
                    w-full h-full relative block
                    
                    bg-gradient-to-bl from-[#1A0A3A] to-[#0A0A2A]  
                    
               rounded-full border-t border-b

                    flex items-center justify-center text-white text-lg font-bold
                    
                    transition-all duration-300 ease-in-out
                    
                    group-hover:from-[#2A0050] group-hover:to-[#1A002A] 
                ">
				{buttonText}
			</span>
		</button>
	);
};

export default Button;
