"use client"
import {useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { RevealWrapper } from "next-reveal";

export type formType={
       first_name:string,
       last_name:string,
       country:string,
       city:string,
       cv:string,
       tel:string,
       email:string,
       message:string,    
}

export const CandidatureSpontanee=({listCountry,paraph}:any)=>{
     const limitCaracterMessage=600;
     const initLocalData={first_name:'',last_name:'',country:'',city:'',cv:'',tel:'',email:'',message:''};
     const [message,setMessage]=useState({success:'',error:''});
     const [localData,setLocalData]=useState<formType>(initLocalData)
     const [labelError,setLabelError]=useState<formType>(initLocalData);
     const [isLimiteMessage,setIsLimiteMessage]=useState<boolean>(false);
     const [is_loading,setIsLoading]=useState<boolean>(false);
     const form =useRef<any>(null);

     const saisir=(e:any)=>{
        e.preventDefault();
        const {value,name,}=e.target;
        if(name==='cv'){
              const file=e.target.files[0];
              const listExtensions=['pdf','jpg','png','docx','jpeg'];
              const extension=file.type? file.type.split('/')[1]:'';
              if(file.size > 600000){
                return setLabelError((v)=>{return {...v,[name]:'la taille de fichir doit être inférieur à 600 ko'}})
              }else{
                 setLabelError((v)=>{return {...v,[name]:''}})
              }
              if(!listExtensions.includes(extension)){
                  return setLabelError((v)=>{return {...v,[name]:`Fichier doit être de type: ${listExtensions.toString()}` }})
              }else{
                 setLabelError((v)=>{return {...v,[name]:''}})
              }
              return setLocalData((v)=>{return {...v,[name]:e.target.files[0]}});
        }
        if(name==="message"){
            if(value.length-1>=limitCaracterMessage){
                return setIsLimiteMessage(v=>!v);
            }else{
                setIsLimiteMessage(()=>false);
                setLocalData((v)=>{return {...v,[name]:value}}); 
            }
            setLabelError((v)=>{return {...v,[name]:`${value.length}/${limitCaracterMessage}`}})
        }
        setLocalData((v)=>{return {...v,[name]:value}});
     }
     const scrollPage=()=>{
        window.scrollTo(({
             left:0,
             top:200,
             behavior: 'smooth'
            }))
     }
     const send=async(e:Event)=>{
        e.preventDefault();
        setLabelError(initLocalData);
        setMessage({success:'',error:''});
        setIsLoading(true);
        let test=false,error_message='Veuillez verifier les champs',label='*';
        if(!localData.first_name){
           setLabelError((v:any)=>{return{...v,first_name:label}});
           setMessage(()=>{return {success:'',error:error_message}});
           test=true;
        }
        if(!localData.last_name){
            setLabelError((v:any)=>{return{...v,last_name:label}});
            setMessage(()=>{return {success:'',error:error_message}});
            test=true;
        }
        if(!localData.country){
            setLabelError((v:any)=>{return{...v,country:label}});
            setMessage(()=>{return {success:'',error:error_message}});
            test=true;
        }
        if(!localData.city){
            setLabelError((v:any)=>{return{...v,city:label}});
            setMessage(()=>{return {success:'',error:error_message}});
            test=true;
        }
        // if(!localData.cv){
        //     setLabelError((v:any)=>{return{...v,cv:label}});
        //     setMessage(()=>{return {success:'',error:error_message}});
        //     test=true;
        // }
        if(!localData.email){
             setLabelError((v:any)=>{return{...v,email:label}});
             setMessage(()=>{return {success:'',error:error_message}});
             test=true;
        }
        if(!localData.tel){
            setLabelError((v:any)=>{return{...v,tel:label}});
            setMessage(()=>{return {success:'',error:error_message}});
            test=true;
        }
        if(test){
             scrollPage();
             setIsLoading((v)=>false)
             return null;
        }
        const body:any=new FormData();
        for(const [key,value] of Object.entries(localData)){
             body.append(key,value);
        }
        let res:any=await fetch('/api/candidature-spontanee',{
            method:'POST',
            body
      });
      setIsLoading((v)=>false)
      const data:any=form.current;
      emailjs.sendForm('service_r1m3gur', 'template_accjp6f',data,'rTjSc67d6KtvrRglk')
      .then((result) => {
           if(result.text==='OK'){
            setMessage(()=>{return{success:'Votre message a bien été envoyé avec succès nous vous répondrons rapidement',error:''}});
               setLocalData(initLocalData);
               setLabelError(initLocalData);
               scrollPage();
           }
      }, (error) => {
          setMessage(()=>{return{success:'',error:"Impossible d'envoyer le message"}});
          scrollPage();
      });
   }
     return (<RevealWrapper className="w-full relative mb-24" delay={200} duration={1000} reset={true}>
       <div className="w-full md:w-[70%] m-auto candidature-spontanee">
            <div className="w-full px-auto md:my-16 my-8">
                <h5 className="py-2 w-full text-center">{paraph}</h5>
             </div>
             {message.success &&<p className="w-full py-4 text-xl text-center text-blue-800">{message.success}</p>}
             {message.error &&<p className="w-full py-4 text-xl text-center text-red-500">{message.error}</p>}
             <form ref={form} className="w-full md:my-8 my-4" onSubmit={(e:any)=>send(e)}>
                 <div className="mb- w-full flex justify-between flex-wrap">
                   <div className="w-full md:w-[49%] my-2 flex justify-center flex-wrap">
                          <label className="w-full block text-red-400 text-[18px] h-[20px]" htmlFor="first_name">{labelError.first_name||''}</label>
                          <input placeholder="Nom" className="rounded-md outline-none p-1 w-full inline-block h-[40px] border-b-[1px]" type="text" name="first_name" value={localData.first_name}  onChange={saisir}  id="first_name"/>
                    </div>
                    <div className="w-full md:w-[49%] my-2 flex justify-center flex-wrap">
                        <label className="w-full block text-red-400 text-[18px] h-[20px]" htmlFor="last_name">{labelError.last_name||''}</label>
                        <input placeholder="Prénom" className="rounded-md outline-none p-1 w-full inline-block h-[40px] border-b-[1px]" type="text" name="last_name" value={localData.last_name}  onChange={saisir} id="last_name"/>
                     </div>
                 </div>
                 <div className="mb- w-full flex justify-between flex-wrap">
                   <div className="w-full md:w-[49%] my-2 flex justify-center flex-wrap">
                          <label className="w-full block text-red-400 text-[18px] h-[20px]" htmlFor="email">{labelError.email||''}</label>
                          <input placeholder="Email" className="rounded-md outline-none p-1 w-full inline-block h-[40px] border-b-[1px]" type="email" name="email" value={localData.email}  onChange={saisir} id="email"/>
                    </div>
                    <div className="w-full md:w-[49%] my-2 flex justify-center flex-wrap">
                        <label className="w-full block text-red-400 text-[18px] h-[20px]" htmlFor="tel">{labelError.tel || ''}</label>
                        <input placeholder="Numéro de téléphone" className="rounded-md outline-none p-1 w-full inline-block h-[40px] border-b-[1px]" type="text" name="tel" value={localData.tel}  onChange={saisir}  id="tel"/>
                     </div>
                 </div>
                 <div className="mb- w-full flex justify-between flex-wrap">
                   <div className="w-full md:w-[49%] my-2 flex justify-center flex-wrap">
                          <label className="w-full block text-red-400 text-[18px] h-[20px]" htmlFor="country">{labelError.country || ''}</label>
                          <select  className="outline-none bg-white p-1 w-full inline-block h-[40px] border-b-[1px]" name="country" value={localData.country}  onChange={saisir} id="country">
                               {listCountry.map((value:any,index:number)=>{
                                 return (<option key={index} value={value.name}>{value.name}</option>)
                               })}
                          </select>
                    </div>
                    <div className="w-full md:w-[49%] my-2 flex justify-center flex-wrap">
                        <label className="w-full block text-red-400 text-[18px] h-[20px]" htmlFor="city">{labelError.city || ''}</label>
                        <input placeholder="Ville" className="rounded-md outline-none p-1 w-full inline-block h-[40px] border-b-[1px] " type="text" name="city" value={localData.city}  onChange={saisir} id="city"/>
                     </div>
                 </div>
                 <div className="mb- w-full flex justify-between flex-wrap">
                    <div className="w-full my-2 flex justify-center flex-wrap">
                        <label className="w-full block text-red-400 text-[18px] h-[20px]" htmlFor="cv">{labelError.cv || ''}</label>
                        <input className="file rounded-md outline-none p-1 w-full inline-block h-[40px]"  type="file" name="cv"  onChange={saisir} id="cv"/>
                    </div>
                 </div>
                 <div className="mb-4 w-full flex justify-between flex-wrap">
                      <label className="w-full block text-[18px] h-[20px] mb-4" htmlFor="message">Message: (facultatif) : <span className={`${isLimiteMessage?'text-red-500':''}`}>{labelError.message|| ''}</span></label>
                      <textarea id="message" name='message' value={localData.message||''}  onChange={saisir} rows={8} className="outline-none  rounded-md w-full border-b-[1px] p-1" placeholder="Message"></textarea>
                 </div>
                 <div className="mb- w-full flex justify-center items-center">
                     <button  disabled={is_loading} className={`h-[45px] text-[17px] text-white w-full m-auto bg-[rgb(30,58,138)] ${is_loading? 'hover:bg-[rgb(57,82,151)]':''} rounded-md`}>Soumission</button>
                 </div>
             </form>
    </div></RevealWrapper>)
}
