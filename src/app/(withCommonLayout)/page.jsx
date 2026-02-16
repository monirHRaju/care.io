import Container from "@/components/shared/Container";
import HeroSlider from "@/components/shared/home/HeroSlider";
import AvailableCaregivers from "@/components/shared/home/AvailableCaregivers";


export default function Home() {
  return (
    <div className="py-7">
      <HeroSlider />
      <Container>
         <AvailableCaregivers />
      </Container>
    </div>
  );
}
