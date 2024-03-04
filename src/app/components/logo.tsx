import DATA from "../constants/data"

export const Logo=({data=DATA.logo}:any)=>{
    return <div style={{backgroundImage:`url(${data.image})`}} className='w-full h-[70vh] shadow-xl text-white flex justify-center items-center flex-col bg-url'>
          <h2 className='text-2xl md:text-4xl text-white mb-3'>{data.title}</h2>
          <div className='w-full'>
            <p className='text-lg md:text-xl text-white  text-center'>{data.description}</p>
            <p className='text-lg md:text-xl text-white text-center'>{data.description2}</p>
          </div>
    </div>
}