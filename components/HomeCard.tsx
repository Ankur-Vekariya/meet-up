import Image from "next/image";
import React from "react";

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
}

function HomeCard({ img, title, description, handleClick }: HomeCardProps) {
  return (
    <div
      className="bg-orange-600 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex-center size-12 rounded-[12px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
        <Image src={img} alt="addMettingIcon" height={24} width={24} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
}

export default HomeCard;
