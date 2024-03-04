import DATA from "@/app/constants/data";
import Image from "next/image";
type TypeListProps={
       id: number,
       title : string,
       image: string,
       description: string,
       subtitle: string, 
}
type TypeProps={
    id: number,
    title : string,
    image: string,
    description: string,
    list: TypeListProps[], 
}

const ItemDetailTrois=({data,background,borderColor}:any)=>{
    return  <div className="itemDetail itemDetail-deux">
     <h1 className='title'>{data.title}</h1>
     <div className="items">
     {
      data.list.map((val:any,index:number)=><div className="item" key={index}>
           <div className={`image-block-deux flex justify-center ${borderColor} ${background} border-[2px] rounded-md`}>
             <h2 className="text-xl text-extrabold text-center text-white m-auto">{val.title}</h2>
           </div>
           <div className={`description-block flex items-center border-[2px] ${borderColor} rounded-md`}>
               <div className="w-full pr-3">
                    <p className="description">{val.subtitle}</p>
                    <p className="description">{val.description}</p>
                </div>
           </div>
      </div>)
     }
     </div>
  </div>
}
ItemDetailTrois.defaultProps={
    data:DATA.expertises.data[0],
    background:"bg-blue-500",
    borderColor:"bg-blue-500",
}
export default ItemDetailTrois;