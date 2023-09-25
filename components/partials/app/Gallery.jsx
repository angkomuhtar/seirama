import Image from "next/image";
import React from "react";

const Gallery = ({ src }) => {
  return (
    <div className='relative w-full aspect-[5/3] group overflow-hidden'>
      <Image src={src} fill className='object-cover' />
      <div className='absolute bg-appPrimary-950/70 top-0 right-0 bottom-0 w-0 group-hover:w-full transition-all duration-200'></div>
      <div className='absolute -left-[50%] bottom-0 pl-6 pb-10 group-hover:left-0 transition-all group-hover:delay-150 group-hover:duration-100'>
        <h3 className='text-appNetral-50 font-open_sans font-bold text-base'>
          Nama kegiatan
        </h3>
        <p className='text-appNetral-50 font-open_sans font-medium text-xs'>
          09 january 2010
        </p>
      </div>
    </div>
  );
};

export default Gallery;
