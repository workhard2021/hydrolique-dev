import DATA from "../constants/data"

export const Logo=({data=DATA.logo}:any)=>{
    return <div style={{backgroundImage:`url(${data.image})`}} className='relative w-full h-[50vh] md:h-[70vh] text-white flex justify-center items-center flex-col bg-url'>
          <div className="bg-[rgba(45,74,102,0.5)] absolute top-0 left-0 w-full h-full"></div>
          <h2 className='px-4 font-extrabold text-4xl text-center md:text-5xl text-white z-50 mb-3'>{data.title}</h2>
          <p className='px-4 font-extrabold z-50 text-xl md:text-2xl text-white text-center pb-0'>{data.description}</p>
    </div>
}