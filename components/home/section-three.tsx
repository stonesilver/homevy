import Image from "next/image";
import CustomerStatImage from "@/public/img/customer-stat.webp";
import CheckIcon from "@/assets/icons/check.svg";
import { customerStatInfo } from "@/utils/constants";
import Link from "next/link";

const SectionThree = () => {
  return (
    <section className="content-layout grid grid-cols-1 py-[2.25rem] max-lg:gap-4 lg:grid-cols-2">
      <div className="min-h-[400px]">
        <Image
          src={CustomerStatImage}
          alt="customer stat"
          className="mx-auto block w-full sm:max-lg:w-[65%] lg:max-w-[404px] xl:max-w-[494px]"
        />
      </div>

      <div className="flex min-h-[400px] flex-col justify-center">
        <div className="mx-auto w-full sm:max-w-[493px]">
          <h2 className="text-2xl leading-[38px] md:text-3xl md:leading-[56px] lg:text-4xl lg:leading-[46px]">
            We connect our customers with the best, and help them keep up-and stay open.
          </h2>

          <div className="mt-10 space-y-6">
            {customerStatInfo.map((info) => (
              <div key={info} className="flex gap-4 sm:gap-7">
                <div className="center-item size-7 flex-shrink-0 rounded-full bg-primary sm:size-9">
                  <CheckIcon className="max-sm:scale-[0.9]" />
                </div>
                <p className="font-open-sans text-base leading-[28px] text-black sm:text-20 sm:leading-[32px]">
                  {info}
                </p>
              </div>
            ))}
          </div>

          <Link href="" className="button-primary mt-14 w-fit max-sm:mx-auto">
            Start now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
