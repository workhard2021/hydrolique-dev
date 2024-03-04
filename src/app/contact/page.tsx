import { LogoCandidature } from "@/app/components/logoCandidature";
import { Contact } from "@/app/components/contact";
import LayoutPage from "@/app/components/layoutPage";
import { Wrapper } from "../containers/wrapper";
export default function ContactPage({data}:any){
    return (<LayoutPage>
        <LogoCandidature sub_title={'Oyster-technology'} image={'../images/societe-1.jpg'} title={'Contact'}/>
        <Wrapper>
          <Contact data={data}/> 
        </Wrapper> 
    </LayoutPage>)
}
ContactPage.defaultProps={
      data:{
          email:process.env.NEXT_PUBLIC_EMAIL,
          tel:process.env.NEXT_PUBLIC_TEL,
          address:process.env.NEXT_PUBLIC_ADDRESS
      }
}
