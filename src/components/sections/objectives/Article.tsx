import Header from "@/components/wrappers/Header";
import Image from "next/image";
import React from "react";

interface ArticleProps {
  title: string;
  image: string;
  columnContent: React.ReactNode;
  isFlipped?: boolean;
}

const Article: React.FC<ArticleProps> = ({
  title,
  image,
  columnContent,
  isFlipped = false,
}) => {
  return (
    <div>
      <h4>{title}</h4>
      <div
        className={`flex flex-col xl:flex-row gap-x-14 xl:gap-x-20 mt-12 text-justify`}
      >
        {isFlipped ? (
          <>
            <Image
              src={image}
              alt={title}
              className="h-[200px] w-auto sm:h-[300px] xl:h-[400px] xl:w-auto mx-auto xl:mx-0"
              width={400}
              height={400}
              loading="lazy"
            />
            <div className="mt-8 xl:mt-0">{columnContent}</div>
          </>
        ) : (
          <>
            <div className="mb-8 xl:mb-0">{columnContent}</div>
            <Image
              src={image}
              alt={title}
              className="h-[200px] w-auto sm:h-[300px] xl:h-[400px] xl:w-auto mx-auto xl:mx-0"
              width={400}
              height={400}
              loading="lazy"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Article;
