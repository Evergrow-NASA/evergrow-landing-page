import Header from "@/components/wrappers/Header";
import Image from "next/image";
import React from "react";

interface ArticleProps {
  title: string;
  subtitle: string;
  image: string;
  imageDescription: string;
  columnContent: React.ReactNode;
  bottomContent?: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({
  title,
  subtitle,
  image,
  imageDescription,
  bottomContent,
  columnContent,
}) => {
  return (
    <div>
      <h4 className="mb-5">{subtitle}</h4>
      <Header className="text-center xl:text-left" title={title} />
      <div className={`mt-12 text-justify`}>
        <div className="mt-8 xl:mt-0">{columnContent}</div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="flex flex-col items-start">
          <Image
            src={image}
            alt={imageDescription}
            className="leaf-crop-right h-[200px] sm:h-[300px] xl:h-[437px] w-[899px] xl:w-auto mb-4"
            width={400}
            height={300}
            loading="lazy"
          />
          <p className="w-[400px] text-[16px]">{imageDescription}</p>
        </div>
      </div>
      <div className="mt-8">{bottomContent}</div>
    </div>
  );
};

export default Article;
