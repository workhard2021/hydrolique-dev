import DATA from "@/app/constants/data"
import Link from "next/link"
import IconContact from "../iconContact"
import Image from "next/image"

const Contact = ({data}:any)=>{
     return <div className="relative w-full bg-slate-200 h-[600px] md:pb-8 flex flex-col">
           <div className='absolute z-0 top-0 right-0 contact-image'>
               <Image src={data.firstImage} alt="..." fill />
           </div>
           <div className="w-full z-10 md:w-[60%] p-[20px] md:p-[40px]">
             <h1 className='contact-title mb-12 text-start capitalize'>{data.title}</h1>
             <p className="mb-4">{data.description}</p>
           </div>
            <div className="bg-blue-900 mt-auto p-2 py-3 md:py-8 px-5 md:rounded-r-[80px] w-full md:w-[90%] flex flex-wrap md:flex-nowrap">{
                 data.list.map((val:any,index:number)=>{
                    return <div key={index} className="md:w-[30%] w-[100%] flex flex-wrap justify-center">
                       <span className="inline-block mb-4"><IconContact typeIcon={val.icon}/></span>
                       <div className="w-full text-center">{val.url?
                           <Link className="text-white text-xl" href={val.url} >{val.title}</Link>
                           :
                           <span className="text-white text-xl">{val.title}</span>
                        }</div>
                   </div>
                 })
               }
            </div>
       </div>
}
Contact.defaultProps={
   data:DATA.contact
}
export default Contact;