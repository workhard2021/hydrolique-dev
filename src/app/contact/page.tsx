import { Container } from "@/app/containers/container";
import { Header } from "@/app/containers/header";
import { Wrapper } from "@/app/containers/wrapper";
import { ContactSociete } from "@/app/components/contact-societe";
import { LogoCandidature } from "@/app/components/logoCandidature";
import { Contact } from "@/app/components/contact";
import LayoutPage from "@/app/components/layoutPage";
export default function ContactPage({data}:any){
    return (<LayoutPage>
        <LogoCandidature sub_title={'Oyster-technology'} image={'../images/societe-1.jpg'} title={'Contact'}/>
        <Contact data={data}/>  
    </LayoutPage>)
}
ContactPage.defaultProps={
      data:{
          email:process.env.EMAIL,
          tel:process.env.TEL,
          site_name:process.env.SITE_NAME,
          address:process.env.ADDRESS
      }
}
