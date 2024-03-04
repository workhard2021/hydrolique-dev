import { Content } from "@/app/components/content";
import { ItemSectionSociete } from "@/app/components/item-section-societe";
import LayoutPage from "@/app/components/layoutPage";
import { LogoSecteur } from "@/app/components/logoSecteur";
import DATA from "@/app/constants/data";
import { Wrapper } from "@/app/containers/wrapper";

export default function Article({params}:any){
    const {slug}=params
    let data :any=DATA.expertises.data.find((value:any) =>value.slug===slug);
    const image='..'+data.image;
    return (<LayoutPage>
                 <LogoSecteur sub_title={data.title} image={image} title={'Expertise'}/>
                 <Wrapper>
                   <Content data={data}/>
                   {/* <ItemSectionSociete title="Expertises"/> */}
                 </Wrapper>
    </LayoutPage>)
}
export async function generateStaticParams() {
    return DATA.expertises.data.map((value:any) =>{
        slug:value.slug
    });
  }
