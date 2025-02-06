import Ellipse from "@/assets/icons/ellipse.svg";
import BoldoIcon from "@/assets/icons/brand-logo-white.svg";
import PrestoIcon from "@/assets/icons/presto.svg";
import DashboardAnalyticsImage from "@/public/img/dashboard-analytics.webp";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-primary max-xl:relative">
      <div className="content-layout pb-14 2xl:relative">
        <Ellipse className="absolute right-0 top-0" />
        <div className="grid grid-cols-1 pt-[10.125rem] lg:grid-cols-2">
          <div className="z-[1] flex flex-col justify-center">
            <div className="w-full max-w-[567px]">
              <h1 className="text-4xl leading-[50px] text-white max-lg:font-medium sm:text-[2.9rem] sm:leading-[66px] xl:text-5xl xl:leading-[72px]">
                Save time by building fast with Boldo Template{" "}
              </h1>
              <p className="mt-4 font-open-sans text-sm leading-[28px] text-[#f1f1f1] md:text-base">
                Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator
                success deployment non-disclosure.
              </p>

              <div className="mt-10 flex flex-wrap gap-6">
                <Link href="#" className="button-secondary ring-2 ring-secondary max-md:flex-1">
                  Buy template
                </Link>
                <Link href="#" className="button-primary ring-2 ring-white">
                  Explore
                </Link>
              </div>
            </div>
          </div>

          <div className="z-[1] max-lg:hidden">
            <Image
              src={DashboardAnalyticsImage}
              alt="dashboard analytics"
              priority
              className="ml-auto block h-auto lg:max-w-[350px] xl:max-w-[493px]"
            />
          </div>
        </div>

        <div className="marquee-wrapper relative mt-14 overflow-x-hidden">
          <div className="marquee-content flex h-[93px] flex-nowrap items-center gap-10">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((icon) => (
              <div key={icon} className="flex flex-nowrap items-center gap-10">
                <BoldoIcon />
                <PrestoIcon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
