// import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import TestimoniesCarousel from "./testimonies-carousel";

const SectionFive = () => {
  return (
    <section className="bg-primary">
      <div className="content-layout py-[5.25rem]">
        <h2 className="max-w-[716px] text-4xl leading-[50px] text-white max-lg:font-medium sm:text-[2.9rem] sm:leading-[66px] xl:text-5xl xl:leading-[72px]">
          An enterprise template to ramp up your company website
        </h2>

        {/* <div className="flex justify-end gap-7 md:-translate-y-[36px]">
          <button
            role="button"
            aria-label="Previous"
            type="button"
            className="center-item group size-[52px] rounded-full bg-white sm:size-[72px]"
          >
            <ArrowRightIcon className="rotate-180 sm:scale-150 group-hover:[&>path]:stroke-secondary" />
          </button>
          <button
            role="button"
            aria-label="Next"
            type="button"
            className="center-item group size-[52px] rounded-full bg-white sm:size-[72px]"
          >
            <ArrowRightIcon className="sm:scale-150 group-hover:[&>path]:stroke-secondary" />
          </button>
        </div> */}

        <TestimoniesCarousel />
      </div>
    </section>
  );
};

export default SectionFive;
