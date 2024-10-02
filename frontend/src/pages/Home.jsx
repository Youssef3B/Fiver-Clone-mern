import Advantages from "../components/Advantages/Advantages";
import Faq from "../components/Faq/Faq";
import Features from "../components/Features/Features";
import Fields from "../components/Fields/Fields";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import JoinUs from "../components/JoinUs/JoinUs";
import MostWanted from "../components/MostWanted/MostWanted";

function Home() {
  return (
    <>
      <HeroSection />
      <MostWanted />
      <Advantages />
      <Features />
      <Fields />
      <Faq />
      <JoinUs />
    </>
  );
}
export default Home;
