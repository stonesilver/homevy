import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";

type Props = {
  img: string;
  title: string;
  description: string;
  href: string;
};

const FeatureCard = ({ img, title, description, href }: Props) => {
  return (
    <div className="w-full md:max-w-[300px]">
      <Image
        src={img}
        alt={title}
        width={300}
        height={354}
        className="h-[354px] w-full overflow-hidden rounded-3xl object-cover"
      />

      <div className="mt-3">
        <p className="text-20 leading-[30px] sm:text-2xl sm:leading-[36px]">{title}</p>
        <p className="text-base leading-[28px] text-gray-main sm:text-20 sm:leading-[32px]">{description}</p>

        <Link
          href={href}
          className="group mt-7 flex w-fit items-center gap-2 border-b border-primary pb-2 text-base font-bold text-primary hover:border-b-secondary sm:text-20"
        >
          Explore page <ArrowRightIcon className="transition-all duration-200 group-hover:translate-x-3" />
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
