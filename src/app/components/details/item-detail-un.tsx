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

const ItemDetailUn=({data}:any)=>{
    return  <div className="itemDetail">
     <h1 className='title'>{data.title}</h1>
     <div className="items">
     { 
      data.list.map((val:any,index:number)=><div className="item border-[2px] border-blue-900 rounded-md" key={index}>
           <div className="image-block"><Image alt="..." src={val.image} fill className="rounded-full" /></div>
           <div className="description-block pr-3">
               <h3 className="title">{val.title}</h3>
               <p className="description">{val.subtitle}</p>
               <p  className="description">{val.description}</p>
           </div>

      </div>)
     }
     </div>
  </div>
}
ItemDetailUn.defaultProps={
    data:DATA.expertises.data[0],
}
export default ItemDetailUn;