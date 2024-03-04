export const Content=({data}:any)=>{
    return (<div className="relative w-full m-auto mb-16 bg-white">
       <div className="relative w-full m-auto md:ml-3">
               <h2 className="global-title mb-8 md:text-4xl text-2xl font-fontWeightBig leading-snug text-justify w-full m-auto">
                  {data.sub_title}
               </h2>
               <div className="flex justify-around items-center md:flex-nowrap space-y-8 flex-wrap w-full">
                  <p className="global-paragraph text-justify leading-6 w-full">
                    {data.description}
                  </p>
               {/* <div className="md:w-[40%] w-full rounded-md h-[320px] md:h-[500px] bg-url" style={{backgroundImage:`url(${data.image_2})`}} /> */}
               </div>
        </div>
        <div className="w-full m-auto py-8 flex justify-between gap-5 items-start flex-wrap">
              {data.list.map((val:any,index:number)=>{
               const arrayData=[val.subtitle,val.description];
                 return <div key={index} className="md:w-[45%] w-full min-h-[200px] bg-white">
                     <h3 className="w-full mb-2 mt-0 global-title">{val.title}</h3>
                     <ListData  arrrayValue={arrayData} />
                 </div>
              })
              }
        </div>
    </div>)
}
export const ListData=({arrrayValue}:any)=>{
   return (<div className="w-full  pl-1">
         {arrrayValue && arrrayValue.map((value:any,index:number)=>{
               return <p style={{listStyle:'initial'}} key={index} className="w-full md:pb-2 pb-2 leading-6 text-[16px] global-paragraph">
                      {value}
               </p>
              })
         }  
   </div>)
}
