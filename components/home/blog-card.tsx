import Link from "next/link";
import Image from "next/image";

type Props = {
  img: string;
  author: string;
  highlight: string;
  href: string;
  category: string;
  datePublished: string;
  authorImg: string;
};

const BlogCard = ({ img, author, highlight, href, category, datePublished, authorImg }: Props) => {
  return (
    <div className="flex w-full flex-col md:max-w-[300px] lg:max-w-[344px]">
      <Image
        src={img}
        alt={author}
        width={300}
        height={209}
        className="h-[209px] w-full overflow-hidden rounded-2xl object-cover"
      />

      <div className="mt-3 flex flex-1 flex-col">
        <p className="text-20 inline-flex gap-3 leading-[30px] sm:text-2xl sm:leading-[36px]">
          <span className="text-sm font-bold text-primary sm:text-base">{category}</span>
          <span className="text-gray-main text-sm sm:text-base">{datePublished}</span>
        </p>

        <Link
          href={href}
          className="sm:text-20 mt-3 block text-base leading-[28px] text-black hover:underline sm:leading-[32px]"
        >
          {highlight}
        </Link>

        <div className="mt-5 flex flex-1 items-end gap-3">
          <div className="size-8 overflow-hidden rounded-full">
            <Image src={authorImg} alt={author} width={32} height={32} className="object-cover" />
          </div>

          <p className="text-sm sm:text-base">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
