import Image from "next/image";
import ConnectCustomerImage from "@/public/img/connect-customers.webp";
import FeatherIcon from "@/assets/icons/feather.svg";
import EyeIcon from "@/assets/icons/eye.svg";
import SunIcon from "@/assets/icons/sun.svg";
import { connectCustomersInfo } from "@/utils/constants";
import { cn } from "@/utils/utils";

const iconsMap = { 0: <FeatherIcon />, 1: <EyeIcon />, 2: <SunIcon /> };

const SectionFour = () => {
  return (
    <section className="content-layout grid grid-cols-1 py-[3.25rem] max-lg:gap-4 lg:grid-cols-2">
      <div className="flex min-h-[400px] flex-col justify-center max-lg:order-2">
        <div className="w-full max-lg:mx-auto sm:max-w-[493px]">
          <h2 className="text-2xl leading-[38px] md:text-3xl md:leading-[56px] lg:text-4xl lg:leading-[46px]">
            We connect our customers with the best, and help them keep up-and stay open.
          </h2>

          <div className="mt-10 space-y-6">
            {connectCustomersInfo.map((info, index) => (
              <div
                key={info}
                className={cn(
                  "flex h-[68px] items-center gap-3 rounded px-4 shadow-[0_4px_32px_0_#00000014] sm:px-5",
                  index === 0 ? "bg-primary text-white" : "bg-white text-black"
                )}
              >
                {iconsMap[index as keyof typeof iconsMap]}
                <p className="font-open-sans text-sm leading-[28px] sm:text-base sm:leading-[32px]">{info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex min-h-[400px] justify-center max-lg:order-1">
        <Image
          src={ConnectCustomerImage}
          alt="customer stat"
          className="w-full sm:max-lg:w-[65%] lg:max-w-[404px] xl:max-w-[444px]"
        />
      </div>
    </section>
  );
};

export default SectionFour;
