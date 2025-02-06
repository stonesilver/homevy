import { ourServices } from "@/utils/constants";
import BlogAndServicesSection from "./blog-and-services-section";
import FeatureCard from "./feature-card";

const SectionTwo = () => {
  return (
    <BlogAndServicesSection title="Our Services" desc="Handshake infographic mass market crowdfunding iteration.">
      {ourServices.map(({ title, img, description, href }, index) => (
        <FeatureCard key={title + index} title={title} img={img} description={description} href={href} />
      ))}
    </BlogAndServicesSection>
  );
};

export default SectionTwo;
