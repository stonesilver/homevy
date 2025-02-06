import { cn } from "@/utils/utils";
import { ReactNode } from "react";

type Props = {
  title: string;
  desc: string;
  children: ReactNode;
  className?: string;
};
const BlogAndServicesSection = ({ title, desc, className, children }: Props) => {
  return (
    <section className="content-layout py-[5.25rem]">
      <h2 className="text-gray-main sm:text-20 font-open-sans text-center text-base">{title}</h2>
      <p className="mx-auto max-w-[842px] text-center text-3xl leading-[45px] text-black max-lg:font-medium sm:text-[2.9rem] sm:leading-[66px] xl:text-5xl xl:leading-[72px]">
        {desc}
      </p>

      <div
        className={cn(
          "font-open-sans mt-16 flex flex-wrap justify-center gap-x-8 gap-y-[5.25rem] sm:mt-20 md:gap-x-14 lg:justify-evenly xl:gap-[6.25rem]",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default BlogAndServicesSection;
