import Link from "next/link";
import BlogAndServicesSection from "./blog-and-services-section";
import { blogPost } from "@/utils/constants";
import BlogCard from "./blog-card";

const SectionSeven = () => {
  return (
    <>
      <BlogAndServicesSection
        title="Our Blog"
        desc=" Value proposition accelerator product management venture"
        className="mx-auto w-fit !gap-x-8"
      >
        {blogPost.map(({ category, datePublished, authorImg, highlight, img, author, href }, index) => (
          <BlogCard
            key={author + index}
            author={author}
            img={img}
            category={category}
            datePublished={datePublished}
            highlight={highlight}
            authorImg={authorImg}
            href={href}
          />
        ))}
      </BlogAndServicesSection>

      <Link href="#" className="button-ghost mx-auto w-fit ring-2 ring-primary">
        Load more
      </Link>
    </>
  );
};

export default SectionSeven;
