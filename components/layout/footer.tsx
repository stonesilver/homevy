import PrimaryLogo from "@/assets/icons/brand-logo-primary.svg";
import NewsletterForm from "../home/newsletter-form";
import Ellipse from "@/assets/icons/ellipse-2.svg";
import { footerLinks } from "@/utils/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="content-layout min-h-[949px] pt-12">
      <div className="relative overflow-hidden rounded-xl bg-primary py-[72px]">
        <Ellipse className="absolute right-0 top-0" />

        <div className="relative z-[1] mx-auto max-w-[712px] px-6 md:px-10">
          <p className="text-center text-[1.4375rem] leading-[50px] text-white max-lg:font-medium sm:text-[2.9rem] sm:leading-[66px] xl:text-5xl xl:leading-[72px]">
            An enterprise template to ramp up your company website
          </p>

          <NewsletterForm />
        </div>
      </div>

      <div className="font-open-sans mt-20 grid grid-cols-1 py-[6.25rem] max-lg:gap-16 lg:grid-cols-[300px_auto]">
        <div className="">
          <PrimaryLogo />
          <p className="text-gray-main mt-10 text-sm leading-[24px] max-lg:max-w-[500px] sm:text-base sm:leading-[28px]">
            Social media validation business model canvas graphical user interface launch party creative facebook iPad
            twitter.
          </p>

          <p className="text-gray-main mt-14 text-sm leading-[24px] max-lg:hidden sm:text-base sm:leading-[28px]">
            All rights reserved.
          </p>
        </div>

        <div className="">
          <div className="flex flex-col max-sm:gap-12 sm:flex-row sm:justify-between lg:justify-evenly">
            {footerLinks.map(({ title, links }) => (
              <div key={title} className="">
                <h3 className="sm:text-20 text-base font-bold text-black">{title}</h3>

                <ul className="sm:text-20 text-gray-main mt-8 space-y-9 text-base">
                  {links.map(({ pillLabel, href, label }) => (
                    <li key={title + label} className="">
                      <Link href={href} className="flex items-center gap-2 hover:text-secondary">
                        {label}
                        {!!pillLabel && (
                          <span className="rounded-full bg-secondary px-[14px] text-[13px] font-bold text-primary">
                            {pillLabel}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-gray-main mt-20 text-sm leading-[24px] sm:text-base sm:leading-[28px] lg:hidden">
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
