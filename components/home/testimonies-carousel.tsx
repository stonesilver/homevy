"use client";

import { userTestimonies } from "@/utils/constants";
import Image from "next/image";
import { MouseEvent, useRef } from "react";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";

const TestimoniesCarousel = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (event: MouseEvent<HTMLButtonElement>) => {
    const scrollLeft = containerRef.current?.scrollLeft ?? 0;
    const cardWidth = containerRef.current?.children[0]?.scrollWidth ?? 0;
    const clientWidth = containerRef.current?.clientWidth ?? 0;
    const scrollWidth = containerRef.current?.scrollWidth ?? 0;
    const buttonLabel = (event.target as HTMLButtonElement)?.dataset?.direction as unknown as "Previous" | "Next";

    if (buttonLabel === "Previous") {
      if (scrollLeft + clientWidth < scrollWidth) {
        containerRef.current?.scrollTo({
          left: Number(scrollLeft) + Number(cardWidth) + 22,
          behavior: "smooth",
        });
      }
    } else if (buttonLabel === "Next") {
      if (scrollLeft >= 0) {
        containerRef.current?.scrollTo({
          left: Number(scrollLeft) - Number(cardWidth) - 22,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <div className="flex justify-end gap-7 md:-translate-y-[36px]">
        <button
          role="button"
          aria-label="Next"
          type="button"
          data-direction="Next"
          className="center-item group size-[52px] rounded-full bg-white sm:size-[72px]"
          onClick={handleScroll}
        >
          <ArrowRightIcon
            data-direction="Next"
            className="rotate-180 select-none sm:scale-150 group-hover:[&>path]:stroke-secondary"
          />
          {/* </span> */}
        </button>
        <button
          role="button"
          aria-label="Previous"
          data-direction="Previous"
          type="button"
          className="center-item group size-[52px] rounded-full bg-white sm:size-[72px]"
          onClick={handleScroll}
        >
          <ArrowRightIcon
            data-direction="Previous"
            className="select-none sm:scale-150 group-hover:[&>path]:stroke-secondary"
          />
        </button>
      </div>

      <div className="mt-5 overflow-hidden lg:mt-14">
        <div ref={containerRef} className="hide-scroll-bar flex w-full flex-nowrap gap-[1.375rem]">
          {userTestimonies.map(({ testimony, name, title, img }, index) => (
            <div
              key={name + index}
              className="h-fits flex min-w-[calc(100vw-40px)] max-w-[calc(100vw-40px)] flex-col rounded-xl bg-white px-5 py-10 font-open-sans sm:min-w-[360px] sm:max-w-[360px] sm:px-10"
            >
              <p className="text-lg leading-[28px] sm:text-2xl sm:leading-[36px]">&quot;{testimony}&quot;</p>

              <div className="mt-10 flex flex-1 items-end gap-3">
                <div className="size-10 overflow-hidden rounded-full sm:size-[58px]">
                  <Image src={img} alt="" width={58} height={58} />
                </div>

                <div className="">
                  <p className="text-sm font-bold leading-[28px] text-primary sm:text-base sm:leading-[32px]">{name}</p>
                  <p className="text-xs leading-[28px] text-primary sm:text-sm sm:leading-[32px]">{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimoniesCarousel;
