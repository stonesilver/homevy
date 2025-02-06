import HeroSection from "@/components/home/hero-section";
import SectionTwo from "@/components/home/section-two";
import SectionThree from "@/components/home/section-three";
import SectionFour from "@/components/home/section-four";
import SectionFive from "@/components/home/section-five";
import SectionSix from "@/components/home/section-six";
import SectionSeven from "@/components/home/section-seven";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const Home = () => {
  return (
    <>
      <Header className="absolute left-1/2 top-10 -translate-x-1/2 lg:top-14" />

      <main className="flex-1">
        <HeroSection />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
      </main>

      <Footer />
    </>
  );
};

export default Home;
