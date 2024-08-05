'use client';

import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  sub: string;
  background: string;
  icon: string;
  open: boolean;
  onClick: () => void;
};

const DestinationsItems: React.FC<Props> = ({
  title,
  sub,
  background,
  icon,
  open = false,
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative 
        overflow-hidden
        transition-all
        ease-linear
        duration-200
        flex-grow
        mx-3
        flex
        items-center
        justify-center
        ${open ? 'flex-grow-[4.4] scale-100 max-w-[10] md:rounded-[20px]' : 'flex-grow-[1] md:rounded-[20px]'}
        h-[200px] md:h-[250px]
      `}
      style={{ backgroundImage: background, backgroundSize: 'cover' }}
    >
      <div className={`
        absolute 
        flex
        items-center
        right-0 
        transition-all 
        duration-500 
        ease-out 
        ${open ? 'bottom-[20px] left-[20px]' : 'bottom-[10px] left-[10px]'}
      `}>
        <div className="
          flex items-center 
          justify-center 
          w-[40px] 
          h-[40px] 
          rounded-full
          bg-yellow-400
          text-black
        ">
          <i className={icon}></i>
        </div>
        <div className="
          flex 
          flex-col 
          justify-center 
          ml-[20px]
          text-yellow-400
          whitespace-pre
        ">
          <div className={`
            relative 
            transition-all 
            duration-500 
            ease-out
            ${open ? 'left-0 opacity-100' : 'left-[20px] opacity-0'}
          `}>
            <div className="
              font-bold 
              text-[1.2rem]
            ">
              {title}
            </div>
            <div className="
              transition-delay-100
            ">
              {sub}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-10 left-3">
        {open ? (
          <Image
            alt=""
            src="/icon-minus.svg"
            width={30}
            height={30}
            className="h-[30px] w-[30px]"
          />
        ) : (
          <Image
            src="/icon-plus.svg"
            alt=""
            width={30}
            height={30}
            className="h-[30px] w-[30px]"
          />
        )}
      </div>
    </div>
  );
};

export default DestinationsItems;
