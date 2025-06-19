import ArtistSection from "@/components/Home/ArtistSection";
import FansSection from "@/components/Home/FansSection";
import FutureSoundSection from "@/components/Home/FutureSoundSection";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import VaultIntroSection from "@/components/Home/VaultIntroSection";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<VaultIntroSection />
			<ArtistSection />
			<FansSection />
			<HowItWorksSection />
			<FutureSoundSection />
		</div>
	);
}
