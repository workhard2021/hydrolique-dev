'use client';
import DATA from '@/app/constants/data';
import { RevealWrapper } from 'next-reveal';
import Image from 'next/image';
type typeProps = {
     data: any[],
     image: string | null
}
const AfterHeader=({data,image}:typeProps)=>{
    return <RevealWrapper className="w-full relative" delay={200} duration={1000} reset={true}>
        <div className="afterHeader md:mb-16 mb-0">
          <div className='description'>
           {data.map((val,index)=>{
               return <div key={index} className='item'>
                   <h2 className='md:text-start text-center'>{val.title}</h2>
                   <p className="w-full">{val.description}</p>
               </div>
          })}
          </div> 
          <div className='image'>
             <Image className="src-image" src={image||''} alt="..." fill/>
          </div> 
     </div>
  </RevealWrapper>
}

AfterHeader.defaultProps={
     image:DATA.missionRaison.image,
     data:DATA.missionRaison.data,
}
export default AfterHeader;