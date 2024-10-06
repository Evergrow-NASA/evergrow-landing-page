import Header from "@/components/wrappers/Header";
import Image from "next/image";
import React from "react";

interface ArticleProps {
  title: string;
  image: string;
  columnContent: React.ReactNode;
  bottomContent?: React.ReactNode;
  isFlipped?: boolean;
}

const Article: React.FC<ArticleProps> = ({
  title,
  image,
  bottomContent,
  columnContent,
  isFlipped = false,
}) => {
  return (
    <div>
      <Header className="text-center xl:text-left" title={title} />
      <div className={`grid grid-cols-1 xl:grid-cols-2 gap-x-14 xl:gap-x-20 mt-12 text-justify`}>
        {isFlipped ? (
          <>
            <Image
              src={image}
              alt={title}
              className="leaf-crop-right h-[200px] sm:h-[300px] xl:h-[360px] w-[400px] xl:w-auto mx-auto"
              width={400}
              height={300}
            />
            <div className="mt-8 xl:mt-0">{columnContent}</div>
          </>
        ) : (
          <>
            <div className="mb-8 xl:mb-0">{columnContent}</div>
            <Image
              src={image}
              alt={title}
              className="leaf-crop-left h-[200px] sm:h-[300px] xl:h-[360px] w-[400px] xl:w-auto mx-auto"
              width={400}
              height={300}
            />
          </>
        )}
      </div>
      <div className="mt-8">{bottomContent}</div>
    </div>
  );
};

export default Article;
