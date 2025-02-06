import Link from "next/link";
import NotFoundIcon from "@/assets/icons/404.svg";

const NotFound = () => {
  return (
    <div className="content-layout center-item h-dvh flex-col py-[6.25rem]">
      <div className="center-item flex-1 flex-col">
        <NotFoundIcon className="max-md:scale-[0.7]" />
        <h1 className="mt-4 text-center text-2xl font-medium text-primary sm:text-4xl">Boo! Page missing!</h1>
        <p className="mx-auto mt-2 max-w-[472px] text-center text-sm text-gray-main sm:text-base">
          It&lsquo;s gone... vanished like a phantom. But don&lsquo;t worry, the site&lsquo;s still full of treats!
        </p>
      </div>

      <Link href="/" className="button-primary w-fit text-lg font-semibold sm:text-20">
        Find shelter
      </Link>
    </div>
  );
};

export default NotFound;
