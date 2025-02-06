import Image from "next/image";
import WorkspaceImage from "@/public/img/workspace.webp";
import Collapsible from "../shared/collapsible";

const SectionSix = () => {
  return (
    <section className="content-layout py-[5.25rem]">
      <div className="h-[403px] overflow-hidden rounded-3xl">
        <Image
          src={WorkspaceImage}
          alt="workspace | workstation"
          className="h-full w-full object-cover max-lg:object-left"
        />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-[6.25rem]">
        <p className="text-2xl leading-[38px] md:text-3xl md:leading-[56px] lg:text-4xl lg:leading-[46px]">
          We connect our customers with the best, and help them keep up-and stay open.
        </p>
        <div className="space-y-8">
          <Collapsible title="We connect our customers with the best?">
            <p className="">
              We connect our customers with the best by carefully curating top-quality products, services, and expert
              solutions tailored to their unique needs, ensuring a seamless and exceptional experience every time.
            </p>
          </Collapsible>

          <Collapsible title="Android research & development rockstar? ">
            <p className="">
              Looking for an Android research and development rockstar? Our expert team specializes in creating
              cutting-edge, innovative Android solutions that push the boundaries of technology and deliver exceptional
              results.
            </p>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
