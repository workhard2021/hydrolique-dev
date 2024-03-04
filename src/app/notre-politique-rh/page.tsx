'use client';
import { RevealWrapper } from "next-reveal";
import LayoutPage from "../components/layoutPage";
import { LogoSecteur } from "../components/logoSecteur";
import { NotrePolitiqueRh } from "../components/notre-polique-rh";
import { Wrapper } from "../containers/wrapper";

export default function PageNotrePolitiqueRh({data}:any){
    return (<LayoutPage>
                 <LogoSecteur sub_title={data.sub_title} image={data.image} title={data.expertise}/>
                 <Wrapper>
                   <NotrePolitiqueRh/>
                 </Wrapper>
    </LayoutPage>)
}
PageNotrePolitiqueRh.defaultProps={
       data:{ 
         title:'',
         sub_title:'',
         image:'../images/nous-rejoindre/candidature-spontanee.png'
       }
}
