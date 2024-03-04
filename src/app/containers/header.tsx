'use client'
import { HEADER_MENU } from "../constants/headers-menu"
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";
export const Header=({logo='../images/logo.png',data=HEADER_MENU}:any)=>{
    return (<header className="w-full z-20 sticky top-0 bg-white shadow-sm shadow-gray-100">
           <HeaderDesktop logo={logo} data={data}/>
           <HeaderMobile logo={logo} data={data}/>
    </header>)
}