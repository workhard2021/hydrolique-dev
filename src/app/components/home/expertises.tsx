import DATA from '@/app/constants/data';
import { RevealWrapper } from 'next-reveal';
import Image from 'next/image';
type typeProps = {
     data: any[],
     title: string,
}
const Expertises=({data,title}:typeProps)=>{
    return <div className="expertise">
            <h1 className='title'>{title}</h1>
            <div className='items gap-5'>
                 {data.map((value,index)=>{
                    return  <RevealWrapper key={index} className="w-full relative" delay={200} duration={1000} reset={true}>
                    <div  className='item'>
                          <div className='image'>
                              <Image src={value.image} alt="..." fill/>
                          </div>
                          <div className='item'>
                              <h3 className='title'>{value.title}</h3>
                              <p className='description'>{value.description}</p>
                          </div>
                    </div></RevealWrapper>
                 })}

            </div>
     </div>
}

Expertises.defaultProps={
     title: DATA.expertises.title,
     data:DATA.expertises.data,
}
export default Expertises;