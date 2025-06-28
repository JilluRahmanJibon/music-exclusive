// app/layout.tsx
import Header from "@/shared/Header/Header";
import "./globals.css";
import { Orbitron, Actor } from "next/font/google";
import Footer from "@/shared/Footer/Footer";

const orbitron = Orbitron({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-orbitron",
	display: "swap",
});

// Actor font
const actor = Actor({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-actor",
	display: "swap",
});

export const metadata = {
	title: "Music Exclusive",
	description: "Using Orbitron and Helvetica Neue",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${orbitron.variable} ${actor.variable}`}>
			<body>
				<header>
					<Header />
				</header>
				{children}
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
