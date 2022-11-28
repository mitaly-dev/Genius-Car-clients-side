import React from 'react';

const BannerItem = ({banner}) => {
    const {image,id,prev,next} = banner
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full h-[90vh] carousel-img">
        <img alt="" src={image} className="w-full" />
        <div className="absolute transform -translate-y-1/2 left-0 top-2/4 space-x-5 text-white md:ml-20 ml-5 z-10">
              <h1 className="text-5xl font-bold leading-[70px]">
              Affordable <br/> Price For Car <br/>Servicing
              </h1>
              <p className="py-6 capitalize">
              There are many variations of passages of  available, but <br/>the majority have suffered alteration in some form
              </p>
              <div>
              <button className="px-7 rounded-lg py-3 border text-white hover:bg-main hover:border-main font-semibold">Discover More</button>
              <button className="px-7 ml-2 rounded-lg py-3 border text-white hover:bg-main hover:border-main font-semibold">Latest Project</button>
              </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-14 bottom-10 space-x-5 z-20">
          <a href={`#slide${prev}`} className="btn bg-[#00000061] hover:bg-main border-none btn-circle">❮</a> 
          <a href={`#slide${next}`} className="btn bg-[#00000061] hover:bg-main border-none btn-circle">❯</a>
        </div>
      </div>
    );
};

export default BannerItem;