"use client";

import { cn } from "@/utils/utils";
import { ReactNode, useState } from "react";
import ChevronDownIcon from "@/assets/icons/chevron-down.svg";

type Props = { open?: boolean; title: ReactNode; children: ReactNode };

const Collapsible = ({ open, title, children }: Props) => {
  const [openContent, setOpen] = useState(open ?? false);

  const handleToggle = () => {
    setOpen((prevS) => !prevS);
  };

  return (
    <div className="">
      <button
        type="button"
        className={cn(
          "flex w-full justify-between gap-5 text-left font-open-sans text-base leading-[28px] text-black transition-all duration-200 sm:text-20 sm:leading-[32px]",
          openContent ? "font-medium" : undefined
        )}
        onClick={handleToggle}
      >
        {title}
        <span className="center-item ml-auto size-7 rounded-full bg-primary">
          <ChevronDownIcon />
        </span>
      </button>

      <div
        className={cn(
          "mt-2 overflow-hidden border-b border-b-[#C4C4C4] font-open-sans transition-all duration-[250ms]",
          openContent ? "max-h-[700px] pb-5" : "max-h-0"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
