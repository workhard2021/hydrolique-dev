"use client"; 
import { useEffect, useState } from "react";
import { BiChevronUp } from "react-icons/bi";

export const ScrollTop=()=>{
  const [scroll,setScroll]=useState(0);
  const scrollTopPage=(e:any)=>{
        e.preventDefault();
        window.scroll({
            top:0,
            left:0,
            behavior: 'smooth'
        });
  }
  useEffect(()=>{
      const el=document.getElementById('scroll-top');
      let a:number=0;
      if(window){
        window.addEventListener('scroll',function(){
            a= window.pageYOffset;
            setScroll(a);
        });
      }
      if(el){
             if(el.offsetTop<=scroll){
                el.style.opacity="1";
                el.style.transition="opacity 0.8s ease-in-out";
             }else{
                el.style.opacity="0";
                el.style.transition="opacity 0.8s ease-in-out";
             }
      }
  },[scroll]);
    return (<div className="w-full z-50 fixed top-[80%] h-0 flex justify-end right-[3%]" id="scroll-top">
             <div onClick={(e)=>scrollTopPage(e)} className="cursor-pointer md:w-[40px] md:h-[40px] w-[40px] h-[40px] flex justify-center rounded-full items-center bg-blue-300">
                  <BiChevronUp className="inline" size={30}/>
             </div>
    </div>)
}