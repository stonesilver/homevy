import SecondaryLogo from "@/assets/icons/brand-logo-secondary.svg";
import { cn } from "@/utils/utils";
import Link from "next/link";

type Props = {
  className?: HTMLDivElement["className"];
};

const Header = ({ className }: Props) => {
  return (
    <div className={cn("content-layout sticky top-0 z-[5] flex h-11 items-center justify-between", className)}>
      <Link href="/" className="size-fit" role="link" aria-label="Brand logo">
        <SecondaryLogo className="max-md:w-10" />
      </Link>

      <ul className="font-open-sans flex items-center gap-8 font-semibold lg:gap-10">
        <li className="text-white max-md:hidden">
          <Link href="#">Product</Link>
        </li>
        <li className="text-white max-md:hidden">
          <Link href="#">Services</Link>
        </li>
        <li className="text-white max-md:hidden">
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="/auth/sign-in" className="button-white h-10 px-8 lg:px-10">
            Log In
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
