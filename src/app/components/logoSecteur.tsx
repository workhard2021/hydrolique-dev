'use client';
import { RevealWrapper } from "next-reveal";

export const LogoSecteur=({image,title,sub_title}:any)=>{
    if(!(image))return null;
      return (<RevealWrapper className="w-full relative" delay={200} duration={1000} reset={true}>
      <div className="relative w-full m-auto">
        <div className="relative w-full md:h-[400px] h-[300px] flex justify-center items-center m-auto">
             <div className="absolute z-0 top-0 left-0 w-full h-full item_opportunites_image_detail" style={{backgroundImage:`url(${image})`}}/>
        </div>
         {(title||sub_title)?
        <div className="flex absolute top-0 left-0 h-full w-full">
          <div className="relative md:w-[500px] md:top-24 top-16 w-[80%] m-auto bg-blue-900 rounded-sm">
              <div className="w-full md:py-8 md:px-4 py-4 px-4 m-auto">
              <p className="relative w-full md:text-[23px] text-[18px] py-2 text-center uppercase text-white  first-letter:capitalize">{title}</p>
              <h2 className="relative w-full md:text-[35px] text-[25px] uppercase text-center text-gray-100 m-auto first-letter:capitalize">{sub_title}</h2>
          </div>
        </div>
        </div>
        :null}
    </div></RevealWrapper>)
}
