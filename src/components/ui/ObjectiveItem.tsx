import React from "react";

interface ObjectiveItemProps {
  number: number;
  title: string;
  description: string;
}

const ObjectiveItem: React.FC<ObjectiveItemProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div>
      <div className="flex flex-row text-[28px] font-bold items-center">
        <div className="bg-primary-black text-primary-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
          {number}
        </div>
        <div>{title}</div>
      </div>
      <p
        className="mt-8 xl:ml-[3.25rem]"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
};

export default ObjectiveItem;
