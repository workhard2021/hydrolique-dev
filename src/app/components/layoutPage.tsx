import React from "react"
// import { CookiesSite } from "./cookies-site"
import { ScrollTop } from "./scrollTop"
import { Header } from "../containers/header"
import Contact from "./home/contact"

  type typeProps={
    children: React.ReactNode|React.ReactNode[]
  }
  const LayoutPage=({children}:typeProps)=>{
    return <>
      <Header/>
     <main className="w-full h-full flex justify-center">
        <div className="mx-auto w-full"> 
           {children} 
        </div> 
        {/* <CookiesSite /> */}
        <ScrollTop />
    </main>
    <Contact/>
    </>
}
export default LayoutPage