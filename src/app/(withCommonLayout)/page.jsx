import Container from "@/components/shared/Container";
import HeroSlider from "@/components/shared/home/HeroSlider";
import AvailableCaregivers from "@/components/shared/home/AvailableCaregivers";
import AboutSectionCompact from "@/components/shared/home/AboutSectionCompact";
import OurServices from "@/components/shared/home/OurServices";
import Feedback from "@/components/shared/home/Feedback";
import GetStartedSection from "@/components/shared/home/GetStartedSection";


export default function Home() {
  return (
    <div className="">
      <HeroSlider />
      <AvailableCaregivers />
      <AboutSectionCompact/>
      <OurServices />
      <Feedback />
      <GetStartedSection/>
    </div>
  );
}
